---
header: 'UI Library'
title: 'Styling'
status: 'wip'
draft: false
---

# Styling

The CSS is a compiled and minified version. You find it here: `dnb-ui-lib/style/dnb-ui-lib.min.css`

## Apply the DNB Style

To use the default DNB style, You have to define a CSS class called: `dnb-style`
You could also set this class on the document body.

<!-- prettier-ignore-start -->
```html
<div class="dnb-style">
  <!-- The styled Content -->
</div>
```
<!-- prettier-ignore-end -->

### The Reason

The benefits of explicitly defining the style class `dnb-style`, is that we then can use the components by their own, without effecting all the existing styled browser elements and tags. This gives use a kind of backwards compatibility.
But it makes it also more flexible, like if we only want to apply our DNB style to a certain area of our web application.

## For Node based environments

To include the `dnb-ui-lib` styles (except patterns), do this:

```js
// This also includes the default DNB UI Theme
import 'dnb-ui-lib/style'
```

If You want to import the styles of all components - **without** the default DNB UI Theme:

```js
// No Theme is included
import 'dnb-ui-lib/style/components'
```

You may ant to import a theme as well:

```js
// Default DNB UI Theme
import 'dnb-ui-lib/style/theme'

// ... is equivalent to the default theme
import 'dnb-ui-lib/style/themes/ui'

// ... or some other theme
import 'dnb-ui-lib/style/themes/[NAME].css'
```

You also can import a single style of a single component:

```js
import 'dnb-ui-lib/components/button/style'
```

You may have a look at the guides about [colors](/quickguide-designer/colors/) and [fonts](/quickguide-designer/fonts/#fonts-to-show-code).

## Fonts to show Code

`<Code>` snippets shows best on a _Monotype_ font. Developers will normally have installed some of these fonts on their devices. Example of CSS `font-family` usage:

```css
font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
  monospace;
```

Read more about [fonts at DNB](/quickguide-designer/fonts/)

## Best Practice

To write more structured and uniform CSS code, stick with this approach to write the most influential and important properties first. Have simply a newline between the blocks respective groups.

**Example of how to structure the DNB CSS**

```css
.my-selector {
  /* 1. Layout */
  position: relative;
  z-index: 1;
  display: block;

  /* 2. Sizes & Spaces */
  width: 0.5em;
  height: 0.5em;
  padding: 1em; /* Will be the same as our local font-size of 1.5rem */

  /* 3. Font & Typography */
  font-family: 'Fedra Sans Std';
  font-size: 1.5rem;
  color: var(--color-sea-green);

  /* 4. Styling */
  border: 1px solid var(--color-mint-green); /* Use Pixel for borders. They don't need to be dynamic */
  opacity: 1;

  /* 5. Animations */
  transition: opacity 0.2s linear;
}
```