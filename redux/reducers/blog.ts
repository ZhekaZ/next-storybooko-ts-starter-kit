import * as actions from '@redux/actions/blog';
import { InferActionTypes } from '@redux/helpers';

export type ActionTypes = ReturnType<InferActionTypes<typeof actions>>;

export interface IBlogState {
  blog: any;
  loading: boolean;
}

const initialState: IBlogState = {
  blog: {},
  loading: true,
};

export default function blogReducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case 'BLOG_LOADED':
      return {
        ...state,
        blog: action.payload,
      };

    default:
      return state;
  }
}
