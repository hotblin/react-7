import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";

import reducer from "./reducer";

const devTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middleware = [ReduxThunk];
const enhancer = compose(applyMiddleware(...middleware), devTool);
const store = createStore(reducer, enhancer);

export default store;
