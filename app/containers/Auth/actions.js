/*
 *
 * Auth actions
 *
 */

import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
} from './constants';

export function loginUserSuccess(userObject) {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: userObject,
  };
}

export function loginUserError(loginError) {
  return {
    type: LOGIN_USER_ERROR,
    payload: loginError,
  };
}

export function loginUser(email, password) {
  return {
    type: LOGIN_USER,
    payload: {
      email,
      password,
    },
  };
}

export function registerUser(email, password) {
  return {
    type: REGISTER_USER,
    payload: {
      email,
      password,
    },
  };
}
