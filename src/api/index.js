import axios from "axios";

import { getToken } from "@utils/token";

axios.defaults.withCredentials = false;
const env = process.env.NODE_ENV;
const ip =
  env === "development"
    ? "http://123.59.136.8:8723"
    : "http://123.59.136.8:8723";

axios.interceptors.request.use(
  config => {
    const token = getToken();
    if (!!token) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    console.log("请求时出错", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log("响应时出错", error);
    return Promise.reject(error);
  }
);

export const getUserInfo = params => {
  return axios.get(`${ip}/user/me`).then(res => res.data);
};

export const loginIn = params => {
  return axios.post(`${ip}/user/login`, params).then(res => res.data);
};

export const getBaseStationList = params => {
  return axios
    .get(`${ip}/api/baseStation`, {
      params
    })
    .then(res => res.data);
};


export const getBasestationList = params => {
  return axios
    .get(`${ip}/api/baseStation`, {
      params
    })
    .then(res => res.data);
};
