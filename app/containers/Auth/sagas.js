import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { postRequest } from 'utils/request';
import { api } from 'utils/api';
import { REGISTER_USER, LOGIN_USER } from './constants';
import { LOCATION_CHANGE } from 'react-router-redux';
import { loginUserSuccess, loginUserError } from './actions';


function* registerUser(payload) {
  const registerResponseData = yield call(postRequest, payload, api('/auth/register'));

  if (registerResponseData.error) {
    const error = yield registerResponseData.error.json();
    yield put(loginUserError(error));
  } else {
    yield put(loginUserSuccess(registerResponseData.data));
  }
}

function* loginUser(payload) {
  const loginUserData = yield call(postRequest, payload, api('/auth/login'));

  if (loginUserData.error) {
    const error = yield loginUserData.error.json();
    yield put(loginUserError(error));
  } else {
    yield put(loginUserSuccess(loginUserData.data));
  }
}

function* defaultWatcher() {
  while (true) {
    const { type, payload } = yield take([REGISTER_USER, LOGIN_USER]);
    if (type === REGISTER_USER) yield call(registerUser, payload);
    if (type === LOGIN_USER) yield call(loginUser, payload);
  }
}

// Individual exports for testing
export function* defaultSaga() {
  const defaultWatcherRoot = yield fork(defaultWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(defaultWatcherRoot);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
