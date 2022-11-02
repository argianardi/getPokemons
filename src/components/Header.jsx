import React from "react";
import logo from "../img/PokeBall.ico";
import { Link } from "react-router-dom";

import { MdSearch } from "react-icons/md";
import { IoSunny, IoMoon } from "react-icons/io5";

export const Header = () => {
  return (
    <div className="bg-getblue h-[75px] w-full ">
      <header className="container sticky top-0 z-30 flex w-full h-full mx-auto">
        <nav className="flex items-center self-center justify-between w-[300px] md:w-[400px] xl:w-[500px] bh h-full mx-auto">
          {/*  logo*/}
          <Link to="/" className="flex items-center ">
            <img src={logo} alt="logo-pokemon" className="w-[50px]" />
          </Link>

          <div className="cursor-pointer ">
            {/* dark mode */}
            {/* {theme === "dark" ? ( */}
            <IoSunny
              className="text-white"
              size={50}
              //   onClick={() => handleChangeTheme("light")}
            />
            {/* ) : (
                    <IoMoon
                      className="text-white"
                      size={35}
                      //   onClick={() => handleChangeTheme("dark")}
                    />
                  )} */}
          </div>
        </nav>
      </header>
    </div>
  );
};
