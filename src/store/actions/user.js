export const update_user = () => (dispatch) => {
  setTimeout(() => {
    let info = {
      name: "老刘"
    }
    dispatch({
      type: "update_user",
      info
    })
  }, 1000);
}

// 组件内触发的方法 GETTING_USER_INFORMATION,然后会触发到 redux-saga
export const ASYNC_GETTING_USER_INFORMATION = (payload) => {
  return {
    type: "ASYNC_GETTING_USER_INFORMATION",
    payload
  }
}