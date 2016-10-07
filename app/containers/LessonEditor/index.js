/*
 *
 * LessonEditor
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectLessonEditor from './selectors';
import styles from './styles.css';

export class LessonEditor extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.lessonEditor}>
        <Helmet
          title="LessonEditor"
          meta={[
            { name: 'description', content: 'Description of LessonEditor' },
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = selectLessonEditor();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonEditor);
