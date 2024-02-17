import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Facebook from "./pages/Facebook";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/facebook" element={<Facebook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
