(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1128:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n._frontmatter=n.default=void 0;var a=t(0);t(16),t(17),t(28),t(29),t(52),t(15);var o,s=(o=t(2))&&o.__esModule?o:{default:o},r=t(1),p=t(30);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function l(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,n){return!n||"object"!==i(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,n){return(g=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var h=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=c(this,u(n).call(this,e))).layout=null,t}var t,o,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&g(e,n)}(n,s.default.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components;m(e,["components"]);return(0,a.jsx)(r.MDXTag,{name:"wrapper",components:n},(0,a.jsx)(r.MDXTag,{name:"h1",components:n},"The Basics"),(0,a.jsx)(r.MDXTag,{name:"p",components:n},"The ",(0,a.jsx)(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"dnb-ui-lib")," is hosed on the global NPM registry. Nevertheless, it includes all the needed parts to have a independent layer on top of a Frontend Framework of Your choice."),(0,a.jsx)(r.MDXTag,{name:"p",components:n},"The recomandation is to have a application setup with a compiling/build process in place."),(0,a.jsx)(r.MDXTag,{name:"h2",components:n},"HTML Elements and styling"),(0,a.jsx)(r.MDXTag,{name:"p",components:n},"In short, we have three things going on once a HTML Element is showing up and running."),(0,a.jsx)(r.MDXTag,{name:"ul",components:n},(0,a.jsx)(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Syntax as HTML"),(0,a.jsx)(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Styling by CSS"),(0,a.jsx)(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Internal states by JavaScript")),(0,a.jsx)(r.MDXTag,{name:"p",components:n},"From there on we can define the properties to customize the HTML Elements as needed. But we may also bind some Event Listeners to work together with Your Application."),(0,a.jsx)(r.MDXTag,{name:"h2",components:n},"States"),(0,a.jsx)(r.MDXTag,{name:"p",components:n},"All the HTML Elements have individual interaction states. The look and feel is defined in the default ",(0,a.jsx)(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/eufemia/uilib/usage/theming"}},"theming file")," (",(0,a.jsx)(r.MDXTag,{name:"strong",components:n,parentName:"p"},"theme-ui"),")."),(0,a.jsx)(r.MDXTag,{name:"ul",components:n},(0,a.jsx)(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Hover"),(0,a.jsx)(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Active (TouchStart)"),(0,a.jsx)(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Focus"),(0,a.jsx)(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Disabled")),(0,a.jsx)(r.MDXTag,{name:"h2",components:n},"Global Scope"),(0,a.jsx)(r.MDXTag,{name:"p",components:n},"Once You import the ",(0,a.jsx)(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"dnb-ui-lib")," style, You will not only get the HTML Element styles, but also for lower lever tags like ",(0,a.jsx)(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/eufemia/uilib/typography"}},"Headings and Paragraphs")," and support for ",(0,a.jsx)(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/eufemia/uilib/usage/accessibility/focus"}},"Focus Management"),"."),(0,a.jsx)(r.MDXTag,{name:"h2",components:n},"Compiler"),(0,a.jsx)(r.MDXTag,{name:"p",components:n},"With ",(0,a.jsx)(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://nodejs.org/"}},"Node.js")," as our JavaScript runtime in place, we may use ES6 (ECMAScript 2015) to write our Application. There are many Framework and Libraries to build user interfaces. If we take ",(0,a.jsx)(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://reactjs.org/docs/add-react-to-a-website.html#optional-try-react-with-jsx"}},"React JSX")," as an starting point, we basically ",(0,a.jsx)(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/eufemia/uilib/usage/first-steps/react"}},"do this"),":"),(0,a.jsx)(r.MDXTag,{name:"pre",components:n},(0,a.jsx)(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},'<Button text="Primary Button" />\n')),(0,a.jsx)(r.MDXTag,{name:"p",components:n},"and get this: ",(0,a.jsx)(p.Button,{text:"Primary Button"})),(0,a.jsx)(r.MDXTag,{name:"p",components:n},"You also may ",(0,a.jsx)(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/eufemia/uilib/usage/styling"}},"import the styles")," on a higher lever in Your application:"),(0,a.jsx)(r.MDXTag,{name:"pre",components:n},(0,a.jsx)(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import 'dnb-ui-lib/style'\n")),(0,a.jsx)(r.MDXTag,{name:"p",components:n},"And finally bind an ",(0,a.jsx)(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/eufemia/uilib/usage/event-handling"}},"event listener"),":"),(0,a.jsx)(r.MDXTag,{name:"pre",components:n},(0,a.jsx)(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},'<Button text="Button" on_click={myClickHandler} />\n')),(0,a.jsx)(r.MDXTag,{name:"h2",components:n},"UMD"),(0,a.jsx)(r.MDXTag,{name:"p",components:n},"In case You don't have a compiling/build process, You can use the UMD packed version of the ",(0,a.jsx)(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"dnb-ui-lib"),". Take a look here how to use it ",(0,a.jsx)(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"REPOSITORY/packages/examples/example-html")," (src/umd). But this will not optimize Your code for the best user experience. So, to use UMD is ",(0,a.jsx)(r.MDXTag,{name:"strong",components:n,parentName:"p"},"not recommended"),"."),(0,a.jsx)(r.MDXTag,{name:"pre",components:n},(0,a.jsx)(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-html"}},'<html>\n  <head>\n    ...\n    <link\n      rel="stylesheet"\n      href="https://unpkg.com/dnb-ui-lib@latest/style/dnb-ui-lib.min.css"\n    />\n  </head>\n  <body>\n    ...\n    <script src="https://unpkg.com/dnb-ui-lib@latest/umd/dnb-ui-lib.min.js"><\/script>\n  </body>\n</html>\n')))}}])&&l(t.prototype,o),i&&l(t,i),n}();n.default=h;n._frontmatter={header:"UI Library",title:"The Basics",draft:!1,order:2}}}]);
//# sourceMappingURL=component---src-pages-uilib-usage-first-steps-the-basics-md-3d9ddcd087c9d54afedd.js.map