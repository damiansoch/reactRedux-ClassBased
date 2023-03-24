import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import allReducers from './store/reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  rootElement
);

registerServiceWorker();
