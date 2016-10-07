import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { INITIAL_LOAD } from './constants';
import { initalCreate } from './actions';
import { generateUUID } from 'utils/frontend';

function* initialLoadAction(payload) {
  const { id, action } = payload;
  if (id === 'new') {
    yield call(initalCreateAction, id, action);
  }
}

function* initalCreateAction(id, action) {
  const uniqueID = generateUUID();
  if (id === 'new') {
    window.history.pushState({}, '', `/lessons/${uniqueID}/${action}`);
  }
  yield put(initalCreate());
}

function* defaultWatcher() {
  while (true) {
    const { type, payload } = yield take([INITIAL_LOAD]);
    if (type === INITIAL_LOAD) yield call(initialLoadAction, payload);
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
