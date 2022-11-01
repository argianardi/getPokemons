import React from "react";

export const Card = ({ pokemonName, url }) => {
  return (
    <div className="w-[200px]  border-4 border-getblue rounded-lg ">
      <img
        src={
          "https://images.unsplash.com/photo-1662296350075-ad6e957cd9f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9rZW1vbnx8fHx8fDE2NjcyODE3NTY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200"
        }
        alt="pokemon picture"
        className="h-[200px] mx-auto mt-2"
      />
      <p className="py-2 mt-5 font-bold text-center capitalize cursor-pointer rounded-b-lglg bg-getblue text-getwhite hover:bg-getorange">
        {pokemonName}
      </p>
    </div>
  );
};
