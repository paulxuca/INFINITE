/*
 *
 * LessonEditor reducer
 *
 */

import { fromJS } from 'immutable';
import { EditorState } from 'draft-js';
import {
  INITIAL_LOAD,
  INITIAL_CREATE,
  UPDATE_EDITOR_STATE,
} from './constants';

const initialState = fromJS({
  isLoading: false,
  editorState: false,
});

function lessonEditorReducer(state = initialState, action) {
  switch (action.type) {
    case INITIAL_LOAD:
      return state.set('isLoading', true);
    case INITIAL_CREATE:
      return state.set('editorState', EditorState.createEmpty());
    case UPDATE_EDITOR_STATE:
      return state.set('editorState', action.payload);
    default:
      return state;
  }
}

export default lessonEditorReducer;
