const initialState = {
  user: {},
  loading: true,
};

export default function userReducer(state = initialState, action) {
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
