import React from "react";
import { Link } from "react-router-dom";
const LinkButton = ({
  title,
  route = "/",
  bgcolor = "",
  color="text-black",
  classNames='text-sm'
}) => {
  return (
    <div
      className={`LinkButton cursor-pointe text-lg ${color} px-3 py-2 border border-solid border-gray-950 rounded-full hover:border-gray-200 ${bgcolor} flex items-center justify-center`}
    >
      <Link className={`${classNames}`} to={route}>
        {title}
      </Link>
    </div>
  );
};

export default LinkButton;
