import expect from 'expect';
import authenticatedRouteReducer from '../reducer';
import { fromJS } from 'immutable';

describe('authenticatedRouteReducer', () => {
  it('returns the initial state', () => {
    expect(authenticatedRouteReducer(undefined, {})).toEqual(fromJS({}));
  });
});
