export const INLINE_STYLES = [
  { buttonText: 'bold', style: 'BOLD' },
  { buttonText: 'italic', style: 'ITALIC' },
  { buttonText: 'mono', style: 'CODE' },
  { buttonText: 'underline', style: 'UNDERLINE' },
];

export const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { icon: 'ulList', style: 'unordered-list-item' },
  { icon: 'olList', style: 'ordered-list-item' },
  { icon: 'quote', style: 'blockquote' },
  { icon: 'code', style: 'code-block' },
];


export const customStyleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};
