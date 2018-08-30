import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import App from './app';
import gameReducer from './reducers/game';

const store = createStore(combineReducers({ game: gameReducer }))

const rootEl = document.querySelector('.js-app');

const wrapApp = (AppComponent, reduxStore) => {
  return (
    <Provider store={reduxStore}>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </Provider>
  );
}

ReactDOM.render(wrapApp(App, store), rootEl)

if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./app').default
    ReactDOM.render(wrapApp(NextApp, store), rootEl)
  })
}
