import axios from "axios";
import { CONFIG_CONSTANT } from "./config-constant.js";
import { API_CONSTANT } from "./api-constant.js";
import { Config_UI } from "./config.js"
const API_URL = Config_UI.backend_base_url;
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    // Stop global loader here
    return processResponse(response);
  },
  function (error) {
    // Stop global loader here
    return processError(error);
  }
);

//////////////////////////////
// If success   -> return {isSuccess: true,  data: Object, status: int}
// If Fail      -> return {isSuccess: false, data:{},      status: string}
////////////////////////

const processResponse = (response) => {
  if (response?.status === 201 || response?.status === 200) {
    return { isSuccess: true, data: response.data, status: response?.status };
  } else {
    return { isSuccess: false, data: response.data, status: response?.status };
  }
};

const processError = (error) => {
  if (error.response) {
    // Request made and server responded with a status other
    // that falls out of the range 2.X.X
    console.log("ERROR in Response: ", error.toJSON());
    return {
      isSuccess: false,
      data: error.response.data,
      status: error.response.status,
    };
  } else if (error.request) {
    // Request made but no response was received
    console.log("ERROR in Request: ", error.toJSON());
    return {
      isSuccess: false,
      data: { message: CONFIG_CONSTANT.error.requestFailure.message },
      status: "",
    };
  } else {
    // Something happened in setting up request that triggers an error
    console.log("ERROR in Network: ", error.toJSON());
    return {
      isSuccess: false,
      data: { message: CONFIG_CONSTANT.error.networkFailure.message },
      status: "",
    };
  }
};

const API = {};

for (const [key, value] of Object.entries(API_CONSTANT)) {
  API[key] = (body, showUploadProgress, showDownloadProgress) =>
    axiosInstance({
      method: value.method,
      url: value.url,
      data: body,
      responseType: value.responseType,
      onUploadProgress: function (progressEvent) {
        if (showUploadProgress) {
          let percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showUploadProgress(percentageCompleted);
        }
      },
      onDownloadProgress: function (progressEvent) {
        if (showDownloadProgress) {
          let percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showDownloadProgress(percentageCompleted);
        }
      },
    });
}

export default API;
