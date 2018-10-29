(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{200:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(84),n(53),n(287);var a=l(n(0)),r=n(278),o=l(n(457));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.default=function(e){var t=e.components;u(e,["components"]);return a.default.createElement(r.MDXTag,{name:"wrapper",components:t},a.default.createElement(o.default,null))};t._frontmatter={header:"UI Library",title:"Modal",draft:!1,order:9}},299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(269),n(270),n(271),n(56);var a=n(285),r=d(n(305)),o=d(n(0)),l=n(307),u=m(n(11)),c=m(n(1)),i=m(n(369)),s=n(272),p=n(13);function m(e){return e&&e.__esModule?e:{default:e}}function d(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(){return"undefined"==typeof window?null:(0,i.default)().location},_=(0,s.css)(";.fullscreen-page &{top:0;.is-sticky .dnb-tabs__tabs{margin:0 -2rem;}}.dnb-tabs__tabs{justify-content:space-between;align-items:center;}.toggle-fullscreen{margin-right:1rem;}.dnb-modal__close-button{position:relative;top:auto;right:auto;}"),T=function(e){function t(e){var n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=g(t).call(this,e),n=!r||"object"!==f(r)&&"function"!=typeof r?h(a):r,v(h(h(n)),"state",{activeTabKey:"demo",wasFullscreen:null}),v(h(h(n)),"openTab",function(e){var t=e.key;n.setState({activeTabKey:t})}),v(h(h(n)),"openFullscreen",function(){var e=E();e&&(0,p.navigate)("".concat(e.pathname,"?fullscreen#").concat(n.state.activeTabKey))}),v(h(h(n)),"quitFullscreen",function(){var e=E();e&&(0,p.navigate)([e.pathname,e.hash].join(""))});var o=E();return o&&(n.state.wasFullscreen=/fullscreen/.test(o.search)),n}var n,c,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o.Component),n=t,(c=[{key:"isActive",value:function(e){return this.state.activeTabKey===e}},{key:"componentWillMount",value:function(){var e=E();e&&this.setState({wasFullscreen:/fullscreen/.test(e.search)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,c=t.id,i=t.tabs,s=t.hideTabs,p=t.ExampleCode,m=t.InfoComponent,d=t.DemoComponent,f=t.CodeComponent,b=t.callback;return o.default.createElement("div",{className:"wrapped-item"},s?o.default.createElement("h4",null,o.default.createElement(u.default,{to:"/uilib/components/".concat(c)},n)):o.default.createElement("h1",null,n),!s&&o.default.createElement(a.Tabs,{data:i,on_change:this.openTab,render:function(t){var n=t.Wrapper,r=t.TabsList,u=t.Tabs;return o.default.createElement(n,{className:_},o.default.createElement(r,null,o.default.createElement("div",{className:"dnb-tabs__tabs__inner"},o.default.createElement(u,null)),e.state.wasFullscreen?o.default.createElement(l.CloseButton,{on_click:e.quitFullscreen,title:"Quit Fullscreen",className:"toggle-fullscreen"}):o.default.createElement(a.Button,{on_click:e.openFullscreen,className:"toggle-fullscreen",variant:"secondary",title:"Fullscreen",icon:"fullscreen"})))}}),this.isActive("demo")&&o.default.createElement("div",{className:"dnb-tabs__content"},o.default.createElement(d,null),b&&b.demo&&o.default.createElement(b.demo,{CodeRenderer:r.CodeRenderer})),this.isActive("info")&&o.default.createElement("div",{className:"dnb-tabs__content"},o.default.createElement(m,null),b&&b.info&&o.default.createElement(b.info,{CodeRenderer:r.CodeRenderer}),p&&o.default.createElement(o.Fragment,null,o.default.createElement("h3",null,"JSX Example"),o.default.createElement(r.CodeRenderer,{language:"jsx"},p))),this.isActive("code")&&o.default.createElement("div",{className:"dnb-tabs__content"},o.default.createElement(r.default,{source:f}),b&&b.code&&o.default.createElement(b.code,{CodeRenderer:r.CodeRenderer})))}}])&&b(n.prototype,c),i&&b(n,i),t}();v(T,"propTypes",{ExampleCode:c.default.string,InfoComponent:c.default.func.isRequired,DemoComponent:c.default.func.isRequired,CodeComponent:c.default.func.isRequired,callback:c.default.shape({demo:c.default.oneOfType([c.default.func,c.default.node]),info:c.default.oneOfType([c.default.func,c.default.node]),code:c.default.oneOfType([c.default.func,c.default.node])}),hideTabs:c.default.bool,title:c.default.string.isRequired,id:c.default.string.isRequired,tabs:c.default.array}),v(T,"defaultProps",{ExampleCode:null,hideTabs:!1,callback:null,tabs:[{title:"Demo",key:"demo"},{title:"Details",key:"info"},{title:"Markup",key:"code"}]});var O=T;t.default=O},300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(82),n(269),n(270),n(86);var a=c(n(0)),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(367)),o=c(n(364)),l=n(365),u=c(n(304));function c(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=function(e){var t=e.language,n=e.children,c=e.reactLive,p=e.className;return t||(t=((p||"").split(/-/)||[null,"jsx"])[1]),c&&"jsx"===t?(console.log("exampleCode",t,s(n)),a.default.createElement(l.LiveProvider,{code:"string"==typeof n?String(n).trim():null},a.default.createElement(l.LiveEditor,null),a.default.createElement(l.LiveError,null),a.default.createElement(l.LivePreview,null))):a.default.createElement(r.default,i({},r.defaultProps,{code:String(n).trim(),language:t,theme:o.default}),function(e){var t=e.className,n=e.style,r=e.tokens,o=e.getLineProps,l=e.getTokenProps;return a.default.createElement(u.default,{className:t,style:n,p:3},m(r).map(function(e,t){return a.default.createElement("div",o({line:e,key:t}),e.map(function(e,t){return a.default.createElement("span",l({token:e,key:t}))}))}))})};t.default=p;var m=function(e){var t=e.length;if(0===t)return e;var n=e[t-1];return 1===n.length&&n[0].empty?e.slice(0,t-1):e}},304:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,((a=n(366))&&a.__esModule?a:{default:a}).default)({is:"pre",m:0});r.displayName="Pre";var o=r;t.default=o},305:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CodeRenderer=t.default=void 0,n(269),n(270),n(41),n(271),n(29),n(370);var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(0)),r=i(n(306)),o=i(n(1)),l=i(n(375)),u=i(n(376)),c=i(n(300));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n,a,r,o,l){try{var u=e[o](l),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(a,r)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function b(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?v(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(e){function t(e){var n;m(this,t),E(v(v(n=b(this,g(t).call(this,e)))),"state",{codeString:""}),E(v(v(n)),"_isMounted",!1);var r=n.props.source;return n.beautify(a.default.createElement(r,null)),n}var n,o;return y(t,a.Component),f(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.setCode()}},{key:"setCode",value:function(){this.code&&this.setState({codeString:this.props.raw+this.code}),this.code=null}},{key:"beautify",value:(n=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.props.language,e.next="html"===e.t0?3:18;break;case 3:return this.code=l.default.renderToStaticMarkup(t),this.code=this.code.replace(/data-fake:/g,""),this.code=this.code.replace(/disabled=""/g,'disabled="disabled"'),e.prev=6,e.next=9,(0,r.default)(this.code,"html");case 9:this.code=e.sent,this.code=(0,u.default)(this.code,{ocd:!0}),this._isMounted&&this.setCode(),e.next=17;break;case 14:e.prev=14,e.t1=e.catch(6),console.log("HTML Beautifier Error:",e.t1);case 17:return e.abrupt("break",18);case 18:case"end":return e.stop()}},e,this,[[6,14]])}),o=function(){var e=this,t=arguments;return new Promise(function(a,r){var o=n.apply(e,t);function l(e){p(o,a,r,l,u,"next",e)}function u(e){p(o,a,r,l,u,"throw",e)}l(void 0)})},function(e){return o.apply(this,arguments)})},{key:"render",value:function(){return this.state.codeString?a.default.createElement(T,{language:this.props.language},this.state.codeString):a.default.createElement(a.Fragment,null)}}]),t}();t.default=_,E(_,"propTypes",{language:o.default.string,raw:o.default.string,source:o.default.oneOfType([o.default.node,o.default.func]).isRequired}),E(_,"defaultProps",{language:"html",raw:""});var T=function(e){function t(){return m(this,t),b(this,g(t).apply(this,arguments))}return y(t,a.Component),f(t,[{key:"render",value:function(){return a.default.createElement(c.default,this.props)}}]),t}();t.CodeRenderer=T,E(T,"propTypes",{language:o.default.string,children:o.default.oneOfType([o.default.string,o.default.node,o.default.func]).isRequired}),E(T,"defaultProps",{language:"jsx"})},306:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(41);var a,r=(a=n(371))&&a.__esModule?a:{default:a};var o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(a){switch(t){case"html":r.default.clean(e,{indent:"  ",wrap:80,"replace-nbsp":!0,"remove-tags":[],"remove-attributes":[],"break-around-tags":n.breakAroundTags||["div","span","p","button","input","svg","path"]},function(e){return a(e)})}})};t.default=o},307:function(e,t,n){"use strict";n.r(t);var a=n(274);n.d(t,"propTypes",function(){return a.d}),n.d(t,"defaultProps",function(){return a.c}),n.d(t,"CloseButton",function(){return a.a})},372:function(e,t){},373:function(e,t){},374:function(e,t){},457:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(269),n(270),n(82),n(271);var a=s(n(0)),r=i(n(1)),o=i(n(299)),l=s(n(458)),u=i(n(459)),c=i(n(460));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,b(t).apply(this,arguments))}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,a.Component),n=t,(r=[{key:"render",value:function(){return a.default.createElement(o.default,m({},t.defaultProps,this.props))}}])&&d(n.prototype,r),l&&d(n,l),t}();t.default=h,y(h,"propTypes",{title:r.default.string,id:r.default.string,InfoComponent:r.default.func,DemoComponent:r.default.func,CodeComponent:r.default.func,hideTabs:r.default.bool}),y(h,"defaultProps",{title:"Modal",id:"modal",ExampleCode:c.default,InfoComponent:u.default,DemoComponent:l.default,CodeComponent:l.Example,callback:l.Example.AdditionalCallback||null,hideTabs:!1})},458:function(e,t,n){"use strict";n.r(t),n.d(t,"Example",function(){return i});var a=n(6),r=n.n(a),o=n(0),l=n.n(o),u=n(275),c=n(274),i=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement(o.Fragment,null,l.a.createElement(c.b,{type:"text",modal_trigger_text:"click me",modal_content:"This is the modal text. Triggered by text."}),l.a.createElement(c.b,{type:"button",modal_trigger_title:"click me",modal_content:function(){return l.a.createElement("strong",null,"This is the modal text. Triggered by a button.")}}),l.a.createElement(c.b,{title:"Hello",type:"button",modal_trigger_text:"click me"},l.a.createElement("h2",null,"Some content"),l.a.createElement(u.a,null,"Focus me with Tab key")))},t}(o.Component);i.AdditionalCallback={info:function(e){var t=e.CodeRenderer;return l.a.createElement(o.Fragment,null,l.a.createElement("h3",null,"Root Element Example"),l.a.createElement(t,{language:"html"},'\n<body>\n  <div id="app" />\n  <div id="dnb-modal-root" />\n</body>\n      '))}},t.default=function(){return l.a.createElement(i,null)}},459:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c});var a=n(83),r=n.n(a),o=n(0),l=n.n(o),u=n(278);t.default=function(e){var t=e.components;r()(e,["components"]);return l.a.createElement(u.MDXTag,{name:"wrapper",components:t},l.a.createElement(u.MDXTag,{name:"p",components:t},"The modal can be triggered from either a text element or a button. It will open up a modal with the helping text."),l.a.createElement(u.MDXTag,{name:"h4",components:t},"Root Element"),l.a.createElement(u.MDXTag,{name:"p",components:t},"To make sure the HTML structure is decoupled from all the page content, You can define a kins of wrapper div like ",l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"p"},'<div class="dnb-modal-root" />'),". Just place this as a sibling of Your App root HTML element."),l.a.createElement(u.MDXTag,{name:"table",components:t},l.a.createElement(u.MDXTag,{name:"thead",components:t,parentName:"table"},l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"thead"},l.a.createElement(u.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Properties"),l.a.createElement(u.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Description"))),l.a.createElement(u.MDXTag,{name:"tbody",components:t,parentName:"table"},l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"type")),l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"em",components:t,parentName:"td"},"(mandatory)")," the modal triggering element. Choose between ",l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"button")," or ",l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"text"))),l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"modal_trigger_text")),l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"em",components:t,parentName:"td"},"(mandatory)")," if type is set to ",l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"text"),", this will be the text which triggers the modal. If set to ",l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"button")," it will be the ",l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"title")," attribute of the button.")),l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"modal_text")),l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"em",components:t,parentName:"td"},"(mandatory)")," the text which will appear when triggering the modal.")),l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"content_id")),l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"em",components:t,parentName:"td"},"(optional)")," The")))),l.a.createElement(u.MDXTag,{name:"table",components:t},l.a.createElement(u.MDXTag,{name:"thead",components:t,parentName:"table"},l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"thead"},l.a.createElement(u.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Events"),l.a.createElement(u.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Description"))),l.a.createElement(u.MDXTag,{name:"tbody",components:t,parentName:"table"},l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"on_open")),l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"em",components:t,parentName:"td"},"(optional)")," this event gets triggered once the modal shows up")),l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"on_close")),l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"em",components:t,parentName:"td"},"(optional)")," this event gets triggered one the modal gets closed")))))};var c={component:"Modal",type:"component",class:"dnb-modal",status:"prototype",version:"0.5.0"}},460:function(e,t){e.exports='<Modal\n  type="text"\n  modal_trigger_text="click me"\n  modal_content="This is the modal text. Triggered by text."\n/>\n<Modal\n  type="button"\n  modal_trigger_title="click me"\n  modal_content={() => (\n    <strong>This is the modal text. Triggered by a button.</strong>\n  )}\n/>\n<Modal title="Hello" type="button" modal_trigger_text="click me">\n  <h2>Some content</h2>\n  <Input>Focus me with Tab key</Input>\n</Modal>\n'}}]);
//# sourceMappingURL=component---src-pages-uilib-components-modal-md-c0c82596029f3c2e09b2.js.map