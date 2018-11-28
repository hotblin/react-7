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

// 组件内触发的方法 INCREMENT_ASYNC,然后会触发到redux-saga
export const INCREMENT_ASYNC = (a) => {
  // redux-sage触发到reducer的INCREMENT
  return {
    type: "INCREMENT_ASYNC",
    payload: a
  }
}

// // redux-sage异步收到数据后会触发这个incream2
// export const incream2 = (payload) => {
//   return {
//     type:"incream2",
//     payload
//   }
// } 