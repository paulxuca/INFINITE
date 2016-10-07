/*
 *
 * LessonEditor
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { selectEditorState } from './selectors';
import { createStructuredSelector } from 'reselect';
import styles from './styles.css';
import {
  initialLoad,
  updateEditorState,
} from './actions';
import DraftEditor from 'components/DraftEditor';

export class LessonEditor extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.initialLoad(this.props.params);
  }

  render() {
    return (
      <div className={styles.lessonEditor}>
        <Helmet
          title="LessonEditor"
          meta={[
            { name: 'description', content: 'Description of LessonEditor' },
          ]}
        />
        <div className={styles.lessonEditor__container}>
          {this.props.editorState ? <DraftEditor
            editorState={this.props.editorState}
            onChange={this.props.onChangeEditorState}
          /> : null}
        </div>
      </div>
    );
  }
}

LessonEditor.propTypes = {
  initialLoad: React.PropTypes.func,
  params: React.PropTypes.object,
  editorState: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object,
  ]),
  onChangeEditorState: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  editorState: selectEditorState(),
});

function mapDispatchToProps(dispatch) {
  return {
    initialLoad: (params) => dispatch(initialLoad(params)),
    onChangeEditorState: (newState) => dispatch(updateEditorState(newState)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonEditor);
