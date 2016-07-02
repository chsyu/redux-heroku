import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, hashHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

const store = createStoreWithMiddleware(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashrHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
