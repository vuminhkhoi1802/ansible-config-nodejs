import customFetch from '../utils/fetch';
import { AUTH, INITIALIZING } from '../events';

export const loginToTheApp = () => async (dispatch) => {
  try {
    await customFetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'abc', password: '123' }),
    });

    dispatch({ type: AUTH, payload: { isAuthenticated: true } });
  } catch (e) {
    dispatch({ type: AUTH, payload: { isAuthenticated: false } });
  }
};

export const initializeApp = () => async (dispatch) => {
  try {
    dispatch({ type: INITIALIZING, payload: { initializing: true } });

    await dispatch(loginToTheApp());

    dispatch({ type: INITIALIZING, payload: { initializing: false } });
  } catch {
    dispatch({ type: INITIALIZING, payload: { initializing: false } });
  }
};

export const logoutOfTheApp = () => async (dispatch) => {
  dispatch({ type: AUTH, payload: { isAuthenticated: false } });
};
