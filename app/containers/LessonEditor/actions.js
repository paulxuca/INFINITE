/*
 *
 * LessonEditor actions
 *
 */

import {
  INITIAL_LOAD,
  INITIAL_CREATE,
  UPDATE_EDITOR_STATE,
} from './constants';

export function initialLoad(parameters) {
  return {
    type: INITIAL_LOAD,
    payload: parameters,
  };
}

export function initalCreate() {
  return {
    type: INITIAL_CREATE,
  };
}

export function updateEditorState(newEditorState) {
  return {
    type: UPDATE_EDITOR_STATE,
    payload: newEditorState,
  };
}
