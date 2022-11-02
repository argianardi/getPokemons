import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Header } from "../components/Header";

export const DetailPokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [stats, setStats] = useState([]);

  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const getPokemonData = (id) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setPokemon(response.data);
        setAbilities(response.data.abilities);
        setStats(response.data.stats);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.toString());
      });
  };

  useEffect(() => {
    getPokemonData(id);
  }, [id]);

  return (
    <div>
      <Header />

      {loading ? (
        <div className="h-screen min-w-full bh">
          <p className="mt-[300px] text-5xl text-center">Loading.....</p>
        </div>
      ) : (
        <div className="w-[90%] sm:w-[80%] md:w-[550px] mx-auto  mt-28 mb-10">
          <div className="flex flex-col justify-between sm:flex-row">
            <section className="flex  m-2 w-full sm:w-[55%] border-2 rounded-md border-getblue cursor-pointer">
              <img
                src={
                  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-wold/${id}.svg`
                    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
                    : "https://via.placeholder.com/650x750?text=No+Image"
                }
                alt={pokemon.name}
                className="mx-auto transition duration-100 hover:scale-125"
              />
            </section>
            <section className="m-2 border-2 rounded-md border-getblue w-full sm:w-[45%] capitalize text-getblue">
              {stats.map((item, index) => (
                <div key={index} className="w-full p-1">
                  <p className="font-bold">{item.stat.name}</p>
                  <div className="w-full h-1 bg-gray-400 dark:bg-gray-200">
                    <div
                      className="h-1 bg-blue-600"
                      style={{
                        width: `${
                          item.base_stat <= 100 ? item.base_stat : 100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <p>{item.base_stat}</p>
                </div>
              ))}
            </section>
          </div>
          <div className="flex justify-between px-3 mt-5 capitalize border-b-2 text-getblue border-getblue">
            <section>
              <p className="text-2xl font-bold"> {pokemon.name}</p>
              <p className="ml-2">Weight: {pokemon.weight}</p>
              <p className="ml-2">Height: {pokemon.height}</p>
            </section>
            <section className="self-center px-3 py-2 text-xl font-bold text-white rounded-tr-full rounded-bl-full sm:text-3xl sm:px-10 bg-getorange font-poppins">
              <ul className="ml-3 list-disc list-outside">
                {abilities.map((item) => {
                  return (
                    !item.is_hidden && (
                      <li className="" key={item.slot}>
                        {item.ability.name}
                      </li>
                    )
                  );
                })}
              </ul>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};
