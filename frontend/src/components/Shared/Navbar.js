import React from "react";
import TextWithLink from "./TextWithLink.js";
import LinkButton from "./LinkButton.js";
import { Icon } from "@iconify/react";
const Navbar = () => {
  return (
    <div className="w-full bg-slate-950 rounded-t-xl h-full flex items-center sticky">
      <div className="controls flex items-center ">
        <div className="control mx-1 ml-5 bg-slate-900 rounded-full p-1 flex items-center justify-center">
          <Icon icon="ic:baseline-less-than" width="30" />
        </div>
        <div className="control mx-1 bg-slate-900 rounded-full p-1 flex items-center justify-center">
          <Icon icon="ic:baseline-greater-than" width="30" />
        </div>
      </div>
      <div className="navLinks w-full flex justify-end items-center">
        <div className="mx-4">
          <TextWithLink title="Sign up" route="/signup" />
        </div>
        <div className="mx-4">
          <LinkButton title="Log In" bgcolor="bg-white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
