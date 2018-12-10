(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{1029:function(e,t,n){"use strict";n.r(t);var o=n(297);o.enableWebComponents(),t.default=o},228:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(76),n(51),n(299);var o=a(n(0)),r=n(285);a(n(1029));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.default=function(e){var t=e.components;u(e,["components"]);return o.default.createElement(r.MDXTag,{name:"wrapper",components:t},o.default.createElement(r.MDXTag,{name:"h1",components:t},"Web Components"),o.default.createElement(r.MDXTag,{name:"p",components:t},"So called ",o.default.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.w3.org/TR/custom-elements/"}},"Custom Elements"),", running as a ",o.default.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/w3c/webcomponents/"}},"Web Component")," can be used to run the ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"dnb-ui-lib")," Components in all other frameworks like Dojo, Vue and Angular."),o.default.createElement(r.MDXTag,{name:"hr",components:t}),o.default.createElement(r.MDXTag,{name:"h5",components:t},"Example"),o.default.createElement(r.MDXTag,{name:"pre",components:t},o.default.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metastring:""}},"// Method #1\nimport dnb from 'dnb-ui-lib'\ndnb.enableWebComponents()\n\n// Method #2\nimport 'dnb-ui-lib/web-components'\n\n// Method #3 - note, web-component without \"s\"\nimport 'dnb-ui-lib/components/button/web-component'\n")),o.default.createElement(r.MDXTag,{name:"p",components:t},"Now we can use our Web Components right away in our markup."),o.default.createElement(r.MDXTag,{name:"h3",components:t},"Button"),o.default.createElement(r.MDXTag,{name:"pre",components:t},o.default.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-html",metastring:""}},'<dnb-button icon="chevron-right" text="Custom Element" />\n')),o.default.createElement("div",{className:"demo-box"},o.default.createElement("dnb-button",{icon:"chevron-right",text:"Custom Element"})),o.default.createElement(r.MDXTag,{name:"h3",components:t},"Input"),o.default.createElement(r.MDXTag,{name:"pre",components:t},o.default.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-html",metastring:""}},'<dnb-form-label for_id="form-input">Label for this Input</dnb-form-label>\n<dnb-input id="form-input" placeholder="My Placeholder">My Value</dnb-input>\n')),o.default.createElement("div",{className:"demo-box"},o.default.createElement("dnb-form-label",{for_id:"form-input"},"Label for this Input"),o.default.createElement("dnb-input",{id:"form-input",placeholder:"My Placeholder"},"My Value")))};t._frontmatter={header:"UI Library",title:"Web Components",draft:!1,order:7}},285:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(365);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(o).default}});var r=n(314);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(r).default}})},299:function(e,t,n){var o=n(37),r=n(39);n(366)("keys",function(){return function(e){return r(o(e))}})},314:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(0),u=(o=a)&&o.__esModule?o:{default:o};var l=u.default.createContext({}),c=l.Provider,p=l.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,o=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(t,["components"]);return u.default.createElement(p,null,function(t){return u.default.createElement(e,r({components:n||t},o))})}};t.default=function(e){var t=e.components,n=e.children;return u.default.createElement(c,{value:t},n)}},365:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),l=(o=u)&&o.__esModule?o:{default:o},c=n(314);var p={inlineCode:"code",wrapper:"div"},i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,u=e.children,c=e.components,i=void 0===c?{}:c,m=e.Layout,f=e.layoutProps,s=i[n+"."+t]||i[t]||p[t]||t;return m?l.default.createElement(m,r({components:i},f),l.default.createElement(s,a,u)):l.default.createElement(s,a,u)}}]),t}();t.default=(0,c.withMDXComponents)(i)},366:function(e,t,n){var o=n(25),r=n(18),a=n(24);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],u={};u[e]=t(n),o(o.S+o.F*a(function(){n(1)}),"Object",u)}}}]);
//# sourceMappingURL=component---src-pages-uilib-usage-first-steps-web-components-md-e0c7302bc62f009cc906.js.map