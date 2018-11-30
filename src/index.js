import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import RouterView from '@components/RouterView';

import {
  Provider
} from 'react-redux';

import store from '@store';

const Root = document.getElementById('root');

const App = _ => {
  return ( 
    <Provider store={store}>
      <RouterView/> 
    </Provider>
  )
}

ReactDOM.render(<App />, Root);

serviceWorker.unregister();