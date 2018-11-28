import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

ReactDOM.render(<App />, root);

serviceWorker.unregister();
