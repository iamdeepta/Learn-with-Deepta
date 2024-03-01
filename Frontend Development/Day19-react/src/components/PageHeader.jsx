import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ headerText, headerLink, headerLinkText }) => {
  return (
    <>
      <div>{headerText}</div>
      <Link to={headerLink}>{headerLinkText}</Link>
    </>
  );
};

export default PageHeader;
