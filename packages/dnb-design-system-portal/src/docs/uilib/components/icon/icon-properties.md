---
draft: true
---

| Properties                                      | Description                                                                                                                                                                                                |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `icon`                                          | _(mandatory)_ a React SVG Component or the icon name (in case we use `IconPrimary` or `dnb-icon-primary`).                                                                                                 |
| `title`                                         | _(optional)_ Use a title to provide extra information about the icon used.                                                                                                                                 |
| `alt`                                           | _(optional)_ the alternative label (text version) of the icon. Defaults to the imported icon name.                                                                                                         |
| `aria-hidden`                                   | _(optional)_ set `true` to hide the icon for screen readers. For only decorative icons, it makes often mostly sense to do so. Read more about [accessibility and icons](/uilib/usage/accessibility/icons). |
| `size`                                          | _(optional)_ the dimension of the icon. This will be the `viewBox` and represent `width` and `height`. Defaults to `16`. You can use `small`,`medium`, `large` or `auto`                                   |
| `color`                                         | _(optional)_ sets a color property to the `svg` markup. Default is no color, which means _black_                                                                                                           |
| `modifier`                                      | _(optional)_ modifier class to define. Will result in: `dnb-icon--${modifier}`.                                                                                                                            |
| [Space](/uilib/components/space#tab-properties) | _(optional)_ spacing properties like `top` or `bottom` are supported.                                                                                                                                      |