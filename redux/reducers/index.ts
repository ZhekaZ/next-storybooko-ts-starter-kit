import { combineReducers } from 'redux';

import blogReducer from './blog';
import userReducer from './user';

const rootReducer = combineReducers({
  blog: blogReducer,
  user: userReducer,
});

export default rootReducer;
