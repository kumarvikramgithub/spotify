import React, {useState} from 'react'
import { Icon } from "@iconify/react";
import TextInput from "../Shared/TextInput.js";
import AlertMessage from "../Shared/Alert.js";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import API from "../utils/API.js";
const initialLoginState = {
  email: '',
  password: ''
}
const initailAlert = {
  message: '',
  status: false,
  error: true
}
const Login = () => {
  const [loginValue, setLoginValue] = useState(initialLoginState);
  const [alert, setAlert] = useState(initailAlert);

  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const updateLoginValue = (e) => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };
  const goForLogin = async (e) => {
    e.preventDefault();
    const result = await API.userLogin(loginValue);
    if (result.isSuccess) {
      const date = new Date();
      date.setDate(date.getDate() + 1);
      setCookie("token", result.data.token, { path: "/", expires: date });
      setAlert({
        message: result.data.message,
        status: true,
        error: true,
        notUsedMessage: cookie,
      });
      setLoginValue(initialLoginState);
      navigate("/");
    } else {
      setAlert({
        message: result.data.error,
        status: true,
        error: true,
        notUsedMessage: '',
      });
    }
    setTimeout(() => {
      setAlert(initailAlert);
    }, 3000);
  };

  return (
    <div className="w-full h-full flex flex-col items-center font-poppins">
      <div className=" w-full border-b border-solid border-gray-200 flex justify-center py-3">
        <Icon icon="logos:spotify" width="100" />
      </div>
      <div className="loginForm w-1/3 py-8 flex flex-col item-center justify-center">
        <div className="font-bold mb-6 flex justify-center">
          To continue, log in to Spotify.
        </div>
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
        <TextInput
          label="Email address or username"
          placeholder="Email address or username"
          className="my-1"
          name="email"
          updateInput={updateLoginValue}
          values={loginValue}
        />
        <TextInput
          label="Password"
          type="password"
          placeholder="Password"
          className="my-1"
          name="password"
          updateInput={updateLoginValue}
          values={loginValue}
        />
        <div className="flex items-center justify-end mt-8">
          <button
            className="bg-green-400 text-sm font-semibold p-2 px-5 rounded-full"
            onClick={(e) => {
              goForLogin(e);
            }}
          >
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
