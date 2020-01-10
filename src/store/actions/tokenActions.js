import sleep from "@/utils/sleep";

const setToken = token => {
  return async dispatch => {
    await sleep(2000);
    return dispatch({
      type: "SET_TOKEN",
      payload: token
    });
    // return Promise.reject("222");
  };
};

const userLogin = data => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      sleep(2000).then(() => {
        if (data && data.username === "admin" && data.password) {
          resolve(
            dispatch({
              type: "SET_TOKEN",
              payload: `${new Date().getTime()}admin`
            })
          );
        } else {
          reject("400");
        }
      });
    });
  };
};
export { setToken, userLogin };
