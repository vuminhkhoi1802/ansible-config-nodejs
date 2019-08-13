import { createSelector } from 'reselect';

const authSelector = state => (state.auth || {});

export const isInitializingSelector = createSelector(
  authSelector,
  ({ initializing = true }) => initializing,
);

export const isAuthenticatedSelector = createSelector(
  authSelector,
  ({ isAuthenticated = false }) => isAuthenticated,
);
