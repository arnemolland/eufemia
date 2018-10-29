(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(84),n(53),n(287);var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(278);function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components;u(e,["components"]);return o.default.createElement(a.MDXTag,{name:"wrapper",components:t},o.default.createElement(a.MDXTag,{name:"h1",components:t},"UI inspiration"),o.default.createElement(a.MDXTag,{name:"p",components:t},"Examples of good application of the Eufemia Design System..."))};t._frontmatter={header:"Quickguide Designers - inspiration",title:"Inspiration",draft:!1}},278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(330);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n(301);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},287:function(e,t,n){var r=n(30),o=n(43);n(332)("keys",function(){return function(e){return o(r(e))}})},301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=i(n(0)),a=i(n(57)),u=i(n(1));function i(e){return e&&e.__esModule?e:{default:e}}var c=(0,a.default)({}),f=c.Provider,l=c.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return o.default.createElement(l,null,function(t){return o.default.createElement(e,r({components:n||t},a))})}};var p=function(e){var t=e.components,n=e.children;return o.default.createElement(f,{value:t},n)};p.propTypes={components:u.default.object.isRequired,children:u.default.element.isRequired},t.default=p},330:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=f(a),i=f(n(331)),c=n(301);function f(e){return e&&e.__esModule?e:{default:e}}var l={inlineCode:"code",wrapper:"div"},p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,c=e.children,f=e.components,p=void 0===f?{}:f,s=e.Layout,d=e.layoutProps,y=p[n+"."+t]||p[t]||l[t]||t;return s?((0,i.default)(this,s),u.default.createElement(s,r({components:p},d),u.default.createElement(y,a,c))):u.default.createElement(y,a,c)}}]),t}();t.default=(0,c.withMDXComponents)(p)},331:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,u=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,l=f&&f(Object);e.exports=function e(t,n,p){if("string"!=typeof n){if(l){var s=f(n);s&&s!==l&&e(t,s,p)}var d=u(n);i&&(d=d.concat(i(n)));for(var y=0;y<d.length;++y){var m=d[y];if(!(r[m]||o[m]||p&&p[m])){var v=c(n,m);try{a(t,m,v)}catch(e){}}}return t}return t}},332:function(e,t,n){var r=n(7),o=n(21),a=n(19);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],u={};u[e]=t(n),r(r.S+r.F*a(function(){n(1)}),"Object",u)}}}]);
//# sourceMappingURL=component---src-pages-quickguide-designer-inspiration-md-5112965dc3f7a8b2a56f.js.map