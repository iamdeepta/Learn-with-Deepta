import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeNew from "./pages/HomeNew";
// import "./index.scss";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Facebook from "./pages/Facebook";
// import Home from "./pages/home";
import Popular from "./pages/popular"
import Movie from "./pages/movie"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeNew />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
