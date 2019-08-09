import { LOGIN, LOGOUT } from '../events';

export const loginToTheApp = () => async (dispatch) => {
  dispatch({ type: LOGIN, payload: {} });
};

export const logoutOfTheApp = () => async (dispatch) => {
  dispatch({ type: LOGOUT, payload: {} });
};
