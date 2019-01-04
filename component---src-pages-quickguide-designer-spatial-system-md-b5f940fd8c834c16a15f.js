(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1132:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0;var a=n(0);n(16),n(17),n(28),n(29),n(52),n(15);var s=M(n(2)),o=n(1),i=(M(n(252)),M(n(253)),M(n(254)),M(n(255)),M(n(256))),r=M(n(257)),p=M(n(258)),m=M(n(259)),l=M(n(260)),c=M(n(261)),h=M(n(262)),g=M(n(263)),d=M(n(264)),u=M(n(265)),f=M(n(266)),x=M(n(267)),b=M(n(268)),y=M(n(269)),j=M(n(270)),w=M(n(271)),T=M(n(27));function M(e){return e&&e.__esModule?e:{default:e}}function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function k(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var z=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=k(this,N(t).call(this,e))).layout=null,n}var n,M,D;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,s.default.Component),n=t,(M=[{key:"render",value:function(){var e=this.props,t=e.components;X(e,["components"]);return(0,a.jsx)(o.MDXTag,{name:"wrapper",components:t},(0,a.jsx)(o.MDXTag,{name:"h1",components:t},"Spatial system"),(0,a.jsx)(o.MDXTag,{name:"h2",components:t},"About"),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"The Eufemia Design System uses a simple 8 pixel spatial system for both layout and typography.\nThe reason for this is because many device and digital metrics are divisible by 8. For example, many popular browsers set their default body font-size to 16px and many screen sizes are also divisibly by 8.\nThe 8 pixel base grid unit has been adopted by many well known design systems such as Google's Material Design."),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"Ultimately the best reason for adopting 8 as a base number is because we can apply it perfectly to both type and layout.\nIt is simple and consistent whilst allowing for some design freedom."),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"NB! All unitless measurements in the following illustrations are multiples of 8px (for example: x2 means two 8px units)"),(0,a.jsx)(T.default,{src:i.default,caption:"Label with line height 16 aligning with dropdown of 32px high, padding left and right 16px and an icon sized 16x16",alt:"My alt",height:"48"}),(0,a.jsx)(o.MDXTag,{name:"h4",components:t},"Line-height % Grid base unit = 0"),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"A general rule for getting type to sit precisely on the 8px grid is to make sure that line heights are divisible by 8"),(0,a.jsx)(o.MDXTag,{name:"h4",components:t},"Don't make me think - Make everything out of 8's"),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"Applying the 8px base system to as much as possible within UI design means that design decisions can be made easier. margins, paddings, empty space, widths and heights can all be made with multiples of 8."),(0,a.jsx)(o.MDXTag,{name:"h5",components:t},"Exceptions"),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"Sometimes 8 is not small enough or too big. Line thicknesses and borders are usually 1-2px in thickness. When we encounter situations where lines may 'throw' the layout off the grid, we can compensate by removing these line thicknesses from the padding or margin of the neighbouring element."),(0,a.jsx)(T.default,{src:m.default,caption:"Removing border thickness from padding",alt:"Removing border thickness from padding",height:"328"}),(0,a.jsx)(o.MDXTag,{name:"h5",components:t},"Calculating line thickness v. the 8px grid"),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"A single pixel equates to about 0.0625em ( 1/16 ), therefore if an element has padding of 1em (~16px) and a border of thickness 1px, we remove the border thickness from the padding:"),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"Border = 0.0625em\nPadding = 1em - 0.0625em = 0.9375em"),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"For a 2px thick border we set the padding to be:"),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"Padding = 1em - 0.125em = 0.875em"),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"The bordered element will now sit nicely on the baseline grid."),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"In typography, a similar effect is seen when the line height of a text style is not evenly divisible by 8. For example, body text (paragraph), is set at 16px and it's line height is set at 24px."),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"In this case ",(0,a.jsx)(o.MDXTag,{name:"strong",components:t,parentName:"p"},"line-height / 8")," is equal to 3 (24 / 8 = 3)"),(0,a.jsx)(o.MDXTag,{name:"h5",components:t},"Horizontal lines and divider Lines"),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"The same process should be applied in dealing with divider lines.\nHorizontal rules and other dividing mechanisms usually have some margin or padding around them. Remove the lines thickness from the padding or margin (above or below), to maintain the baseline grid."),(0,a.jsx)(T.default,{src:l.default,caption:"Line heights divisible by 8 sit on the grid (left side)",alt:"Line heights and the grid",height:"304"}),(0,a.jsx)(o.MDXTag,{name:"h4",components:t},"Why do we need a spatial system?"),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"Space affects consistency, usability, readability and ultimately user experience."),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"A good spatial system takes some of the guesswork out of layout decisions for designers and developers. It also makes it's easier for others to understand the intentions of the designer when viewing design files."),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"In the example below, a viewer informed of the spatial system could easily assume that the colored line thicknesses are 8px, 16px and 24px respectively and not 'odd' numbers like 7, 13 and 25."),(0,a.jsx)(T.default,{src:c.default,caption:"Three padding thicknesses easily assumed to be 8, 16 and 24px",alt:"",height:"104"}),(0,a.jsx)(T.default,{src:h.default,caption:"Vertical and horizontal margins based on the 8px grid",alt:"",height:"320"}),(0,a.jsx)(o.MDXTag,{name:"h2",components:t},"Principles"),(0,a.jsx)(o.MDXTag,{name:"ol",components:t},(0,a.jsx)(o.MDXTag,{name:"li",components:t,parentName:"ol"},"Be consistent - use the spatial system for both layout and typography"),(0,a.jsx)(o.MDXTag,{name:"li",components:t,parentName:"ol"},"Keep it simple - avoid adding more block sizes or 'in-between' sizes"),(0,a.jsx)(o.MDXTag,{name:"li",components:t,parentName:"ol"},"Abstract the spacing - set spacing rules at an abstract level to allow for scaleability and future changes across whole systems")),(0,a.jsx)(o.MDXTag,{name:"h2",components:t},"Where the spacing system is applied:"),(0,a.jsx)(o.MDXTag,{name:"ol",components:t},(0,a.jsx)(o.MDXTag,{name:"li",components:t,parentName:"ol"},"margins"),(0,a.jsx)(o.MDXTag,{name:"li",components:t,parentName:"ol"},"padding"),(0,a.jsx)(o.MDXTag,{name:"li",components:t,parentName:"ol"},"z-index"),(0,a.jsx)(o.MDXTag,{name:"li",components:t,parentName:"ol"},"extents (wide display empty space)"),(0,a.jsx)(o.MDXTag,{name:"li",components:t,parentName:"ol"},"space within elements"),(0,a.jsx)(o.MDXTag,{name:"li",components:t,parentName:"ol"},"typography - margins and line-height (problems of cap-height and baseline )")),(0,a.jsx)(o.MDXTag,{name:"h3",components:t},"1. Margins"),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"Margin refers to the space ",(0,a.jsx)(o.MDXTag,{name:"strong",components:t,parentName:"p"},"outside or around")," an object.\nUse margins to create space between elements. Objects which allow interaction by touch should have enough margin around them that users don't accidentally hit the wrong object. Small margins can be used to indicate relationship between objects, large margins to indicate otherwise (Link to Gestalt principles of proximity (",(0,a.jsx)(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.interaction-design.org/literature/topics/gestalt-principles"}},"https://www.interaction-design.org/literature/topics/gestalt-principles"),"))."),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"Set margins based on one or more spatial blocks.\nmargins do not have to be equal on all sides of and object. Margins between related objects can be reduced to position closer together."),(0,a.jsx)(T.default,{src:p.default,caption:"Margin - highlighted in yellow",alt:"Margin example",height:"48"}),(0,a.jsx)(o.MDXTag,{name:"h3",components:t},"2. Padding"),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"Padding refers to the space ",(0,a.jsx)(o.MDXTag,{name:"strong",components:t,parentName:"p"},"within")," an object."),(0,a.jsx)(T.default,{src:r.default,caption:"Padding - highlighted in magenta",alt:"Padding example",height:"48"}),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"Padding can be used to 'inflate' an objects bounding or 'hit area' or make it larger without scaling it's internal parts."),(0,a.jsx)(T.default,{src:g.default,caption:"Padding used to increase the appearance of a button",alt:"Padding in buttons",height:"256"}),(0,a.jsx)(o.MDXTag,{name:"h3",components:t},"3. Z-index"),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"Z-index spacing refers to space along the z-axis of an interface. It is not used much, except when styling shadows perhaps indicating that an object moves closer/further from/to the user. The shadow's blur, color and offset combine to give the illusion of the object being 'above' the rest of the elements on the UI."),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"In the example below the shadow on the left is used for modal windows whereas the shadow on the right is used for open elements and components such as date pickers and dropdowns."),(0,a.jsx)(T.default,{src:d.default,caption:"Shadows used to illustrate space below an object",alt:"Shadows",height:"272"}),(0,a.jsx)(o.MDXTag,{name:"h3",components:t},"4. Extents"),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"Extents refers to the amount of space available on displays and how much of it the content should take up. Ideal line length at default text-size (16px) is about 11-12 words. On large displays this can create vast areas of white space on the sides while still requiring the user to scroll. Use breakpoints to decide if multiple columns of content is a better way to present the content."),(0,a.jsx)(T.default,{src:u.default,caption:"Making use of the horizontal space",alt:"Extents",height:"608"}),(0,a.jsx)(o.MDXTag,{name:"h3",components:t},"5. Space within elements"),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"This relates to the amount of inner space an objects has. It has similarities to padding but also deals with small intricate cavities especially in graphic elements such as icons. When icons are resized down they sometimes loose some of their details and legibility."),(0,a.jsx)(T.default,{src:f.default,caption:"Space within objects - highlighted here by the checkerboard",alt:"Space within objects",height:"136"}),(0,a.jsx)(o.MDXTag,{name:"h3",components:t},"6. Typography"),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"Typographic rules are intrinsically linked to the spatial system."),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"Typographic elements have a kind of internal space and an external one. Their line heights create space above and below (between the lines). Adding margins to blocks of text creates further space them."),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"Eufemia typographic rules are built on the same units of measurement (multiples of 8), however, aligning type to the baseline grid is not as straightforward as setting font sizes to multiples of 8."),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"The Eufemia type scale should be limited to ",(0,a.jsx)(o.MDXTag,{name:"strong",components:t,parentName:"p"},"12px, 14px, 16px, 18px, 24px, 32px"),". Larger sizes can be used but must follow the sizing and spacing rules."),(0,a.jsx)(T.default,{src:x.default,caption:"Type elements aligning to the grid",alt:"Type elements aligning to the grid",height:"200"}),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"For those familiar with CSS, we establish typographic rules in the following way:"),(0,a.jsx)(o.MDXTag,{name:"ol",components:t},(0,a.jsx)(o.MDXTag,{name:"li",components:t,parentName:"ol"},(0,a.jsx)(o.MDXTag,{name:"p",components:t,parentName:"li"},"Set a body size for the interface. The default size for a browser is 100%"),(0,a.jsx)(o.MDXTag,{name:"p",components:t,parentName:"li"},(0,a.jsx)(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"body { font-size: 100%; }")),(0,a.jsx)(o.MDXTag,{name:"p",components:t,parentName:"li"},"This will set the default size for paragraph text to ",(0,a.jsx)(o.MDXTag,{name:"strong",components:t,parentName:"p"},"16px"))),(0,a.jsx)(o.MDXTag,{name:"li",components:t,parentName:"ol"},(0,a.jsx)(o.MDXTag,{name:"p",components:t,parentName:"li"},"Set font styles on paragraphs, headers, buttons etc. (basically everything) in the following manner:"),(0,a.jsx)(o.MDXTag,{name:"ul",components:t,parentName:"li"},(0,a.jsx)(o.MDXTag,{name:"li",components:t,parentName:"ul"},"font sizes should be set with ",(0,a.jsx)(o.MDXTag,{name:"strong",components:t,parentName:"li"},"em")),(0,a.jsx)(o.MDXTag,{name:"li",components:t,parentName:"ul"},"line-heights should be set with ",(0,a.jsx)(o.MDXTag,{name:"strong",components:t,parentName:"li"},"rem")),(0,a.jsx)(o.MDXTag,{name:"li",components:t,parentName:"ul"},"margin-",(0,a.jsx)(o.MDXTag,{name:"strong",components:t,parentName:"li"},"bottom")," should be set with ",(0,a.jsx)(o.MDXTag,{name:"strong",components:t,parentName:"li"},"rem"))),(0,a.jsx)(o.MDXTag,{name:"p",components:t,parentName:"li"},"Use a calculator to calculate the ",(0,a.jsx)(o.MDXTag,{name:"strong",components:t,parentName:"p"},"rem")," and ",(0,a.jsx)(o.MDXTag,{name:"strong",components:t,parentName:"p"},"em"),".\nAlternatively, refer to these test pages which show various font sizes embedded in various body font sizes.\nHere is a good one: ",(0,a.jsx)(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://pxtoem.com/"}},"http://pxtoem.com/")))),(0,a.jsx)(o.MDXTag,{name:"h3",components:t},"Eufemia Spatial System ≠ A Grid System"),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"A spatial system and grid system are two different things. A grid is a component which ",(0,a.jsx)(o.MDXTag,{name:"em",components:t,parentName:"p"},"uses")," space.\nThe Eufemia Spatial System is a very simple set of ’space-blocks’ than ",(0,a.jsx)(o.MDXTag,{name:"em",components:t,parentName:"p"},"create")," space - akin to the leading slugs in a typesetters frame."),(0,a.jsx)(T.default,{src:b.default,caption:"Space blocks seperating objects",alt:"Space blocks",height:"120"}),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"A ",(0,a.jsx)(o.MDXTag,{name:"em",components:t,parentName:"p"},"grid system")," is typically a more elaborate set of containers which divide the UI into sections with margins and gutters between them. Eufemia's spatial system is a simple guide for space and type set around the 8px base unit."),(0,a.jsx)(o.MDXTag,{name:"h3",components:t},"Keep it simple"),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"In order for a spatial system to be adopted it needs to be very simple.\nDeviations from the simple but strict rules should be allowed for edge cases but avoided if the aim to to maintain consistency."),(0,a.jsx)(o.MDXTag,{name:"h3",components:t},"Process"),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"By relating our base grid for elements and components to the typographic sizing system, we can maintain visual consistency between type and layout."),(0,a.jsx)(o.MDXTag,{name:"p",components:t},(0,a.jsx)(o.MDXTag,{name:"strong",components:t,parentName:"p"},"Designers:")),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"Set up an 8px x 8px underlay for all interface design work.\nWhen positioning elements, have them 'snap' to this underlay."),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"Use ",(0,a.jsx)(o.MDXTag,{name:"em",components:t,parentName:"p"},"'space blocks'")," to add margins and paddings to elements, components and the UI white space."),(0,a.jsx)(o.MDXTag,{name:"p",components:t},(0,a.jsx)(o.MDXTag,{name:"strong",components:t,parentName:"p"},"Developers:")),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"If the designer has laid out the UI correctly in Figma, there should be no ",(0,a.jsx)(o.MDXTag,{name:"em",components:t,parentName:"p"},"'off sizes'")," - strange uneven numbers that are almost a multiple of 8 but not quite."),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"It is always good practice to cross check it with the design before releasing."),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"If there are issues maintaining the spatial system when components are coded, then inform the designer so that a suitable solution is found."),(0,a.jsx)(o.MDXTag,{name:"h3",components:t},"Design Software View Vs. Browser View"),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"When designing with type, there may sometimes be small discrepancies between the design file view and the coded in-browser view."),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"In order to see how type is rendered in the browser and view the space it uses, toggle the grid view in the top right of this document."),(0,a.jsx)(T.default,{src:y.default,caption:"Slight discrepencies between design tool and browser rendering",alt:"Discrepencies between design tool and browser",height:"160"}),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"In the image above the heading with the blue background is how Figma shows the space the the heading uses. The heading with the yellow background is how the browser (Chrome) renders and shows the space taken up. Note the space above the first letter 'T'. In Figma this is 2 pixels whereas in Chrome it is 6 pixels."),(0,a.jsx)(o.MDXTag,{name:"h3",components:t},"Examples"),(0,a.jsx)(o.MDXTag,{name:"p",components:t},"The example below shows the 8px system in practice."),(0,a.jsx)(T.default,{src:j.default,caption:"A simple example of the 8px system in use",alt:"Aarsoppgave example",height:"840"}),(0,a.jsx)(T.default,{src:w.default,caption:"The 8px system highlighted",alt:"Aarsoppgave example",height:"840"}))}}])&&v(n.prototype,M),D&&v(n,D),t}();t.default=z;t._frontmatter={header:"Quickguide Designers - Spatial system",title:"Spatial system",draft:!1}}}]);
//# sourceMappingURL=component---src-pages-quickguide-designer-spatial-system-md-b5f940fd8c834c16a15f.js.map