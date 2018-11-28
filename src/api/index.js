import axios from 'axios';
axios.defaults.withCredentials = false;

axios
  .interceptors
  .request
  .use(config => {
    let token = "BearereyJhbGciOiJIUzUxMiJ9.eyJhdXRob3JpdGllcyI6IlJPTEVfVVNFUixST0xFX1BMQVRGT1JNLFJPTEVfR09WLFJPTEVfQURNSU4sUk9MRV9ERU1PIiwic3ViIjoiemhlbmd3ZWkiLCJleHAiOjE1NzQ5MzAxNDh9.9_ub-rsgGBH7ZsrzVPrEQ8sPCfh2-eT7OImnMJnyBXEzfmpdreTcPq3Xju_rloIKC3rEKFPfBWGBv6wU81SYLQ";
    if (!!token) {
      config.headers.common['Authorization'] = token;
    }
    return config;
  }, error => {
    return Promise.reject();
  });
const ip = 'http://123.59.136.8:8723';

export const getUserInfo = _ => {
  return axios
    .get(`${ip}/user/me`)
    .then(res => res.data)
}