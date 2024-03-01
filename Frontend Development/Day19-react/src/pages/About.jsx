import React from "react";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";

const About = () => {
  return (
    <>
      <PageHeader
        headerText={"This is about page"}
        headerLink={"/contact"}
        headerLinkText={"Go to contact page"}
      />

      <Button buttonName={"About Button"} />
    </>
  );
};

export default About;
