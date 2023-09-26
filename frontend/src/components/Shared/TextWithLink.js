import React from "react";
import { Link } from "react-router-dom";
const TextWithLink = ({ title, fontSize = "16", active, route='/' }) => {
  return (
    <div
      className={`TextWithLink cursor-pointer ${
        active ? "text-white" : "text-gray-400"
      } hover:text-white`}
    >
      <Link className={`ml-4 font-semibold text-base`} to={route}>
        {title}
      </Link>
    </div>
  );
};

export default TextWithLink;
