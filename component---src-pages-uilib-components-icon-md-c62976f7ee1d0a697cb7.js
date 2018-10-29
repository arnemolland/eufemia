(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{195:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(84),n(53),n(287);var a=l(n(0)),r=n(278),o=l(n(437));function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.default=function(e){var t=e.components;i(e,["components"]);return a.default.createElement(r.MDXTag,{name:"wrapper",components:t},a.default.createElement(o.default,null))};t._frontmatter={header:"UI Library",title:"Icon",draft:!1,order:4}},299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(269),n(270),n(271),n(56);var a=n(285),r=m(n(305)),o=m(n(0)),l=n(307),i=f(n(11)),c=f(n(1)),u=f(n(369)),s=n(272),p=n(13);function f(e){return e&&e.__esModule?e:{default:e}}function m(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(){return"undefined"==typeof window?null:(0,u.default)().location},T=(0,s.css)(";.fullscreen-page &{top:0;.is-sticky .dnb-tabs__tabs{margin:0 -2rem;}}.dnb-tabs__tabs{justify-content:space-between;align-items:center;}.toggle-fullscreen{margin-right:1rem;}.dnb-modal__close-button{position:relative;top:auto;right:auto;}"),O=function(e){function t(e){var n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=y(t).call(this,e),n=!r||"object"!==d(r)&&"function"!=typeof r?h(a):r,v(h(h(n)),"state",{activeTabKey:"demo",wasFullscreen:null}),v(h(h(n)),"openTab",function(e){var t=e.key;n.setState({activeTabKey:t})}),v(h(h(n)),"openFullscreen",function(){var e=E();e&&(0,p.navigate)("".concat(e.pathname,"?fullscreen#").concat(n.state.activeTabKey))}),v(h(h(n)),"quitFullscreen",function(){var e=E();e&&(0,p.navigate)([e.pathname,e.hash].join(""))});var o=E();return o&&(n.state.wasFullscreen=/fullscreen/.test(o.search)),n}var n,c,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,o.Component),n=t,(c=[{key:"isActive",value:function(e){return this.state.activeTabKey===e}},{key:"componentWillMount",value:function(){var e=E();e&&this.setState({wasFullscreen:/fullscreen/.test(e.search)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,c=t.id,u=t.tabs,s=t.hideTabs,p=t.ExampleCode,f=t.InfoComponent,m=t.DemoComponent,d=t.CodeComponent,b=t.callback;return o.default.createElement("div",{className:"wrapped-item"},s?o.default.createElement("h4",null,o.default.createElement(i.default,{to:"/uilib/components/".concat(c)},n)):o.default.createElement("h1",null,n),!s&&o.default.createElement(a.Tabs,{data:u,on_change:this.openTab,render:function(t){var n=t.Wrapper,r=t.TabsList,i=t.Tabs;return o.default.createElement(n,{className:T},o.default.createElement(r,null,o.default.createElement("div",{className:"dnb-tabs__tabs__inner"},o.default.createElement(i,null)),e.state.wasFullscreen?o.default.createElement(l.CloseButton,{on_click:e.quitFullscreen,title:"Quit Fullscreen",className:"toggle-fullscreen"}):o.default.createElement(a.Button,{on_click:e.openFullscreen,className:"toggle-fullscreen",variant:"secondary",title:"Fullscreen",icon:"fullscreen"})))}}),this.isActive("demo")&&o.default.createElement("div",{className:"dnb-tabs__content"},o.default.createElement(m,null),b&&b.demo&&o.default.createElement(b.demo,{CodeRenderer:r.CodeRenderer})),this.isActive("info")&&o.default.createElement("div",{className:"dnb-tabs__content"},o.default.createElement(f,null),b&&b.info&&o.default.createElement(b.info,{CodeRenderer:r.CodeRenderer}),p&&o.default.createElement(o.Fragment,null,o.default.createElement("h3",null,"JSX Example"),o.default.createElement(r.CodeRenderer,{language:"jsx"},p))),this.isActive("code")&&o.default.createElement("div",{className:"dnb-tabs__content"},o.default.createElement(r.default,{source:d}),b&&b.code&&o.default.createElement(b.code,{CodeRenderer:r.CodeRenderer})))}}])&&b(n.prototype,c),u&&b(n,u),t}();v(O,"propTypes",{ExampleCode:c.default.string,InfoComponent:c.default.func.isRequired,DemoComponent:c.default.func.isRequired,CodeComponent:c.default.func.isRequired,callback:c.default.shape({demo:c.default.oneOfType([c.default.func,c.default.node]),info:c.default.oneOfType([c.default.func,c.default.node]),code:c.default.oneOfType([c.default.func,c.default.node])}),hideTabs:c.default.bool,title:c.default.string.isRequired,id:c.default.string.isRequired,tabs:c.default.array}),v(O,"defaultProps",{ExampleCode:null,hideTabs:!1,callback:null,tabs:[{title:"Demo",key:"demo"},{title:"Details",key:"info"},{title:"Markup",key:"code"}]});var _=O;t.default=_},300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(82),n(269),n(270),n(86);var a=c(n(0)),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(367)),o=c(n(364)),l=n(365),i=c(n(304));function c(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=function(e){var t=e.language,n=e.children,c=e.reactLive,p=e.className;return t||(t=((p||"").split(/-/)||[null,"jsx"])[1]),c&&"jsx"===t?(console.log("exampleCode",t,s(n)),a.default.createElement(l.LiveProvider,{code:"string"==typeof n?String(n).trim():null},a.default.createElement(l.LiveEditor,null),a.default.createElement(l.LiveError,null),a.default.createElement(l.LivePreview,null))):a.default.createElement(r.default,u({},r.defaultProps,{code:String(n).trim(),language:t,theme:o.default}),function(e){var t=e.className,n=e.style,r=e.tokens,o=e.getLineProps,l=e.getTokenProps;return a.default.createElement(i.default,{className:t,style:n,p:3},f(r).map(function(e,t){return a.default.createElement("div",o({line:e,key:t}),e.map(function(e,t){return a.default.createElement("span",l({token:e,key:t}))}))}))})};t.default=p;var f=function(e){var t=e.length;if(0===t)return e;var n=e[t-1];return 1===n.length&&n[0].empty?e.slice(0,t-1):e}},304:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,((a=n(366))&&a.__esModule?a:{default:a}).default)({is:"pre",fontSize:1,fontFamily:"mono",m:0},{overflow:"auto"},"fontFamily","space","color");r.displayName="Pre";var o=r;t.default=o},305:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CodeRenderer=t.default=void 0,n(269),n(270),n(41),n(271),n(29),n(370);var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(0)),r=u(n(306)),o=u(n(1)),l=u(n(375)),i=u(n(376)),c=u(n(300));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n,a,r,o,l){try{var i=e[o](l),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(a,r)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),e}function b(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?v(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=function(e){function t(e){var n;f(this,t),E(v(v(n=b(this,y(t).call(this,e)))),"state",{codeString:""}),E(v(v(n)),"_isMounted",!1);var r=n.props.source;return n.beautify(a.default.createElement(r,null)),n}var n,o;return g(t,a.Component),d(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.setCode()}},{key:"setCode",value:function(){this.code&&this.setState({codeString:this.props.raw+this.code}),this.code=null}},{key:"beautify",value:(n=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.props.language,e.next="html"===e.t0?3:18;break;case 3:return this.code=l.default.renderToStaticMarkup(t),this.code=this.code.replace(/data-fake:/g,""),this.code=this.code.replace(/disabled=""/g,'disabled="disabled"'),e.prev=6,e.next=9,(0,r.default)(this.code,"html");case 9:this.code=e.sent,this.code=(0,i.default)(this.code,{ocd:!0}),this._isMounted&&this.setCode(),e.next=17;break;case 14:e.prev=14,e.t1=e.catch(6),console.log("HTML Beautifier Error:",e.t1);case 17:return e.abrupt("break",18);case 18:case"end":return e.stop()}},e,this,[[6,14]])}),o=function(){var e=this,t=arguments;return new Promise(function(a,r){var o=n.apply(e,t);function l(e){p(o,a,r,l,i,"next",e)}function i(e){p(o,a,r,l,i,"throw",e)}l(void 0)})},function(e){return o.apply(this,arguments)})},{key:"render",value:function(){return this.state.codeString?a.default.createElement(O,{language:this.props.language},this.state.codeString):a.default.createElement(a.Fragment,null)}}]),t}();t.default=T,E(T,"propTypes",{language:o.default.string,raw:o.default.string,source:o.default.oneOfType([o.default.node,o.default.func]).isRequired}),E(T,"defaultProps",{language:"html",raw:""});var O=function(e){function t(){return f(this,t),b(this,y(t).apply(this,arguments))}return g(t,a.Component),d(t,[{key:"render",value:function(){return a.default.createElement(c.default,this.props)}}]),t}();t.CodeRenderer=O,E(O,"propTypes",{language:o.default.string,children:o.default.oneOfType([o.default.string,o.default.node,o.default.func]).isRequired}),E(O,"defaultProps",{language:"jsx"})},306:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(41);var a,r=(a=n(371))&&a.__esModule?a:{default:a};var o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(a){switch(t){case"html":r.default.clean(e,{indent:"  ",wrap:80,"replace-nbsp":!0,"remove-tags":[],"remove-attributes":[],"break-around-tags":n.breakAroundTags||["div","span","p","button","input","svg","path"]},function(e){return a(e)})}})};t.default=o},307:function(e,t,n){"use strict";n.r(t);var a=n(274);n.d(t,"propTypes",function(){return a.d}),n.d(t,"defaultProps",function(){return a.c}),n.d(t,"CloseButton",function(){return a.a})},372:function(e,t){},373:function(e,t){},374:function(e,t){},437:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(269),n(270),n(82),n(271);var a=s(n(0)),r=u(n(1)),o=u(n(299)),l=s(n(522)),i=u(n(438)),c=u(n(439));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,b(t).apply(this,arguments))}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,a.Component),n=t,(r=[{key:"render",value:function(){return a.default.createElement(o.default,f({},t.defaultProps,this.props))}}])&&m(n.prototype,r),l&&m(n,l),t}();t.default=h,g(h,"propTypes",{title:r.default.string,id:r.default.string,InfoComponent:r.default.func,DemoComponent:r.default.func,CodeComponent:r.default.func,hideTabs:r.default.bool}),g(h,"defaultProps",{title:"Icon",id:"icon",ExampleCode:c.default,InfoComponent:i.default,DemoComponent:l.default,CodeComponent:l.Example,callback:l.Example.AdditionalCallback||null,hideTabs:!1})},438:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c});var a=n(83),r=n.n(a),o=n(0),l=n.n(o),i=n(278);t.default=function(e){var t=e.components;r()(e,["components"]);return l.a.createElement(i.MDXTag,{name:"wrapper",components:t},l.a.createElement(i.MDXTag,{name:"p",components:t},"The main Icon component is basically only a wrapper for what ever Icon You send into it. This means a ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"span")," wrapping an inline ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"svg"),"."),l.a.createElement(i.MDXTag,{name:"h4",components:t},"More details"),l.a.createElement(i.MDXTag,{name:"p",components:t},'To make it clear that all the "often used" icons are loaded at once, we have an additional Icon component, named ',l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"IconWithAllIcons")," or ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"dnb-icon-with-all-icons"),"."),l.a.createElement(i.MDXTag,{name:"table",components:t},l.a.createElement(i.MDXTag,{name:"thead",components:t,parentName:"table"},l.a.createElement(i.MDXTag,{name:"tr",components:t,parentName:"thead"},l.a.createElement(i.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Properties"),l.a.createElement(i.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Description"))),l.a.createElement(i.MDXTag,{name:"tbody",components:t,parentName:"table"},l.a.createElement(i.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"icon")),l.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(i.MDXTag,{name:"em",components:t,parentName:"td"},"(mandatory)")," a React SVG Component or the icon name (in case we use ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"IconWithAllIcons")," or ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"dnb-icon-with-all-icons"),").")),l.a.createElement(i.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"alt")),l.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(i.MDXTag,{name:"em",components:t,parentName:"td"},"(mandatory)")," the alternative label (text version) of the icon.")),l.a.createElement(i.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"size")),l.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(i.MDXTag,{name:"em",components:t,parentName:"td"},"(optional)")," the dimension of the icon. This will be the ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"viewBox")," and represent ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"width")," and ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"height"),". Defaults to ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"16"))),l.a.createElement(i.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"color")),l.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(i.MDXTag,{name:"em",components:t,parentName:"td"},"(optional)")," sets a color property to the ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"svg")," markup. Default is no color, witch means ",l.a.createElement(i.MDXTag,{name:"em",components:t,parentName:"td"},"black"))),l.a.createElement(i.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"modifier")),l.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(i.MDXTag,{name:"em",components:t,parentName:"td"},"(optional)")," modifier class.")),l.a.createElement(i.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"attributes")),l.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(i.MDXTag,{name:"em",components:t,parentName:"td"},"(optional)")," insert any other attributes. For example ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"disabled")," or any other custom attributes.")))))};var c={component:"Icon",class:"dnb-icon",status:"ready",version:"0.5.0"}},439:function(e,t){e.exports='<IconWithAllIcons icon="question" />\n<IconWithAllIcons icon="chevron_right" width="40" height="40" />\n<Icon icon={bell} modifier="active" size="40" />\n'},522:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),o=n(0),l=n.n(o),i=n(280),c=n(276),u=(n(314),n(315));n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328);n.d(t,"Example",function(){return s});var s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement(o.Fragment,null,l.a.createElement(c.a,{icon:"question"}),l.a.createElement(c.a,{icon:"chevron_right",width:"40",height:"40"}),l.a.createElement(i.a,{icon:u.a,modifier:"active",size:"40"}))},t}(o.Component);s.AdditionalCallback={info:function(e){var t=e.CodeRenderer;return l.a.createElement(o.Fragment,null,l.a.createElement("h3",null,"Importing Icons"),l.a.createElement(t,{language:"jsx"},"\n// Named import example\nimport { bell } from './icons'\n\n// In case your environment doesn't support tree-shaking, import the icons is the following way\nimport bell from './icons/bell'\n        "))}};t.default=function(){return l.a.createElement(s,null)}}}]);
//# sourceMappingURL=component---src-pages-uilib-components-icon-md-c62976f7ee1d0a697cb7.js.map