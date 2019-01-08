export const setToken = token => sessionStorage.setItem("token", token);
export const getToken = _ => sessionStorage.getItem("token");
export const removeToken = _ => sessionStorage.removeItem("token");
