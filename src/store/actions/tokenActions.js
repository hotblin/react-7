import sleep from "@/utils/sleep";

const setToken = token => {
  return async dispatch => {
    await sleep(2000);
    // return dispatch({
    //   type: "SET_TOKEN",
    //   payload: token
    // });
    return Promise.reject("222");
  };
};

const userLogin = token => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: "SET_TOKEN",
        payload: token
      });
      resolve(true);
      // reject()
    });
  };
};
export { setToken, userLogin };
