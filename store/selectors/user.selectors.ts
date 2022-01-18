import { createSelector } from 'reselect';

const getUserState = (state) => state.user;

export const userSelector = createSelector(
  [getUserState],
  (state) => state.user
);

export const userLoadingSelector = createSelector(
  [getUserState],
  (state) => state.loading
);
