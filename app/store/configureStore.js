import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import allReducers from '../store/reducer';

const config = {
  key: 'root',
  storage
};

const reducer = persistCombineReducers(config, allReducers);

export default function configureStore() {
  let Store;

  /* global __DEV__ */
  if (__DEV__) {
    const logger = createLogger();
    Store = createStore(reducer, compose(applyMiddleware(thunk, logger)));
  } else {
    Store = createStore(reducer, compose(applyMiddleware(thunk)));
  }

  const Persistor = persistStore(Store);

  return { Store, Persistor };
}
