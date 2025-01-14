/**
 * Default Portal Styling
 *
 */

import { css } from '@emotion/core'

const gridStyle = ({
  rgb = null,
  hsl = '204, 80%, 72%',
  a = 0.8
} = {}) => {
  const color = c =>
    rgb ? `rgba(${rgb}, ${a - c})` : `hsla(${hsl}, ${a - c})`
  return css`
    position: relative;

    --grid-gutter: 0.5rem;
    --grid-gutter-bold: 2rem;
    --grid-color: ${color(0.5)};
    --grid-color-bold: ${color(0.15)};
    --grid-line-thickness: 1px;

    --grid-columns: repeating-linear-gradient(
      to right,
      var(--grid-color),
      var(--grid-color) var(--grid-line-thickness),
      transparent var(--grid-line-thickness),
      transparent var(--grid-gutter)
    );
    --grid-columns-bold: repeating-linear-gradient(
      to right,
      var(--grid-color-bold),
      var(--grid-color-bold) var(--grid-line-thickness),
      transparent var(--grid-line-thickness),
      transparent var(--grid-gutter-bold)
    );
    --grid-rows: repeating-linear-gradient(
      to bottom,
      var(--grid-color),
      var(--grid-color) var(--grid-line-thickness),
      transparent var(--grid-line-thickness),
      transparent var(--grid-gutter)
    );
    --grid-rows-bold: repeating-linear-gradient(
      to bottom,
      var(--grid-color-bold),
      var(--grid-color-bold) var(--grid-line-thickness),
      transparent var(--grid-line-thickness),
      transparent var(--grid-gutter-bold)
    );

    &::after {
      content: '';

      position: absolute;
      z-index: -100;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background-image: var(--grid-columns), var(--grid-columns-bold),
        var(--grid-rows), var(--grid-rows-bold);

      border-bottom: solid var(--grid-line-thickness)
        var(--grid-color-bold);
      border-right: solid var(--grid-line-thickness) var(--grid-color-bold);
    }
  `
}
export default gridStyle
