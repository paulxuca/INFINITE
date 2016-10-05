/**
*
* DraftEditor
*
*/

import React from 'react';
import {
  Editor,
  EditorState,
} from 'draft-js';
import {
  getSelectionRange,
  getSelectionCoords,
  getSelectedBlockElement,
} from './utilities';
import InlineToolbar from './DraftEditorInlineToolbar';

import styles from './styles.css';

class DraftEditor extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
      inlineToolbarActive: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(editorState) {
    if (!editorState.getSelection().isCollapsed()) {
      this.setState({ inlineToolbarActive: true });
    } else {
      this.setState({ inlineToolbarActive: false });
    }
    this.setState({ editorState });
  }

  render() {
    return (
      <div className={styles.draftEditor}>
        <InlineToolbar
          active={this.state.inlineToolbarActive}
        />
        <Editor
          onChange={this.handleChange}
          editorState={this.state.editorState}
        />
      </div>
    );
  }
}

export default DraftEditor;
