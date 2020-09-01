import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import * as History from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import { seamlessImmutableReconciler, seamlessImmutableTransformCreator } from 'redux-persist-seamless-immutable';
import storage from 'redux-persist/lib/storage';

export const history = History.createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const rootReducer = combineReducers({
  router: connectRouter(history),
});

// const selectedStorage = window.location.hostname === 'localhost' ? storage : storageAPI;
const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: [],
  stateReconciler: seamlessImmutableReconciler,
  transforms: [seamlessImmutableTransformCreator({})],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, initialState, composedEnhancers);
const persistor = persistStore(store);

export default () => {
  return { store, persistor };
};
