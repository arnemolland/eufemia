---
draft: true
---

import Img from 'Tags/Img'
import ModalExample from './assets/modal-example.svg'
import ModalExampleButtons from './assets/modal-example-buttons.svg'
import Examples from 'Pages/uilib/components/modal/Examples'

## Description

NB! Modal dialogs interrupt users and demand an action. They are appropriate when user’s attention needs to be directed toward important information.

### Behavior

The modal can be triggered from either a text element or a button. Triggering a modal will activate the opaque overlay and display the contents.

### Structure and content

Typically an opaque cover over the main content (fullscreen) and a small centered box containing information and interactive elements (buttons, forms etc.)

### What is it

Modal dialogs appear on top of the main content changing the _mode_ of the system into a special mode requiring user interaction. The main content is disabled until the user interacts with the modal dialog.

### Disadvantages of modal Dialogs

1.  They require immediate attention
1.  They interrupt users
1.  They cause users to forget what they were doing
1.  They add extra goals - reading, interacting and closing the Modal
1.  They block the content in the background

### Guidelines

1.  Use for important warnings as a way to prevent or correct critical errors.
1.  Do not use for unessential information that is not related to the users current workflow.
1.  Use for requesting the user to enter information critical to the current process.

### Design Patterns

<Img src={ModalExample} caption="Modal with header, text and close button (spacing suggestions in blue and pink)" alt="My alt" height="256" />
<Img src={ModalExampleButtons} caption="Modal with header, text, buttons and close button" alt="My alt" height="296" />

## Root Element

**NB:** If the wrapper is not set manually, a wrapper is inserted automatically as a child node to the body.

To make sure the HTML structure is decoupled from all the page content, You can optionally define a wrapper div like `<div class="dnb-modal-root" className="dnb-core-style" />`.

Just place this as a sibling of Your App root HTML element. This ensures that we always can stack the modal content above the App Content.

```html
<body>
  <div id="app" />
  <div id="dnb-modal-root" />
</body>
```

### Z-index

The Modal component is using **3000** as the `z-index`.

```css
:root {
  --modal-z-index: 3000;
}
```

## Demos

<Examples />
