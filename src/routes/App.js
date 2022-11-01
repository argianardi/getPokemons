import React from "react";
import Home from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
