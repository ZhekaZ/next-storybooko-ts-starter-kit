import { createSelector } from 'reselect';

const getBlogState = (state) => state.blog;

export const blogSelector = createSelector([getBlogState], (state) => state);

export const blogLoadingSelector = createSelector(
  [getBlogState],
  (state) => state.loading
);
