import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>This is home page</div>
      <Link to={"/about"}>Got to About</Link>
    </>
  );
};

export default Home;
