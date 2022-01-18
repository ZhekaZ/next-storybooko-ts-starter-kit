import * as actions from '../actions/user';
import { InferActionTypes } from '../helpers';

export type ActionTypes = ReturnType<InferActionTypes<typeof actions>>;

const initialState = {
  user: {},
  loading: true,
};

export default function userReducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case 'USER_LOADED':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}
