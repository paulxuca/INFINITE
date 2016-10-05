/**
*
* DraftEditor
*
*/

import React from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
} from 'draft-js';
import {
  getSelectionRange,
  getSelectionCoords,
  getSelectedBlockElement,
} from './utilities';
import InlineToolbar from './InlineToolbar';
import SideToolbar from './SideToolbar';
import styles from './styles.css';

const inlineToolbarInitial = {
  active: false,
  position: {
    left: null,
    top: null,
  },
};

class DraftEditor extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
      toolbar: inlineToolbarInitial,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleInlineStyleChange = this.handleInlineStyleChange.bind(this);
    this.handleUpdateSelection = this.handleUpdateSelection.bind(this);
  }

  handleChange(editorState) {
    if (!editorState.getSelection().isCollapsed()) {
      const selectionRange = getSelectionRange();
      const { left, top } = getSelectionCoords(this.state.toolbar.position, selectionRange);
      this.setState({ toolbar: {
        active: true,
        position: {
          left,
          top,
        },
      },
    });
    } else {
      this.setState({ toolbar: inlineToolbarInitial });
    }
    this.setState({ editorState });
    setTimeout(this.handleUpdateSelection, 0);
  }

  handleFocus() {
    this.editor.focus();
  }

  handleInlineStyleChange(inlineStyle) {
    this.handleChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  }

  handleUpdateSelection() {
    const selectionRange = getSelectionRange();
    let selectedBlock;
    if (selectionRange) {
      selectedBlock = getSelectedBlockElement(selectionRange);
    }
    this.setState({
      selectedBlock,
      selectionRange,
    });
  }

  render() {
    const { selectedBlock } = this.state;
    let sideToolbarOffsetTop = 0;

    if (selectedBlock) {
      const editor = document.getElementById('richEditor');
      const editorBounds = editor.getBoundingClientRect();
      const blockBounds = selectedBlock.getBoundingClientRect();

      sideToolbarOffsetTop = (blockBounds.bottom - editorBounds.top)
                           - 50; // height of side toolbar
    }

    return (
      <div
        className={styles.draftEditor}
        onMouseDown={this.handleFocus}
        id="richEditor"
      >
        <InlineToolbar
          active={this.state.toolbar.active}
          position={this.state.toolbar.position}
          editorStyles={this.state.editorState.getCurrentInlineStyle()}
          toggleChange={this.handleInlineStyleChange}
        />
        <div className={styles.draftEditorContainer}>
          {selectedBlock ? <SideToolbar
            offsetTop={sideToolbarOffsetTop}
          /> : null}
          <Editor
            ref={(editorComponent) => { this.editor = editorComponent; }}
            onChange={this.handleChange}
            editorState={this.state.editorState}
            placeholder="Compose something..."
          />
        </div>
      </div>
    );
  }
}

export default DraftEditor;
