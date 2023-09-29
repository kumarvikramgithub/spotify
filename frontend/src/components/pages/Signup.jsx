import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Icon } from "@iconify/react";
import TextInput from "../Shared/TextInput.js";
import AlertMessage from "../Shared/Alert.js";
import { Link, useNavigate } from "react-router-dom";

import API from "../utils/API.js";

const initialSignupState = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  confirmEmail: '',
  password: ''
}
const initailAlert = {
  message: "",
  status: false,
  error: true,
  notUsedMessage: '',
};
const Signup = () => {
  const [signupValue, setSignupValue] = useState(initialSignupState);
  const [alert, setAlert] = useState(initailAlert);
  const [ cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate()
  const updateSignupValue = (e) => {
    setSignupValue({ ...signupValue, [e.target.name]: e.target.value });
  }
  const goForSignup = async (e) =>{
    e.preventDefault();
    if(signupValue.email!==signupValue.confirmEmail){
      setAlert({
        message: `Email & Confirm email are not same.`,
        status: true,
        error: true,
        notUsedMessage: '',
      });
      return false;
    }
    const result = await API.userSignup(signupValue);
    if(result.isSuccess){
      const date = new Date();
      date.setDate(date.getDate()+1);
      setCookie("token", result.data.token, {path: "/", expires: date});
      setAlert({
        message: result.data.message,
        status: true,
        error: true,
        notUsedMessage: cookie
      });
      setSignupValue(initialSignupState);
      navigate('/');
    }else{
      setAlert({
        message: result.data.error,
        status: true,
        error: true,
        notUsedMessage: ''
      });
    }
    setTimeout(() => {
      setAlert(initailAlert);
    }, 3000);
  }
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
          label="First Name"
          type="text"
          placeholder="Enter your first Name."
          className="my-1"
          name="firstName"
          updateInput={updateSignupValue}
          values={signupValue}
        />
        <TextInput
          label="Last Name"
          type="text"
          placeholder="Enter your last Name."
          className="my-1"
          name="lastName"
          updateInput={updateSignupValue}
          values={signupValue}
        />
        <TextInput
          label="What's your email?"
          type="email"
          placeholder="Enter your email."
          className="my-1"
          name="email"
          updateInput={updateSignupValue}
          values={signupValue}
        />
        <TextInput
          label="Confirm your email?"
          type="email"
          placeholder="Enter your email again."
          className="my-1"
          name="confirmEmail"
          updateInput={updateSignupValue}
          values={signupValue}
        />
        <TextInput
          label="Username"
          type="text"
          placeholder="Username"
          className="my-1"
          name="username"
          updateInput={updateSignupValue}
          values={signupValue}
        />
        <TextInput
          label="Create a password"
          type="password"
          placeholder="Create a password"
          className="my-1"
          name="password"
          updateInput={updateSignupValue}
          values={signupValue}
        />
        {alert.status && (
          <AlertMessage
            message={alert.message}
            classNames={
              alert.error
                ? `bg-red-200 text-red-900 font-semibold`
                : `bg-gray-200 text-emerald-400 font-semibold`
            }
            iconName={
              alert.error ? `icon-park-solid:error` : `ep:success-filled`
            }
          />
        )}
        <div className="flex items-center justify-center mt-8">
          <button
            className="bg-green-400 text-sm font-semibold p-2 px-5 rounded-full"
            onClick={(e) => goForSignup(e)}
          >
            Sign up
          </button>
        </div>
        <div className="border border-solid mt-6 border-gray-200"></div>
        <div className="my-6 font-semibold text-base flex justify-center">
          Already have an account?
        </div>
        <div className="font-semibold text-xl flex justify-center mb-12">
          <Link
            to="/login"
            className="w-full text-center uppercase border border-solid border-gray-500 rounded-full py-4 text-sm text-gray-500 font-bold"
          >
            Log In for spotify
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup
