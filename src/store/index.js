import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas'
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ?
  window.devToolsExtension() :
  undefined
)
const store = createStore(reducer,enhancer);
sagaMiddleware.run(rootSaga);
export default store;