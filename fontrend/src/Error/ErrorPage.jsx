import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="">
      <div className="flex gap-4 items-center justify-center mt-[23%]">
        <p>404 | Not Found</p>
        <p className="text-base text-purple-700">
          <Link to={"/"}>Go To Home</Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
