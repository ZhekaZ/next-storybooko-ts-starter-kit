import { createWrapper, Context, MakeStore } from 'next-redux-wrapper';
import { applyMiddleware, createStore, Middleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware: Middleware) => {
  const middlewares = [middleware];

  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    const { logger } = require('redux-logger');
    middlewares.push(logger);

    return composeWithDevTools(applyMiddleware(...middlewares));
  }

  return applyMiddleware(...middlewares);
};

const makeStore: MakeStore<Store<any, any>> = (ctx: Context) => {
  const store = createStore(rootReducer, bindMiddleware(sagaMiddleware));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const storeWrapper = createWrapper(makeStore);

export default storeWrapper;
