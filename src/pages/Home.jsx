import React, { useEffect, useState } from "react";
import axios from "axios";

import { Card } from "../components/Card";
import { Header } from "../components/Header";
import "../styles/App.css";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

function Home() {
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
        // console.log(response.data);
        setLoading(false);
        setNextPageUrl(response.data.next);
        setPrevPageUrl(response.data.previous);
        getPokemons(response.data.results);
        // console.log(pokemons);
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
          // console.log(results);
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

  // console.log(pokemons);

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
        <div className="h-screen min-w-full bh">
          <p className="mt-[300px] text-5xl text-center">Loading.....</p>
        </div>
      ) : (
        <div className="overflow-x-hidden">
          <Header />
          <div className="w-[90%] sm:w-[80%] md:w-[550px] mx-auto shadow-lg shadow-getblue  my-10 rounded-md">
            <div className="flex flex-wrap justify-center gap-5 px-5 py-5 mt-4 sm:gap-10 ">
              {pokemons.map((pokemon) => (
                <Card
                  pokemons={pokemons}
                  key={pokemon.id}
                  pokemonName={pokemon.name}
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
      )}
    </>
  );
}

export default Home;
