import { combineReducers } from 'redux';

import blogReducer from './blog';
import userReducer from './user';

// import { connectRouter } from "connected-react-router";
// import { createBrowserHistory } from "history";
// export const history = createBrowserHistory();

const rootReducer = combineReducers({
  blog: blogReducer,
  user: userReducer,
  // router: connectRouter(history),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
