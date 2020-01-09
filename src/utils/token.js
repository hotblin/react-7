const setToken = token => sessionStorage.setItem("token", token);
const getToken = () => sessionStorage.getItem("token");
const removeToken = () => sessionStorage.removeItem("token");

export { setToken, getToken, removeToken };
