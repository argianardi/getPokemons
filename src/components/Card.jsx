import React from "react";

export const Card = ({ pokemonName, pokemonImg }) => {
  return (
    <div className="w-[200px]  border-4 border-getblue rounded-lg ">
      <img
        src={pokemonImg}
        alt={pokemonImg}
        className="h-[200px] mx-auto mt-2"
      />
      <p className="py-2 mt-5 font-bold text-center capitalize cursor-pointer rounded-b-lglg bg-getblue text-getwhite hover:bg-getorange">
        {pokemonName}
      </p>
    </div>
  );
};
