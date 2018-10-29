(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{210:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(84),n(53),n(287);var r=u(n(0)),o=n(278),a=u(n(494));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components;l(e,["components"]);return r.default.createElement(o.MDXTag,{name:"wrapper",components:t},r.default.createElement(a.default,null))};t._frontmatter={header:"UI Library",title:"FormSummary",draft:!1,order:0}},299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(269),n(270),n(271),n(56);var r=n(285),o=p(n(305)),a=p(n(0)),u=n(307),l=d(n(11)),i=d(n(1)),c=d(n(369)),f=n(272),s=n(13);function d(e){return e&&e.__esModule?e:{default:e}}function p(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(){return"undefined"==typeof window?null:(0,c.default)().location},_=(0,f.css)(";.fullscreen-page &{top:0;.is-sticky .dnb-tabs__tabs{margin:0 -2rem;}}.dnb-tabs__tabs{justify-content:space-between;align-items:center;}.toggle-fullscreen{margin-right:1rem;}.dnb-modal__close-button{position:relative;top:auto;right:auto;}"),w=function(e){function t(e){var n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=b(t).call(this,e),n=!o||"object"!==m(o)&&"function"!=typeof o?h(r):o,g(h(h(n)),"state",{activeTabKey:"demo",wasFullscreen:null}),g(h(h(n)),"openTab",function(e){var t=e.key;n.setState({activeTabKey:t})}),g(h(h(n)),"openFullscreen",function(){var e=O();e&&(0,s.navigate)("".concat(e.pathname,"?fullscreen#").concat(n.state.activeTabKey))}),g(h(h(n)),"quitFullscreen",function(){var e=O();e&&(0,s.navigate)([e.pathname,e.hash].join(""))});var a=O();return a&&(n.state.wasFullscreen=/fullscreen/.test(a.search)),n}var n,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,a.Component),n=t,(i=[{key:"isActive",value:function(e){return this.state.activeTabKey===e}},{key:"componentWillMount",value:function(){var e=O();e&&this.setState({wasFullscreen:/fullscreen/.test(e.search)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,i=t.id,c=t.tabs,f=t.hideTabs,s=t.ExampleCode,d=t.InfoComponent,p=t.DemoComponent,m=t.CodeComponent,y=t.callback;return a.default.createElement("div",{className:"wrapped-item"},f?a.default.createElement("h4",null,a.default.createElement(l.default,{to:"/uilib/components/".concat(i)},n)):a.default.createElement("h1",null,n),!f&&a.default.createElement(r.Tabs,{data:c,on_change:this.openTab,render:function(t){var n=t.Wrapper,o=t.TabsList,l=t.Tabs;return a.default.createElement(n,{className:_},a.default.createElement(o,null,a.default.createElement("div",{className:"dnb-tabs__tabs__inner"},a.default.createElement(l,null)),e.state.wasFullscreen?a.default.createElement(u.CloseButton,{on_click:e.quitFullscreen,title:"Quit Fullscreen",className:"toggle-fullscreen"}):a.default.createElement(r.Button,{on_click:e.openFullscreen,className:"toggle-fullscreen",variant:"secondary",title:"Fullscreen",icon:"fullscreen"})))}}),this.isActive("demo")&&a.default.createElement("div",{className:"dnb-tabs__content"},a.default.createElement(p,null),y&&y.demo&&a.default.createElement(y.demo,{CodeRenderer:o.CodeRenderer})),this.isActive("info")&&a.default.createElement("div",{className:"dnb-tabs__content"},a.default.createElement(d,null),y&&y.info&&a.default.createElement(y.info,{CodeRenderer:o.CodeRenderer}),s&&a.default.createElement(a.Fragment,null,a.default.createElement("h3",null,"JSX Example"),a.default.createElement(o.CodeRenderer,{language:"jsx"},s))),this.isActive("code")&&a.default.createElement("div",{className:"dnb-tabs__content"},a.default.createElement(o.default,{source:m}),y&&y.code&&a.default.createElement(y.code,{CodeRenderer:o.CodeRenderer})))}}])&&y(n.prototype,i),c&&y(n,c),t}();g(w,"propTypes",{ExampleCode:i.default.string,InfoComponent:i.default.func.isRequired,DemoComponent:i.default.func.isRequired,CodeComponent:i.default.func.isRequired,callback:i.default.shape({demo:i.default.oneOfType([i.default.func,i.default.node]),info:i.default.oneOfType([i.default.func,i.default.node]),code:i.default.oneOfType([i.default.func,i.default.node])}),hideTabs:i.default.bool,title:i.default.string.isRequired,id:i.default.string.isRequired,tabs:i.default.array}),g(w,"defaultProps",{ExampleCode:null,hideTabs:!1,callback:null,tabs:[{title:"Demo",key:"demo"},{title:"Details",key:"info"},{title:"Markup",key:"code"}]});var j=w;t.default=j},300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(82),n(269),n(270),n(86);var r=i(n(0)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(367)),a=i(n(364)),u=n(365),l=i(n(304));function i(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=function(e){var t=e.language,n=e.children,i=e.reactLive,s=e.className;return t||(t=((s||"").split(/-/)||[null,"jsx"])[1]),i&&"jsx"===t?(console.log("exampleCode",t,f(n)),r.default.createElement(u.LiveProvider,{code:"string"==typeof n?String(n).trim():null},r.default.createElement(u.LiveEditor,null),r.default.createElement(u.LiveError,null),r.default.createElement(u.LivePreview,null))):r.default.createElement(o.default,c({},o.defaultProps,{code:String(n).trim(),language:t,theme:a.default}),function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,u=e.getTokenProps;return r.default.createElement(l.default,{className:t,style:n,p:3},d(o).map(function(e,t){return r.default.createElement("div",a({line:e,key:t}),e.map(function(e,t){return r.default.createElement("span",u({token:e,key:t}))}))}))})};t.default=s;var d=function(e){var t=e.length;if(0===t)return e;var n=e[t-1];return 1===n.length&&n[0].empty?e.slice(0,t-1):e}},304:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(0,((r=n(366))&&r.__esModule?r:{default:r}).default)({is:"pre",m:0});o.displayName="Pre";var a=o;t.default=a},305:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CodeRenderer=t.default=void 0,n(269),n(270),n(41),n(271),n(29),n(370);var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=c(n(306)),a=c(n(1)),u=c(n(375)),l=c(n(376)),i=c(n(300));function c(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,n,r,o,a,u){try{var l=e[a](u),i=l.value}catch(e){return void n(e)}l.done?t(i):Promise.resolve(i).then(r,o)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?g(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(e){function t(e){var n;d(this,t),O(g(g(n=y(this,b(t).call(this,e)))),"state",{codeString:""}),O(g(g(n)),"_isMounted",!1);var o=n.props.source;return n.beautify(r.default.createElement(o,null)),n}var n,a;return v(t,r.Component),m(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.setCode()}},{key:"setCode",value:function(){this.code&&this.setState({codeString:this.props.raw+this.code}),this.code=null}},{key:"beautify",value:(n=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.props.language,e.next="html"===e.t0?3:18;break;case 3:return this.code=u.default.renderToStaticMarkup(t),this.code=this.code.replace(/data-fake:/g,""),this.code=this.code.replace(/disabled=""/g,'disabled="disabled"'),e.prev=6,e.next=9,(0,o.default)(this.code,"html");case 9:this.code=e.sent,this.code=(0,l.default)(this.code,{ocd:!0}),this._isMounted&&this.setCode(),e.next=17;break;case 14:e.prev=14,e.t1=e.catch(6),console.log("HTML Beautifier Error:",e.t1);case 17:return e.abrupt("break",18);case 18:case"end":return e.stop()}},e,this,[[6,14]])}),a=function(){var e=this,t=arguments;return new Promise(function(r,o){var a=n.apply(e,t);function u(e){s(a,r,o,u,l,"next",e)}function l(e){s(a,r,o,u,l,"throw",e)}u(void 0)})},function(e){return a.apply(this,arguments)})},{key:"render",value:function(){return this.state.codeString?r.default.createElement(w,{language:this.props.language},this.state.codeString):r.default.createElement(r.Fragment,null)}}]),t}();t.default=_,O(_,"propTypes",{language:a.default.string,raw:a.default.string,source:a.default.oneOfType([a.default.node,a.default.func]).isRequired}),O(_,"defaultProps",{language:"html",raw:""});var w=function(e){function t(){return d(this,t),y(this,b(t).apply(this,arguments))}return v(t,r.Component),m(t,[{key:"render",value:function(){return r.default.createElement(i.default,this.props)}}]),t}();t.CodeRenderer=w,O(w,"propTypes",{language:a.default.string,children:a.default.oneOfType([a.default.string,a.default.node,a.default.func]).isRequired}),O(w,"defaultProps",{language:"jsx"})},306:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(41);var r,o=(r=n(371))&&r.__esModule?r:{default:r};var a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(r){switch(t){case"html":o.default.clean(e,{indent:"  ",wrap:80,"replace-nbsp":!0,"remove-tags":[],"remove-attributes":[],"break-around-tags":n.breakAroundTags||["div","span","p","button","input","svg","path"]},function(e){return r(e)})}})};t.default=a},307:function(e,t,n){"use strict";n.r(t);var r=n(274);n.d(t,"propTypes",function(){return r.d}),n.d(t,"defaultProps",function(){return r.c}),n.d(t,"CloseButton",function(){return r.a})},372:function(e,t){},373:function(e,t){},374:function(e,t){},494:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(269),n(270),n(82),n(271);var r=f(n(0)),o=c(n(1)),a=c(n(299)),u=f(n(495)),l=c(n(496)),i=c(n(497));function c(e){return e&&e.__esModule?e:{default:e}}function f(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,y(t).apply(this,arguments))}var n,o,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r.Component),n=t,(o=[{key:"render",value:function(){return r.default.createElement(a.default,d({},t.defaultProps,this.props))}}])&&p(n.prototype,o),u&&p(n,u),t}();t.default=h,v(h,"propTypes",{title:o.default.string,id:o.default.string,InfoComponent:o.default.func,DemoComponent:o.default.func,CodeComponent:o.default.func,hideTabs:o.default.bool}),v(h,"defaultProps",{title:"FormSummary",id:"form-summary",ExampleCode:i.default,InfoComponent:l.default,DemoComponent:u.default,CodeComponent:u.Example,callback:u.Example.AdditionalCallback||null,hideTabs:!1})},495:function(e,t,n){"use strict";n.r(t),n.d(t,"Example",function(){return l});var r=n(6),o=n.n(r),a=n(0),u=n.n(a),l=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return u.a.createElement(a.Fragment,null,"Example")},t}(a.Component);t.default=function(){return u.a.createElement(l,null)}},496:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return i});var r=n(83),o=n.n(r),a=n(0),u=n.n(a),l=n(278);t.default=function(e){var t=e.components;o()(e,["components"]);return u.a.createElement(l.MDXTag,{name:"wrapper",components:t},u.a.createElement(l.MDXTag,{name:"p",components:t},"FormSummary"))};var i={component:"FormSummary",type:"element",class:"dnb-form-summary",status:"prototype",version:"0.5.0"}},497:function(e,t){e.exports=""}}]);
//# sourceMappingURL=component---src-pages-uilib-elements-form-summary-md-79949921e40616d47310.js.map