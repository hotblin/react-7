import {
  delay
} from 'redux-saga';
import {
  put,
  takeEvery,
  all,
  call
} from 'redux-saga/effects';
import {
  getUserInfo
} from '../../api'
export function* helloSaga() {
  // console.log('Hello Sagas!');
}

// 告诉 middleware 发起一个 INCREMENT 的 action。
// 实际上就是incrementAsync Saga 通过 delay(1000) 延迟了 1 秒钟，
// 然后 dispatch 一个叫 INCREMENT 的 action。
export function* incrementAsync(action) {
  // console.log("action" + JSON.stringify(action));
  // yield delay(1000);

  // const p = yield ;
  // console.log(p);

  try {
    const b = () => getUserInfo()
    const res = yield call(b);
    console.log("res" + JSON.stringify(res));
    put({
      type: "incream2",
      res
    })
  } catch (e) {

  }


}

//在store.js中，执行了 sagaMiddleware.run(rootSaga),将会执行这里
function* watchIncrementAsync() {
  // 如果有对应的action触发，就执行 incrementAsync()函数
  // 组件中可以dispach
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}