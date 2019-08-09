import { createSelector } from 'reselect';

const authSelector = state => (state.auth || {});

export const isLoadingSelector = createSelector(
  authSelector,
  auth => auth.isLoading || false,
);

export const isAuthenticatedSelector = createSelector(
  authSelector,
  auth => auth.isAuthenticated || false,
);
