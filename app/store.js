/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, autoRehydrate } from 'redux-persist-immutable';
import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const devtools = window.devToolsExtension || (() => (noop) => noop);

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    devtools(),
    autoRehydrate(),
  ];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers)
  );


  // Create hook for async sagas
  store.runSaga = sagaMiddleware.run;
  // used for persisting redux
  persistStore(store, { blacklist: ['language', 'route', 'lessonEditor'] });


  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    System.import('./reducers').then((reducerModule) => {
      const createReducers = reducerModule.default;
      const nextReducers = createReducers(store.asyncReducers);

      store.replaceReducer(nextReducers);
    });
  }

  // Initialize it with no other reducers
  store.asyncReducers = {};
  return store;
}
