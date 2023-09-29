import React from "react";
import TextWithLink from "./TextWithLink.js";
import LinkButton from "./LinkButton.js";
import LinkIconButton from "./LinkIconButton.js";
import { Icon } from "@iconify/react";
import { useCookies } from "react-cookie";
const Navbar = () => {
  const [cookie] = useCookies([]);
  // const menuRef = useRef()
  // const profileRef = useRef();
  // const Menus = ['Account', 'Profile', 'Upgrade to Premium', 'Settings', 'Logout']
  return (
    <div className="w-full bg-slate-700 rounded-t-xl h-full flex items-center sticky">
      <div className="controls flex items-center ">
        <div className="control mx-1 ml-5 bg-slate-900 rounded-full p-1 flex items-center justify-center">
          <Icon icon="ic:baseline-less-than" width="30" />
        </div>
        <div className="control mx-1 bg-slate-900 rounded-full p-1 flex items-center justify-center">
          <Icon icon="ic:baseline-greater-than" width="30" />
        </div>
      </div>
      {cookie && cookie.token && cookie.token.length > 0 ? (
        <div className="navLinks w-full flex justify-end items-center">
          <div className="mx-1">
            <LinkButton
              title="Explore Premium"
              bgcolor="bg-white px-3"
              classNames="font-semibold text-sm"
            />
          </div>
          <div className="mx-1">
            <LinkIconButton
              title="Install App"
              bgcolor="bg-black px-3  hover:border-black"
              classNames="font-semibold text-sm text-white"
              iconName="raphael:download"
              fontSize="16px"
              iconClass="mr-2"
            />
          </div>
          <div className="mx-1">
            <LinkIconButton
              title=""
              bgcolor="bg-black rounded-full hover:cursor-pointer  hover:border-black"
              classNames="text-white"
              iconName="clarity:notification-line"
              fontSize="18px"
            />
          </div>
          <div className="mx-1">
            <div className="relative">
              <LinkIconButton
                title=""
                bgcolor="bg-black rounded-full hover:cursor-pointer hover:border-black"
                classNames="text-white"
                iconName="bytesize:user"
                fontSize="18px"
                // ref={profileRef}
              />
            </div>
            {/* <div ref={menuRef} className="mt-2 absolute right-2 shadow-lg   bg-slate-300 text-2xl text-red-800 z-40">
                <ul>{
                  Menus.map((menu)=>{
                    return (
                      <li
                        className="hover:bg-slate-400 font-poppins cursor-pointer list-none px-5 py-2"
                        key={menu}
                      >
                        {menu}
                      </li>
                    );
                  })
                }
                </ul>
            </div> */}
          </div>
        </div>
      ) : (
        <div className="navLinks w-full flex justify-end items-center">
          <div className="mx-4">
            <TextWithLink title="Sign up" route="/signup" />
          </div>
          <div className="mx-4">
            <LinkButton
              title="Log In"
              bgcolor="bg-white"
              classNames="font-semibold text-sm"
              route="/login"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
