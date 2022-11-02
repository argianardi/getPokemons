import React, { useEffect, useState } from "react";
import axios from "axios";

import { MdSearch } from "react-icons/md";
import { IoSunny, IoMoon } from "react-icons/io5";

import { Card } from "../components/Card";
import { Header } from "../components/Header";
import "../styles/App.css";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

function Home() {
  const [pokeData, setPokeData] = useState([]);
  const [text, setText] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((response) => {
        setLoading(false);
        setNextPageUrl(response.data.next);
        setPrevPageUrl(response.data.previous);
        getPokemons(response.data.results);
      })
      .catch((error) => {
        console.log(error.toString());
      });
    return () => cancel();
  }, [currentPageUrl]);

  const getPokemons = (response) => {
    response.map((item) => {
      axios
        .get(item.url)
        .then((results) => {
          setPokemons((state) => {
            state = [...state, results.data];
            return state;
          });
        })
        .catch((error) => {
          console.log(error.toString());
        });
    });
  };

  const gotoNextPage = () => {
    setPokemons([]);
    setCurrentPageUrl(nextPageUrl);
  };

  const gotoPrevPage = () => {
    setPokemons([]);
    setCurrentPageUrl(prevPageUrl);
  };

  return (
    <>
      {loading ? (
        <div className="h-screen min-w-full">
          <p className="mt-[300px] text-5xl text-center">Loading.....</p>
        </div>
      ) : (
        <>
          <div className="overflow-x-hidden">
            <Header />
            <div className="w-[300px] md:w-[400px] m-auto  mt-28">
              <div className="w-full bg-getblue border sborder-[#D9D9D9] h-[45px] md:h-[50px]  flex justify-between rounded-br-full rounded-tl-full pl-2">
                <input
                  type="text"
                  placeholder="Find the Pokemons..."
                  onChange={(e) => setText(e.target.value)}
                  className="w-full px-2 mx-5 text-sm italic outline-none sm:mx-3 bg-limeEboox text-getwhite rounded-3xl bg-getblue "
                />
                <div className="flex w-20 h-full rounded-br-full bg-getorange">
                  <MdSearch
                    size={30}
                    color={"#ffffff"}
                    className="self-center mx-auto"
                  />
                </div>
              </div>
            </div>

            <div className="w-[90%] sm:w-[80%] md:w-[550px] mx-auto shadow-lg shadow-getblue  my-10 rounded-md">
              <div className="flex flex-wrap justify-center gap-5 px-5 py-5 mt-4 sm:gap-10 ">
                {pokemons
                  .filter((pokemon) => pokemon.name.includes(text))
                  .map((pokemon) => (
                    <Card
                      pokemons={pokemons}
                      key={pokemon.id}
                      pokemonName={pokemon.name}
                      pokemonId={pokemon.id}
                      pokemonImg={
                        pokemon.sprites.front_default
                          ? pokemon.sprites.front_default
                          : pokemon.sprites.front_shiny
                          ? pokemon.sprites.front_shiny
                          : "https://via.placeholder.com/650x750?text=No+Image"
                      }
                    />
                  ))}
              </div>

              <div className="flex justify-between p-2 ">
                <div className="ml-16 sm:ml-32">
                  {prevPageUrl && (
                    <button onClick={prevPageUrl ? gotoPrevPage : null}>
                      <BsFillArrowLeftCircleFill
                        size={45}
                        className="text-getblue hover:text-getorange"
                      />
                    </button>
                  )}
                </div>
                <div className="mr-16 sm:mr-32">
                  {nextPageUrl && (
                    <button onClick={nextPageUrl ? gotoNextPage : null}>
                      <BsFillArrowRightCircleFill
                        size={45}
                        className="text-getblue hover:text-getorange"
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
