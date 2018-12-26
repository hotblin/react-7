import axios from "axios";
import { getToken } from "@utils/token";

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
    return Promise.reject(error);
  }
);

axios.defaults.withCredentials = false;

export const getUserInfo = params => {
  // console.log(params);
  return axios.get(`${ip}/user/me`).then(res => res.data);
};

export const loginIn = params => {
  return axios.post(`${ip}/user/login`, params).then(res => res.data);
};

export const getBaseStationList = params => {
  // http://123.59.136.8:8723/api/baseStation?page=1&baseName=&ok=0&size=15
  return axios
    .get(`${ip}/api/baseStation`, {
      params
    })
    .then(res => res.data);
};
