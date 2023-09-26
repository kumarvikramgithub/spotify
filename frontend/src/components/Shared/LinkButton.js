import React from "react";
import { Link } from "react-router-dom";
const LinkButton = ({
  title,
  route = "/",
  bgcolor = "",
  color="text-black"
}) => {
  return (
    <div
      className={`LinkButton cursor-pointe text-lg ${color} px-8 py-2 border border-solid border-gray-950 rounded-full hover:border-gray-200 ${bgcolor}`}
    >
      <Link className={`font-semibold`} to={route}>
        {title}
      </Link>
    </div>
  );
};

export default LinkButton;
