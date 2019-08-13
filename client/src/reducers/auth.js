import { AUTH, INITIALIZING } from '../events';
import createReducer from '../utils/create-reducer';

const authReducers = {};

authReducers[INITIALIZING] = (state, { initializing = false }) => ({
  ...state,
  initializing,
});

authReducers[AUTH] = (state, { isAuthenticated = true }) => ({
  ...state,
  isAuthenticated,
});

export default createReducer({}, authReducers);
