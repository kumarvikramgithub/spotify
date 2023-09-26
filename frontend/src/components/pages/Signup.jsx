import React from 'react'
import { Icon } from "@iconify/react";
import TextInput from "../Shared/TextInput.js";
import {Link} from 'react-router-dom'
const Signup = () => {
  return (
    <div className="w-full h-full flex flex-col items-center font-poppins">
      <div className=" w-full border-b border-solid border-gray-200 flex justify-center py-3">
        <Icon icon="logos:spotify" width="100" />
      </div>
      <div className="loginForm w-1/3 py-8 flex flex-col item-center justify-center">
        <div className="font-bold mb-6 flex justify-center text-xl">
          Sign up for free to start listening.
        </div>
        <TextInput
          label="What's your email?"
          type="email"
          placeholder="Enter your email."
          className="my-1"
        />
        <TextInput
          label="Confirm your email?"
          type="email"
          placeholder="Enter your email again."
          className="my-1"
        />
        <TextInput
          label="Create a password"
          type="password"
          placeholder="Create a password"
          className="my-1"
        />
        <TextInput
          label="What should we call you?"
          type="text"
          placeholder="Enter your profile name."
          className="my-1"
        />
        <div className="flex items-center justify-center mt-8">
          <button className="bg-green-400 text-sm font-semibold p-2 px-5 rounded-full">
            Sign up
          </button>
        </div>
        <div className="border border-solid mt-6 border-gray-200"></div>
        <div className="my-6 font-semibold text-base flex justify-center">
          Already have an account?
        </div>
        <div className="font-semibold text-xl flex justify-center mb-12">
          <Link to="/login" className="w-full text-center uppercase border border-solid border-gray-500 rounded-full py-4 text-sm text-gray-500 font-bold">
            Log In for spotify
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup
