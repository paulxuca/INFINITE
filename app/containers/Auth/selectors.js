import { createSelector } from 'reselect';

/**
 * Direct selector to the auth state domain
 */
const selectAuth = () => (state) => state.get('auth');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Auth
 */


const selectUserObject = () => createSelector(
  selectAuth(),
  (substate) => substate.get('userObject'),
);

const selectIsAuthed = () => createSelector(
  selectUserObject(),
  (substate) => !!substate,
);

export {
  selectIsAuthed,
  selectUserObject,
};
