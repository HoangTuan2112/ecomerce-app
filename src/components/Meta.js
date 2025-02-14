import React from "react";
import { Helmet } from "react-helmet";
const Meta = (props) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{props.tittle}</title>
    </Helmet>
  );
};

export default Meta;
