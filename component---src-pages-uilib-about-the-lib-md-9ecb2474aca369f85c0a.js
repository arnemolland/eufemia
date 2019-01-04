(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1076:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n._frontmatter=n.default=void 0;var o=t(0);t(16),t(17),t(28),t(29),t(52),t(15);var a=r(t(2)),s=t(1);r(t(149));function r(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function m(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,n){return!n||"object"!==i(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var d=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=l(this,c(n).call(this,e))).layout=null,t}var t,r,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}(n,a.default.Component),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.components;p(e,["components"]);return(0,o.jsx)(s.MDXTag,{name:"wrapper",components:n},(0,o.jsx)(s.MDXTag,{name:"h1",components:n},"About the Library"),(0,o.jsx)(s.MDXTag,{name:"p",components:n},(0,o.jsx)(s.MDXTag,{name:"strong",components:n,parentName:"p"},"Why does this UI Library exist?")),(0,o.jsx)(s.MDXTag,{name:"p",components:n},"Simply to unify the most commonly used HTML Elements at DNB and to work together to make every of them better."),(0,o.jsx)(s.MDXTag,{name:"p",components:n},"So Yes, this section of the Design System is dedicated to ",(0,o.jsx)(s.MDXTag,{name:"strong",components:n,parentName:"p"},"application development"),"."),(0,o.jsx)(s.MDXTag,{name:"h2",components:n},"Only HTML Elements? No."),(0,o.jsx)(s.MDXTag,{name:"p",components:n},"Designers are thinking in grids and absolute sizes. Developers not. But by making the most commonly used syntaxes (h1, h2, p, etc.) unison with the DNB UX Design principles and standardizing them, it will give frontend developers, a new and much faster way to build applications based on DNB UX Design principles - naming conventions, standardized sizing, spacing and single sources of truth for common resources."),(0,o.jsx)(s.MDXTag,{name:"h2",components:n},"The Library has on aim to solve:"),(0,o.jsx)(s.MDXTag,{name:"ul",components:n},(0,o.jsx)(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Ready to use HTML Elements"),(0,o.jsx)(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Build on top of the DNB Eufemia Design System principles"),(0,o.jsx)(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Includes DNB brand styles, fonts and icons"),(0,o.jsx)(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Takes care of accessibility (",(0,o.jsx)(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://www.w3.org/TR/WCAG20-TECHS/aria"}},"ARIA Techniques"),")")),(0,o.jsx)(s.MDXTag,{name:"h3",components:n},"In detail, a frontend developers will get:"),(0,o.jsx)(s.MDXTag,{name:"ol",components:n},(0,o.jsx)(s.MDXTag,{name:"li",components:n,parentName:"ol"},"A theme-able resource of HTML elements to use in existing and new applications."),(0,o.jsx)(s.MDXTag,{name:"li",components:n,parentName:"ol"},"An independent layer in applications, where a build in versioning system takes care of future changes."),(0,o.jsx)(s.MDXTag,{name:"li",components:n,parentName:"ol"},"HTML elements are made WCAG 2.1 compliant and a checklist of values DNB wish to embrace in future application development."),(0,o.jsx)(s.MDXTag,{name:"li",components:n,parentName:"ol"},"The most commonly used Icons as a part of the bundle."),(0,o.jsx)(s.MDXTag,{name:"li",components:n,parentName:"ol"},"Tested and widely compatible HTML elements where the code is automatically verified, formatted and tested using the latest tools such as Axe, StyleLint, ESLint and Prettier. All the HTML elements are build upon integration tests for internal states, static tests and snapshot tests to make future changes more obvious to the stakeholders.")),(0,o.jsx)(s.MDXTag,{name:"h3",components:n},"Collaboration"),(0,o.jsx)(s.MDXTag,{name:"p",components:n},"Through NPM and GitHub, with a Deploy server in place, a platform on which collaboration between design and development will be more transparent. Also, Figma API integration will allow for more collaboration possibilities."),(0,o.jsx)(s.MDXTag,{name:"h2",components:n},"Technical aspects"),(0,o.jsx)(s.MDXTag,{name:"p",components:n},"The HTML Elements are build based on ",(0,o.jsx)(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://reactjs.org/"}},"React"),".\nThe reason for this is that React offers a robust library of tools to build deeply and well tested and reusable elements."),(0,o.jsx)(s.MDXTag,{name:"h3",components:n},"What about other Frontend Frameworks?"),(0,o.jsx)(s.MDXTag,{name:"p",components:n},"To make the HTML Elements work in other environments like Vue or Angular, You can use the build-in Web Components support. ",(0,o.jsx)(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://vuejs.org/"}},"VueJS")," has also a integrated direct binding by using ",(0,o.jsx)(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/akxcv/vuera"}},"vuera"),"."),(0,o.jsx)(s.MDXTag,{name:"p",components:n},"The Library is hosted on ",(0,o.jsx)(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"npmjs.com"}},"NPM"),", so versioning and openness is secured."),(0,o.jsx)(s.MDXTag,{name:"h3",components:n},"Production ready"),(0,o.jsx)(s.MDXTag,{name:"p",components:n},"All code examples are shows as ES6 (",(0,o.jsx)(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://en.wikipedia.org/wiki/ECMAScript"}},"ECMAScript 2015"),"). But the production ",(0,o.jsx)(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"dnb-ui-lib")," is actually compiled down to ES5 (5th Edition). So Your product is consuming production ready code on all stages."),(0,o.jsx)(s.MDXTag,{name:"h3",components:n},"Components"),(0,o.jsx)(s.MDXTag,{name:"p",components:n},"The HTML Elements UI Library comes with two different parts. The first and most common is the ",(0,o.jsx)(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/eufemia/uilib/components/"}},"Components Library"),"."),(0,o.jsx)(s.MDXTag,{name:"h3",components:n},"Patterns"),(0,o.jsx)(s.MDXTag,{name:"p",components:n},"But then there are a lot of use cases where ",(0,o.jsx)(s.MDXTag,{name:"em",components:n,parentName:"p"},"components")," gets combined and a kind of new component comes to life. This will then be a pattern. The best pattern setup would be more a guidance, so a Developer can the a patterns as a good startd, and go from there.\nCheck out the ",(0,o.jsx)(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/eufemia/uilib/patterns/"}},"available Patterns Library"),"."),(0,o.jsx)(s.MDXTag,{name:"h2",components:n},"Where do I go next?"),(0,o.jsx)(s.MDXTag,{name:"p",components:n},"Check out ",(0,o.jsx)(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/eufemia/uilib/getting-started/"}},"Getting Started")))}}])&&m(t.prototype,r),i&&m(t,i),n}();n.default=d;n._frontmatter={header:"UI Library",title:"About the Library",draft:!1,order:1}}}]);
//# sourceMappingURL=component---src-pages-uilib-about-the-lib-md-9ecb2474aca369f85c0a.js.map