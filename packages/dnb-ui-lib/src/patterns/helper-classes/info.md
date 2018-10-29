---
component` | HelperClasses'
type` | element'
class` | dnb-helper-classes'
status` | prototype'
version` | .5.0
---

To ensure a consistant class structure and to enure that the class is owned by the DNB UI Library, all classes in the UI Library are prefixed with `dnb-`.

Most helper classes are SCSS mixins which are then applied to the class when envoked.
Reusing classes in the markup instead of using SCSS extends or mixins will prevent duplicate values in our CSS.

All helper classes are to be found in `src/style/core/utilities.scss`

| Selector               | Description                                                                                                                                                                                                                                                                                      |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dnb-fake-focus`       | Removes default focus outline from a focusable element and adds a custom visual focus state when is focused                                                                                                                                                                                      |
| `dnb-sr-only`          | Visually hides an element, but is still reachable by screen readers. `sr`=screen reade                                                                                                                                                                                                           |
| `dnb-not-sr-only`      | The opposite of `dnb-sr-only`                                                                                                                                                                                                                                                                    |
| `dnb-unstyled-list`    | Removes default styling for lists. Apply to the `ul` or `ol` elements"                                                                                                                                                                                                                           |
| `dnb-hide-on-mobile`   | Hides element on screens that are below the `medium` size. This value of `medium` can be found in `css/core/\_variables.scss`                                                                                                                                                                    |
| `dnb-mobile-exclusive` | The opposite of `dnb-hide-on-mobile`, which means it will only be visible on screens up to the size of `medium                                                                                                                                                                                   |
| `dnb-width-limit`      | Our main wrapping class for containers. It has a max-width and a left and right padding which varies based on screen sizes                                                                                                                                                                       |
| `dnb-belt`             | A wrapping class which adds a background color and padding to top and bottom                                                                                                                                                                                                                     |
| `dnb-nudge`            | A visual nudging tool. It has a modifying class which tells the element if it should expand horizontally or vertically. It also has a data attribut which takes the amount of nudges. One nudge = 1rem, two nudges = 3rem. It takes up to 10 nudges. See example for usage. NB! Use with caution |