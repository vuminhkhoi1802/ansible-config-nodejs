import { LOGIN, LOGOUT } from '../events';
import createReducer from '../utils/create-reducer';

const authReducers = {};

authReducers[LOGIN] = (state, { isLoading = false, isAuthenticated = true }) => ({
  ...state,
  isLoading,
  isAuthenticated,
});

authReducers[LOGOUT] = (state, { isLoading = false, isAuthenticated = false }) => ({
  ...state,
  isLoading,
  isAuthenticated,
});

export default createReducer({}, authReducers);
