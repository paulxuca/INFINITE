import expect from 'expect';
import scrollReducer from '../reducer';
import { fromJS } from 'immutable';

describe('scrollReducer', () => {
  it('returns the initial state', () => {
    expect(scrollReducer(undefined, {})).toEqual(fromJS({}));
  });
});
