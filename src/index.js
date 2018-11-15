import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from '@views/App/App';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

ReactDOM.render(<App />, root);

serviceWorker.unregister();
