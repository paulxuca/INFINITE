import { createSelector } from 'reselect';

/**
 * Direct selector to the authenticatedRoute state domain
 */
const selectAuthenticatedRouteDomain = () => (state) => state.get('authenticatedRoute');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AuthenticatedRoute
 */

const selectAuthenticatedRoute = () => createSelector(
  selectAuthenticatedRouteDomain(),
  (substate) => substate.toJS()
);

export default selectAuthenticatedRoute;
export {
  selectAuthenticatedRouteDomain,
};
