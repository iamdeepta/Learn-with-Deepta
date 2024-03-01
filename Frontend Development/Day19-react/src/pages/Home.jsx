import React from "react";
import PageHeader from "../components/PageHeader";

const Home = () => {
  return (
    <PageHeader
      headerText={"This is home page"}
      headerLink={"/about"}
      headerLinkText={"Go to about page"}
    />
  );
};

export default Home;
