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

const selectLessonEditor = () => createSelector(
  selectLessonEditorDomain(),
  (substate) => substate.toJS()
);

export default selectLessonEditor;
export {
  selectLessonEditorDomain,
};
