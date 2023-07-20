import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      404 | Not Found
      <Link to={"/"}>Go To Hole</Link>
    </div>
  );
};

export default ErrorPage;
