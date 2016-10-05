// Taken from https://github.com/andrewcoelho/react-text-editor

export const getSelectionRange = () => {
  const selection = window.getSelection();
  if (selection.rangeCount === 0) return null;
  return selection.getRangeAt(0);
};

export const getSelectedBlockElement = (range) => {
  let node = range.startContainer;
  do {
    const nodeIsDataBlock = node.getAttribute
                            ? node.getAttribute('data-block')
                            : null;
    if (nodeIsDataBlock) return node;
    node = node.parentNode;
  } while (node !== null);
  return null;
};

export const getSelectionCoords = (curr, selectionRange) => {
  const editorBounds = document.getElementById('richEditor') && document.getElementById('richEditor').getBoundingClientRect();
  const rangeBounds = selectionRange && selectionRange.getBoundingClientRect();
  if (rangeBounds) {
    const rangeWidth = rangeBounds.right - rangeBounds.left;
    const left = ((rangeBounds.left - editorBounds.left) + (rangeWidth / 2)) - (375 / 2);
    const top = (rangeBounds.top - editorBounds.top) - 5;
    return { left, top };
  }
  return curr;
};
