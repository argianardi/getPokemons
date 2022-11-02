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
        <div className="w-[90%] sm:w-[80%] md:w-[550px] mx-auto  my-7">
          <div className="flex justify-between">
            <section className="flex p-2 w-[60%] ">
              <img
                src={
                  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-wold/${id}.svg`
                    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
                    : "https://via.placeholder.com/650x750?text=No+Image"
                }
                alt={pokemon.name}
                className="mx-auto border-2 rounded-md border-getblue"
              />
            </section>
            <section className="m-2 border-2 rounded-md border-getblue w-[40%] capitalize text-getblue">
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
            <section className="self-center px-10 py-2 text-3xl font-bold text-white rounded-tr-full rounded-bl-full bg-getorange font-poppins">
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
