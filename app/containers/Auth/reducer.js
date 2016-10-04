/*
 *
 * Auth reducer
 *
 */

import { fromJS } from 'immutable';
import { REHYDRATE } from 'redux-persist/constants';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER,
} from './constants';

const initialState = fromJS({
  userObject: false,
  authErrors: false,
  isAuthing: false,
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return state.set('isAuthing', true);
    case LOGIN_USER_SUCCESS:
      return state
        .set('userObject', action.payload)
        .set('isAuthing', false);
    case LOGIN_USER_ERROR:
      return state
        .set('isAuthing', false)
        .set('authErrors', action.payload);
    case REHYDRATE:
      return action.payload.auth || state;
    default:
      return state;
  }
}

export default authReducer;
