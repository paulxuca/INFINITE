import expect from 'expect';
import lessonEditorReducer from '../reducer';
import { fromJS } from 'immutable';

describe('lessonEditorReducer', () => {
  it('returns the initial state', () => {
    expect(lessonEditorReducer(undefined, {})).toEqual(fromJS({}));
  });
});
