import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';
import rootSaga from './sagas';
import reducer from './reducer';

const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const enhancer = compose(
  applyMiddleware(...middleware),
  devTool
)
const store = createStore(reducer, enhancer);
sagaMiddleware.run(rootSaga);
export default store;