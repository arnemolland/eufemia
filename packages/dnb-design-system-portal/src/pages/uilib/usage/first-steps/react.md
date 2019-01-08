---
header: 'UI Library'
title: 'React'
draft: false
order: 5
---

import { Button, IconPrimary } from 'dnb-ui-lib/src'
import { ButtonEventExample } from 'Pages/uilib/usage/first-steps/examples/react-examples'

# React JS for the web

The most basic way to use the `dnb-ui-lib` is like this:

### Basic Buttons

```jsx
<Button text="Basic Button" />
```

<div className="demo-box">
  <Button text="Basic Button" />
</div>

### Large Buttons & Icons

```jsx
<Button variant="secondary" text="Secondary Button" size="large" icon="chevron-right_medium" />
<Button icon="chevron-right_medium" icon_size="large" size="large" />
```

<div className="demo-box">
  <Button variant="secondary" text="Secondary Button" size="large" icon="chevron-right_medium" />
  <Button icon="chevron-right_medium" icon_size="large" size="large" />
</div>

## Extended example

```js
import { Button } from 'dnb-ui-lib'

const MyComponent = props => (
  <Button text="Custom Element" variant="tertiary" {...props} />
)
```

## Event example

```js
import React from 'react'
import { Button, Icon } from 'dnb-ui-lib/src'
import { hamburger_medium as hamburgerIcon } from 'dnb-ui-lib/src/icons/secondary_icons_medium'

const onClickHandler = event => {
  console.log('onClickHandler', event)
}

export const MyComponent = () => {
  return (
    <Button on_click={onClickHandler}>
      <Icon icon={hamburgerIcon} />
    </Button>
  )
}
```

<div className="demo-box">
  <ButtonEventExample />
</div>