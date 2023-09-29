import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
const LinkButton = ({
  title,
  route = "/",
  bgcolor = "",
  color = "text-black",
  classNames = "text-sm",
  iconName,
  fontSize,
  iconClass
}) => {
  return (
    <div
      className={`LinkButton cursor-pointe text-lg ${color} p-2 border border-solid border-gray-600 rounded-full ${bgcolor} flex items-center justify-center`}
    >
      <Link
        className={`${classNames} flex items-center justify-center`}
        to={route}
      >
        <Icon icon={iconName} fontSize={fontSize} color="white" className={`${iconClass}`} />
        {title}
      </Link>
    </div>
  );
};

export default LinkButton;
