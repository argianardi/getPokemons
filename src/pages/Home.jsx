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

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        console.log(response.data.results);
        setPokemons(response.data.results);
      })
      .catch((error) => {
        console.log(error.toString());
      });
  };

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="w-[90%] sm:w-[80%] md:w-[550px] mx-auto shadow-lg shadow-getblue  my-10 rounded-md">
        <div className="flex flex-wrap justify-center gap-5 px-5 py-5 mt-4 sm:gap-10 ">
          {pokemons.map((pokemon) => (
            <Card
              key={pokemon.name}
              pokemonName={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </div>
        <div className="flex justify-between p-2 ">
          <button>
            <BsFillArrowLeftCircleFill
              size={45}
              className="text-getblue hover:text-getorange"
            />
          </button>
          <button>
            <BsFillArrowRightCircleFill
              size={45}
              className="text-getblue hover:text-getorange"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
