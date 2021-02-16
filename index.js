import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/stable';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './_reducers';
import { createStore, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';
import logger from 'redux-logger'

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;
const timeoutScheduler = store => next => action => {
  if (!action.meta || !action.meta.delay) {
    return next(action);
  }
  const timeoutId = setTimeout(() => next(action), action.meta.delay)
  return function cancel() {
    clearTimeout(timeoutId);
  }
}
const enhancer = composeEnhancers(
  applyMiddleware(thunk, logger, timeoutScheduler),
);
const store = createStore(reducer, enhancer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
