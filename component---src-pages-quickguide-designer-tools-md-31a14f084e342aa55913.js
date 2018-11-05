(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(84),n(53),n(288);var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(279);function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components;i(e,["components"]);return o.default.createElement(a.MDXTag,{name:"wrapper",components:t},o.default.createElement(a.MDXTag,{name:"h1",components:t},"Tools"),o.default.createElement(a.MDXTag,{name:"p",components:t},"DNB's master design templates and guides are created and maintained in Figma.\nDesigners are ",o.default.createElement(a.MDXTag,{name:"strong",components:t,parentName:"p"},"encouraged")," to work in in Figma in order to maintain compatibility and shareability."),o.default.createElement(a.MDXTag,{name:"p",components:t},"Figma: ",o.default.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.figma.com/"}},"https://www.figma.com/")),o.default.createElement(a.MDXTag,{name:"h4",components:t},"Why not Sketch?"),o.default.createElement(a.MDXTag,{name:"p",components:t},"We are working on the 'single-source -of-truth' principle. For that reason only one design application will be used to generate Eufemia's master documents."),o.default.createElement(a.MDXTag,{name:"p",components:t},"In general, if a team decides ",o.default.createElement(a.MDXTag,{name:"strong",components:t,parentName:"p"},"together")," to use a specific application or technology because they feel that the product or service will be built better then they should, or that they are more comfortable using it. Even then it is recommended that data and file formats remain agnostic(?)/ reusable in other common applications/technologies."))};t._frontmatter={header:"Quickguide Designers - Tools",title:"Design Tools",draft:!1}},279:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(337);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n(302);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},288:function(e,t,n){var r=n(30),o=n(43);n(339)("keys",function(){return function(e){return o(r(e))}})},302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=c(n(0)),a=c(n(57)),i=c(n(1));function c(e){return e&&e.__esModule?e:{default:e}}var u=(0,a.default)({}),l=u.Provider,s=u.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return o.default.createElement(s,null,function(t){return o.default.createElement(e,r({components:n||t},a))})}};var p=function(e){var t=e.components,n=e.children;return o.default.createElement(l,{value:t},n)};p.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},t.default=p},337:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=l(a),c=l(n(338)),u=n(302);function l(e){return e&&e.__esModule?e:{default:e}}var s={inlineCode:"code",wrapper:"div"},p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,u=e.children,l=e.components,p=void 0===l?{}:l,f=e.Layout,m=e.layoutProps,d=p[n+"."+t]||p[t]||s[t]||t;return f?((0,c.default)(this,f),i.default.createElement(f,r({components:p},m),i.default.createElement(d,a,u))):i.default.createElement(d,a,u)}}]),t}();t.default=(0,u.withMDXComponents)(p)},338:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,i=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,s=l&&l(Object);e.exports=function e(t,n,p){if("string"!=typeof n){if(s){var f=l(n);f&&f!==s&&e(t,f,p)}var m=i(n);c&&(m=m.concat(c(n)));for(var d=0;d<m.length;++d){var y=m[d];if(!(r[y]||o[y]||p&&p[y])){var g=u(n,y);try{a(t,y,g)}catch(e){}}}return t}return t}},339:function(e,t,n){var r=n(7),o=n(21),a=n(19);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],i={};i[e]=t(n),r(r.S+r.F*a(function(){n(1)}),"Object",i)}}}]);
//# sourceMappingURL=component---src-pages-quickguide-designer-tools-md-31a14f084e342aa55913.js.map