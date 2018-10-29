(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{219:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(84),n(53),n(287);var r=l(n(0)),o=n(278),a=l(n(518));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components;u(e,["components"]);return r.default.createElement(o.MDXTag,{name:"wrapper",components:t},r.default.createElement(a.default,null))};t._frontmatter={header:"UI Library",title:"ViewTitle",draft:!1,order:0}},299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(269),n(270),n(271),n(56);var r=n(285),o=d(n(305)),a=d(n(0)),l=n(307),u=p(n(11)),i=p(n(1)),c=p(n(369)),s=n(272),f=n(13);function p(e){return e&&e.__esModule?e:{default:e}}function d(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(){return"undefined"==typeof window?null:(0,c.default)().location},E=(0,s.css)(";.fullscreen-page &{top:0;.is-sticky .dnb-tabs__tabs{margin:0 -2rem;}}.dnb-tabs__tabs{justify-content:space-between;align-items:center;}.toggle-fullscreen{margin-right:1rem;}.dnb-modal__close-button{position:relative;top:auto;right:auto;}"),_=function(e){function t(e){var n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=b(t).call(this,e),n=!o||"object"!==m(o)&&"function"!=typeof o?g(r):o,h(g(g(n)),"state",{activeTabKey:"demo",wasFullscreen:null}),h(g(g(n)),"openTab",function(e){var t=e.key;n.setState({activeTabKey:t})}),h(g(g(n)),"openFullscreen",function(){var e=O();e&&(0,f.navigate)("".concat(e.pathname,"?fullscreen#").concat(n.state.activeTabKey))}),h(g(g(n)),"quitFullscreen",function(){var e=O();e&&(0,f.navigate)([e.pathname,e.hash].join(""))});var a=O();return a&&(n.state.wasFullscreen=/fullscreen/.test(a.search)),n}var n,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,a.Component),n=t,(i=[{key:"isActive",value:function(e){return this.state.activeTabKey===e}},{key:"componentWillMount",value:function(){var e=O();e&&this.setState({wasFullscreen:/fullscreen/.test(e.search)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,i=t.id,c=t.tabs,s=t.hideTabs,f=t.ExampleCode,p=t.InfoComponent,d=t.DemoComponent,m=t.CodeComponent,y=t.callback;return a.default.createElement("div",{className:"wrapped-item"},s?a.default.createElement("h4",null,a.default.createElement(u.default,{to:"/uilib/components/".concat(i)},n)):a.default.createElement("h1",null,n),!s&&a.default.createElement(r.Tabs,{data:c,on_change:this.openTab,render:function(t){var n=t.Wrapper,o=t.TabsList,u=t.Tabs;return a.default.createElement(n,{className:E},a.default.createElement(o,null,a.default.createElement("div",{className:"dnb-tabs__tabs__inner"},a.default.createElement(u,null)),e.state.wasFullscreen?a.default.createElement(l.CloseButton,{on_click:e.quitFullscreen,title:"Quit Fullscreen",className:"toggle-fullscreen"}):a.default.createElement(r.Button,{on_click:e.openFullscreen,className:"toggle-fullscreen",variant:"secondary",title:"Fullscreen",icon:"fullscreen"})))}}),this.isActive("demo")&&a.default.createElement("div",{className:"dnb-tabs__content"},a.default.createElement(d,null),y&&y.demo&&a.default.createElement(y.demo,{CodeRenderer:o.CodeRenderer})),this.isActive("info")&&a.default.createElement("div",{className:"dnb-tabs__content"},a.default.createElement(p,null),y&&y.info&&a.default.createElement(y.info,{CodeRenderer:o.CodeRenderer}),f&&a.default.createElement(a.Fragment,null,a.default.createElement("h3",null,"JSX Example"),a.default.createElement(o.CodeRenderer,{language:"jsx"},f))),this.isActive("code")&&a.default.createElement("div",{className:"dnb-tabs__content"},a.default.createElement(o.default,{source:m}),y&&y.code&&a.default.createElement(y.code,{CodeRenderer:o.CodeRenderer})))}}])&&y(n.prototype,i),c&&y(n,c),t}();h(_,"propTypes",{ExampleCode:i.default.string,InfoComponent:i.default.func.isRequired,DemoComponent:i.default.func.isRequired,CodeComponent:i.default.func.isRequired,callback:i.default.shape({demo:i.default.oneOfType([i.default.func,i.default.node]),info:i.default.oneOfType([i.default.func,i.default.node]),code:i.default.oneOfType([i.default.func,i.default.node])}),hideTabs:i.default.bool,title:i.default.string.isRequired,id:i.default.string.isRequired,tabs:i.default.array}),h(_,"defaultProps",{ExampleCode:null,hideTabs:!1,callback:null,tabs:[{title:"Demo",key:"demo"},{title:"Details",key:"info"},{title:"Markup",key:"code"}]});var w=_;t.default=w},300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(82),n(269),n(270),n(86);var r=i(n(0)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(367)),a=i(n(364)),l=n(365),u=i(n(304));function i(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e){var t=e.language,n=e.children,i=e.reactLive,f=e.className;return t||(t=((f||"").split(/-/)||[null,"jsx"])[1]),i&&"jsx"===t?(console.log("exampleCode",t,s(n)),r.default.createElement(l.LiveProvider,{code:"string"==typeof n?String(n).trim():null},r.default.createElement(l.LiveEditor,null),r.default.createElement(l.LiveError,null),r.default.createElement(l.LivePreview,null))):r.default.createElement(o.default,c({},o.defaultProps,{code:String(n).trim(),language:t,theme:a.default}),function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,l=e.getTokenProps;return r.default.createElement(u.default,{className:t,style:n,p:3},p(o).map(function(e,t){return r.default.createElement("div",a({line:e,key:t}),e.map(function(e,t){return r.default.createElement("span",l({token:e,key:t}))}))}))})};t.default=f;var p=function(e){var t=e.length;if(0===t)return e;var n=e[t-1];return 1===n.length&&n[0].empty?e.slice(0,t-1):e}},304:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(0,((r=n(366))&&r.__esModule?r:{default:r}).default)({is:"pre",m:0});o.displayName="Pre";var a=o;t.default=a},305:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CodeRenderer=t.default=void 0,n(269),n(270),n(41),n(271),n(29),n(370);var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=c(n(306)),a=c(n(1)),l=c(n(375)),u=c(n(376)),i=c(n(300));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t,n,r,o,a,l){try{var u=e[a](l),i=u.value}catch(e){return void n(e)}u.done?t(i):Promise.resolve(i).then(r,o)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function y(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?h(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){function t(e){var n;p(this,t),O(h(h(n=y(this,b(t).call(this,e)))),"state",{codeString:""}),O(h(h(n)),"_isMounted",!1);var o=n.props.source;return n.beautify(r.default.createElement(o,null)),n}var n,a;return v(t,r.Component),m(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.setCode()}},{key:"setCode",value:function(){this.code&&this.setState({codeString:this.props.raw+this.code}),this.code=null}},{key:"beautify",value:(n=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.props.language,e.next="html"===e.t0?3:18;break;case 3:return this.code=l.default.renderToStaticMarkup(t),this.code=this.code.replace(/data-fake:/g,""),this.code=this.code.replace(/disabled=""/g,'disabled="disabled"'),e.prev=6,e.next=9,(0,o.default)(this.code,"html");case 9:this.code=e.sent,this.code=(0,u.default)(this.code,{ocd:!0}),this._isMounted&&this.setCode(),e.next=17;break;case 14:e.prev=14,e.t1=e.catch(6),console.log("HTML Beautifier Error:",e.t1);case 17:return e.abrupt("break",18);case 18:case"end":return e.stop()}},e,this,[[6,14]])}),a=function(){var e=this,t=arguments;return new Promise(function(r,o){var a=n.apply(e,t);function l(e){f(a,r,o,l,u,"next",e)}function u(e){f(a,r,o,l,u,"throw",e)}l(void 0)})},function(e){return a.apply(this,arguments)})},{key:"render",value:function(){return this.state.codeString?r.default.createElement(_,{language:this.props.language},this.state.codeString):r.default.createElement(r.Fragment,null)}}]),t}();t.default=E,O(E,"propTypes",{language:a.default.string,raw:a.default.string,source:a.default.oneOfType([a.default.node,a.default.func]).isRequired}),O(E,"defaultProps",{language:"html",raw:""});var _=function(e){function t(){return p(this,t),y(this,b(t).apply(this,arguments))}return v(t,r.Component),m(t,[{key:"render",value:function(){return r.default.createElement(i.default,this.props)}}]),t}();t.CodeRenderer=_,O(_,"propTypes",{language:a.default.string,children:a.default.oneOfType([a.default.string,a.default.node,a.default.func]).isRequired}),O(_,"defaultProps",{language:"jsx"})},306:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(41);var r,o=(r=n(371))&&r.__esModule?r:{default:r};var a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(r){switch(t){case"html":o.default.clean(e,{indent:"  ",wrap:80,"replace-nbsp":!0,"remove-tags":[],"remove-attributes":[],"break-around-tags":n.breakAroundTags||["div","span","p","button","input","svg","path"]},function(e){return r(e)})}})};t.default=a},307:function(e,t,n){"use strict";n.r(t);var r=n(274);n.d(t,"propTypes",function(){return r.d}),n.d(t,"defaultProps",function(){return r.c}),n.d(t,"CloseButton",function(){return r.a})},372:function(e,t){},373:function(e,t){},374:function(e,t){},518:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(269),n(270),n(82),n(271);var r=s(n(0)),o=c(n(1)),a=c(n(299)),l=s(n(519)),u=c(n(520)),i=c(n(521));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,y(t).apply(this,arguments))}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r.Component),n=t,(o=[{key:"render",value:function(){return r.default.createElement(a.default,p({},t.defaultProps,this.props))}}])&&d(n.prototype,o),l&&d(n,l),t}();t.default=g,v(g,"propTypes",{title:o.default.string,id:o.default.string,InfoComponent:o.default.func,DemoComponent:o.default.func,CodeComponent:o.default.func,hideTabs:o.default.bool}),v(g,"defaultProps",{title:"ViewTitle",id:"view-title",ExampleCode:i.default,InfoComponent:u.default,DemoComponent:l.default,CodeComponent:l.Example,callback:l.Example.AdditionalCallback||null,hideTabs:!1})},519:function(e,t,n){"use strict";n.r(t),n.d(t,"Example",function(){return i});var r=n(6),o=n.n(r),a=n(0),l=n.n(a),u=n(298),i=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return l.a.createElement(a.Fragment,null,l.a.createElement(u.a,null,"This is the default view title component"),l.a.createElement(u.a,{text:"This is the small version",tag:"h3"}))},t}(a.Component);t.default=function(){return l.a.createElement(i,null)}},520:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return i});var r=n(83),o=n.n(r),a=n(0),l=n.n(a),u=n(278);t.default=function(e){var t=e.components;o()(e,["components"]);return l.a.createElement(u.MDXTag,{name:"wrapper",components:t},l.a.createElement(u.MDXTag,{name:"p",components:t},"The line title component is a heading variant with borders on both sides. It is commonly used as a ",l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"legend")," in form fieldsets."),l.a.createElement(u.MDXTag,{name:"table",components:t},l.a.createElement(u.MDXTag,{name:"thead",components:t,parentName:"table"},l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"thead"},l.a.createElement(u.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Properties"),l.a.createElement(u.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Description"))),l.a.createElement(u.MDXTag,{name:"tbody",components:t,parentName:"table"},l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"modifier")),l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"em",components:t,parentName:"td"},"(optional)")," any extra modifying class.")),l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"content")),l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"em",components:t,parentName:"td"},"(mandatory)")," the content of the title component.")),l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"tag")),l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"em",components:t,parentName:"td"},"(mandatory)")," the wrapping tag of the component. For semantics and accessibility's sake.")))))};var i={component:"ViewTitle",type:"element",class:"dnb-view-title",status:"prototype",version:"0.5.0"}},521:function(e,t){e.exports='<ViewTitle>This is the default view title component</ViewTitle>\n<ViewTitle text="This is the small version" tag="h3" />\n'}}]);
//# sourceMappingURL=component---src-pages-uilib-elements-view-title-md-a73b2b152f00cc23d7df.js.map