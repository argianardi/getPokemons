import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ pokemonName, pokemonImg, pokemonId }) => {
  return (
    <>
      <Link to={`/pokemon/${pokemonId}`}>
        <div className="w-[200px]  border-4 border-getblue rounded-lg ">
          <img
            src={pokemonImg}
            alt={pokemonName}
            className="h-[200px] mx-auto mt-2"
          />
          <p className="py-2 mt-5 font-bold text-center capitalize cursor-pointer rounded-b-lglg bg-getblue text-getwhite hover:bg-getorange">
            {pokemonName}
          </p>
        </div>
      </Link>
    </>
  );
};
