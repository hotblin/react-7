export const getToken = () =>
  decodeURIComponent(sessionStorage.getItem("token"));

export const setToken = token =>
  sessionStorage.setItem("token", encodeURIComponent(token));

export const removeToken = _ => sessionStorage.removeItem("token");
