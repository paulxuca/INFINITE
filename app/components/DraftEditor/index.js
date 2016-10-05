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
    this.handleBlockTypeChange = this.handleBlockTypeChange.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleChange(editorState) {
    const editorStateSelection = editorState.getSelection();
    const shouldNotDisplay = editorStateSelection.anchorOffset === editorStateSelection.focusOffset;
    if (!editorStateSelection.isCollapsed() && !shouldNotDisplay) {
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

  handleKeyCommand(command) {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.handleChange(newState);
      return true;
    }
    return false;
  }

  handleInlineStyleChange(inlineStyle) {
    this.handleChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  }

  handleBlockTypeChange(blockType) {
    this.handleChange(
      RichUtils.toggleBlockType(this.state.editorState, blockType)
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

      sideToolbarOffsetTop = (blockBounds.bottom - editorBounds.top) - 50;
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
          {selectedBlock ?
            <SideToolbar
              offsetTop={sideToolbarOffsetTop}
              toggleBlockType={this.handleBlockTypeChange}
              editorState={this.state.editorState}
            /> : null}
          <Editor
            ref={(editorComponent) => { this.editor = editorComponent; }}
            onChange={this.handleChange}
            editorState={this.state.editorState}
            placeholder="Compose something..."
            handleKeyCommand={this.handleKeyCommand}
          />
        </div>
      </div>
    );
  }
}

export default DraftEditor;
