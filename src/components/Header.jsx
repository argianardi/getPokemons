import React from "react";
import logo from "../img/PokeBall.ico";
import { Link } from "react-router-dom";

import { MdSearch } from "react-icons/md";
import { IoSunny, IoMoon } from "react-icons/io5";

export const Header = () => {
  return (
    <div className="bg-getblue h-[75px] w-full ">
      <header className="container sticky top-0 z-30 flex w-full h-full mx-auto">
        <nav className="flex items-center self-center justify-between w-full h-full mx-auto">
          {/*  logo*/}
          <Link to="/" className="flex items-center ">
            <img src={logo} alt="logo-pokemon" className="w-[50px]" />
          </Link>

          {/* search */}
          <div className="w-[85%] sm:w-[80%] lg:w-[800px] px-1 sm:px-4 lg:px-0 lg:-ml-2">
            <div className="w-full bg-getwhite border sborder-[#D9D9D9] h-[45px] md:h-[50px]  flex justify-between rounded-3xl">
              <input
                type="text"
                placeholder="Find the Pokemon..."
                className="w-full px-0 mx-2 text-sm italic outline-none sm:mx-3 bg-limeEboox text-getblue sm:px-2 rounded-3xl bg-getwhite "
              />
              <div className="bg-[#D9D9D9] w-14 h-full flex rounded-tr-3xl rounded-br-3xl">
                <MdSearch
                  size={30}
                  color={"#000000"}
                  className="self-center mx-auto"
                />
              </div>
            </div>
          </div>

          <div className="ml-2 sm:ml-12 xl:ml-[300px] 2xl:ml-[550px] cursor-pointer">
            {/* dark mode */}
            {/* {theme === "dark" ? ( */}
            <IoSunny
              className="text-white"
              size={45}
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
