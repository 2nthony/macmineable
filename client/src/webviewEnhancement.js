// https://github.com/webview/webview
// This webview is just a webview, without a lot of features like a real browser.
// So this is for enhancement.

// `document.execCommand` is deprecated now, but still works.

import tinykeys from 'tinykeys'

// https://github.com/webview/webview/issues/403
tinykeys(window, {
  '$mod+KeyA': () => {
    document.execCommand('selectAll')
  },
  '$mod+KeyC': () => {
    document.execCommand('copy')
  },
  '$mod+KeyV': () => {
    document.execCommand('paste')
  },
  '$mod+KeyZ': () => {
    document.execCommand('undo')
  },
})
