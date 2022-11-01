import React from "react";
import Home from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DetailPokemon } from "../pages/DetailPokemon";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/pokemon/:pokemon-name"
          element={<DetailPokemon />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
