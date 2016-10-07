import { createSelector } from 'reselect';

/**
 * Direct selector to the lessonEditor state domain
 */
const selectLessonEditorDomain = () => (state) => state.get('lessonEditor');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LessonEditor
 */

const selectEditorState = () => createSelector(
  selectLessonEditorDomain(),
  (substate) => substate.get('editorState'),
);

export {
  selectEditorState,
};
