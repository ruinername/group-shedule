import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import Store, { history } from './store';
import App from './navigation';
import 'regenerator-runtime/runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.scss';

const target = document.querySelector('#root');

render(
  <Provider store={Store().store}>
    <PersistGate loading={null} persistor={Store().persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  target,
);
