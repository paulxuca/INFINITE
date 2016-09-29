import { createSelector } from 'reselect';

/**
 * Direct selector to the scroll state domain
 */
const selectScrollDomain = () => (state) => state.get('scroll');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Scroll
 */

const selectScroll = () => createSelector(
  selectScrollDomain(),
  (substate) => substate.toJS()
);

export default selectScroll;
export {
  selectScrollDomain,
};
