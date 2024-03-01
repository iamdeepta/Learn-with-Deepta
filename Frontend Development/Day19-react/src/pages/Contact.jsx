import React from "react";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";

const Contact = () => {
  return (
    <>
      <PageHeader
        headerText={"This is contact page"}
        headerLink={"/facebook"}
        headerLinkText={"Go to facebook page"}
      />

      <Button buttonName={"Contact Button"} />
    </>
  );
};

export default Contact;
