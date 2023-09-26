import React from 'react'
import { Icon } from "@iconify/react";
import TextInput from "../Shared/TextInput.js";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="w-full h-full flex flex-col items-center font-poppins">
      <div className=" w-full border-b border-solid border-gray-200 flex justify-center py-3">
        <Icon icon="logos:spotify" width="100" />
      </div>
      <div className="loginForm w-1/3 py-8 flex flex-col item-center justify-center">
        <div className="font-bold mb-6 flex justify-center">
          To continue, log in to Spotify.
        </div>
        <TextInput
          label="Email address or username"
          placeholder="Email address or username"
          className="my-1"
        />
        <TextInput
          label="Password"
          type="password"
          placeholder="Password"
          className="my-1"
        />
        <div className="flex items-center justify-end mt-8">
          <button className="bg-green-400 text-sm font-semibold p-2 px-5 rounded-full">
            LOG IN
          </button>
        </div>
        <div className="border border-solid mt-6 border-gray-200"></div>
        <div className="my-6 font-semibold text-base flex justify-center">
          Don't have an account?
        </div>
        <div className="font-semibold text-xl flex items-center justify-center">
          <Link
            to="/signup"
            className="w-full text-center uppercase border border-solid border-gray-500 rounded-full py-4 text-sm text-gray-500 font-bold"
          >
            Sign up for spotify
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login
