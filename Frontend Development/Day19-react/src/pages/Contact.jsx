import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div>This is contact page</div> <Link to={"/about"}>Got to About</Link>
    </>
  );
};

export default Contact;
