import { createWrapper } from 'next-redux-wrapper';
import { Context } from 'next-redux-wrapper';
import { applyMiddleware, createStore, Middleware } from 'redux';
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

const makeStore = (ctx: Context) => {
  const store = createStore(rootReducer, bindMiddleware(sagaMiddleware));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const storeWrapper = createWrapper(makeStore);

export default storeWrapper;

// import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
// import { createStore, AnyAction, Store } from 'redux';
//
// export interface State {
//   tick: string;
// }
//
// // create your reducer
// const reducer = (state: State = { tick: 'init' }, action: AnyAction) => {
//   switch (action.type) {
//     case HYDRATE:
//       // Attention! This will overwrite client state! Real apps should use proper reconciliation.
//       return { ...state, ...action.payload };
//     case 'TICK':
//       return { ...state, tick: action.payload };
//     default:
//       return state;
//   }
// };
//
// // create a makeStore function
// const makeStore = (context: Context) => createStore(reducer);
//
// // export an assembled wrapper
// export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });
