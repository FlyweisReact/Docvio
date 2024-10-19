/** @format */

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="error-page">
      <h1 className="headline">Oops !</h1>
      <h4 className="description">
        We couldn't find the page you were looking for{" "}
      </h4>
      <Link to={"/"}>
        <button className="go-home">Go home</button>
      </Link>{" "}
    </section>
  );
};

export default NotFound;
