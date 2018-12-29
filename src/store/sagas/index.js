// import {
//   delay
// } from 'redux-saga';
import {
  put,
  takeEvery,
  all,
  call
} from 'redux-saga/effects';

import {
  getUserInfo
} from '../../api';


// import {
//   getToken
// } from '@utils/token';
// import {
//   incream2
// } from '../actions/user';


// 告诉 middleware 发起一个 INCREMENT 的 action。
// 实际上就是incrementAsync Saga 通过 delay(1000) 延迟了 1 秒钟，
// 然后 dispatch 一个叫 INCREMENT 的 action。
export function* incrementAsync(action) {
  // 演示10s
  // yield delay(10000);

  try {
    const b = (params) => getUserInfo(params)
    const res = yield call(b, "我是params");
    // console.log("res" + JSON.stringify(res));
    yield put({
      type: "incream2",
      payload: res
    })
  } catch (e) {

  }
}

export function* fetchUser(action) {
  
  const {
    payload
  } = action;
  try {
    const res = yield call(getUserInfo, "我是params");
    if (res.code === 200) {
      yield put({
        type: "SYNC_UPDATE_USERINFO",
        payload: res.data
      })
    } else {
      console.log(res);
      payload.replace('/login');
    }
  } catch (e) {
    payload.replace('/login');
  }
}

//在store.js中，执行了 sagaMiddleware.run(rootSaga),将会执行这里
function* watchIncrementAsync() {
  // 如果有对应的action触发，就执行 incrementAsync()函数
  // 组件中可以dispach
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// 在这里监听 ASYNC_GET_USERINFO action
export function* watchFetchUser() {
  yield takeEvery("ASYNC_GET_USERINFO", fetchUser)
}


export default function* rootSaga() {
  yield all([
    watchFetchUser(),
    watchIncrementAsync()
  ])
}