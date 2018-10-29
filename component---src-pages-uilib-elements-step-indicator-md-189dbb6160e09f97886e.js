(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{215:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(84),n(53),n(287);var a=l(n(0)),r=n(278),o=l(n(510));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.default=function(e){var t=e.components;u(e,["components"]);return a.default.createElement(r.MDXTag,{name:"wrapper",components:t},a.default.createElement(o.default,null))};t._frontmatter={header:"UI Library",title:"StepIndicator",draft:!1,order:0}},299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(269),n(270),n(271),n(56);var a=n(285),r=m(n(305)),o=m(n(0)),l=n(307),u=f(n(11)),i=f(n(1)),c=f(n(369)),s=n(272),p=n(13);function f(e){return e&&e.__esModule?e:{default:e}}function m(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(){return"undefined"==typeof window?null:(0,c.default)().location},_=(0,s.css)(";.fullscreen-page &{top:0;.is-sticky .dnb-tabs__tabs{margin:0 -2rem;}}.dnb-tabs__tabs{justify-content:space-between;align-items:center;}.toggle-fullscreen{margin-right:1rem;}.dnb-modal__close-button{position:relative;top:auto;right:auto;}"),O=function(e){function t(e){var n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=b(t).call(this,e),n=!r||"object"!==d(r)&&"function"!=typeof r?h(a):r,v(h(h(n)),"state",{activeTabKey:"demo",wasFullscreen:null}),v(h(h(n)),"openTab",function(e){var t=e.key;n.setState({activeTabKey:t})}),v(h(h(n)),"openFullscreen",function(){var e=E();e&&(0,p.navigate)("".concat(e.pathname,"?fullscreen#").concat(n.state.activeTabKey))}),v(h(h(n)),"quitFullscreen",function(){var e=E();e&&(0,p.navigate)([e.pathname,e.hash].join(""))});var o=E();return o&&(n.state.wasFullscreen=/fullscreen/.test(o.search)),n}var n,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,o.Component),n=t,(i=[{key:"isActive",value:function(e){return this.state.activeTabKey===e}},{key:"componentWillMount",value:function(){var e=E();e&&this.setState({wasFullscreen:/fullscreen/.test(e.search)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,i=t.id,c=t.tabs,s=t.hideTabs,p=t.ExampleCode,f=t.InfoComponent,m=t.DemoComponent,d=t.CodeComponent,y=t.callback;return o.default.createElement("div",{className:"wrapped-item"},s?o.default.createElement("h4",null,o.default.createElement(u.default,{to:"/uilib/components/".concat(i)},n)):o.default.createElement("h1",null,n),!s&&o.default.createElement(a.Tabs,{data:c,on_change:this.openTab,render:function(t){var n=t.Wrapper,r=t.TabsList,u=t.Tabs;return o.default.createElement(n,{className:_},o.default.createElement(r,null,o.default.createElement("div",{className:"dnb-tabs__tabs__inner"},o.default.createElement(u,null)),e.state.wasFullscreen?o.default.createElement(l.CloseButton,{on_click:e.quitFullscreen,title:"Quit Fullscreen",className:"toggle-fullscreen"}):o.default.createElement(a.Button,{on_click:e.openFullscreen,className:"toggle-fullscreen",variant:"secondary",title:"Fullscreen",icon:"fullscreen"})))}}),this.isActive("demo")&&o.default.createElement("div",{className:"dnb-tabs__content"},o.default.createElement(m,null),y&&y.demo&&o.default.createElement(y.demo,{CodeRenderer:r.CodeRenderer})),this.isActive("info")&&o.default.createElement("div",{className:"dnb-tabs__content"},o.default.createElement(f,null),y&&y.info&&o.default.createElement(y.info,{CodeRenderer:r.CodeRenderer}),p&&o.default.createElement(o.Fragment,null,o.default.createElement("h3",null,"JSX Example"),o.default.createElement(r.CodeRenderer,{language:"jsx"},p))),this.isActive("code")&&o.default.createElement("div",{className:"dnb-tabs__content"},o.default.createElement(r.default,{source:d}),y&&y.code&&o.default.createElement(y.code,{CodeRenderer:r.CodeRenderer})))}}])&&y(n.prototype,i),c&&y(n,c),t}();v(O,"propTypes",{ExampleCode:i.default.string,InfoComponent:i.default.func.isRequired,DemoComponent:i.default.func.isRequired,CodeComponent:i.default.func.isRequired,callback:i.default.shape({demo:i.default.oneOfType([i.default.func,i.default.node]),info:i.default.oneOfType([i.default.func,i.default.node]),code:i.default.oneOfType([i.default.func,i.default.node])}),hideTabs:i.default.bool,title:i.default.string.isRequired,id:i.default.string.isRequired,tabs:i.default.array}),v(O,"defaultProps",{ExampleCode:null,hideTabs:!1,callback:null,tabs:[{title:"Demo",key:"demo"},{title:"Details",key:"info"},{title:"Markup",key:"code"}]});var T=O;t.default=T},300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(82),n(269),n(270),n(86);var a=i(n(0)),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(367)),o=i(n(364)),l=n(365),u=i(n(304));function i(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=function(e){var t=e.language,n=e.children,i=e.reactLive,p=e.className;return t||(t=((p||"").split(/-/)||[null,"jsx"])[1]),i&&"jsx"===t?(console.log("exampleCode",t,s(n)),a.default.createElement(l.LiveProvider,{code:"string"==typeof n?String(n).trim():null},a.default.createElement(l.LiveEditor,null),a.default.createElement(l.LiveError,null),a.default.createElement(l.LivePreview,null))):a.default.createElement(r.default,c({},r.defaultProps,{code:String(n).trim(),language:t,theme:o.default}),function(e){var t=e.className,n=e.style,r=e.tokens,o=e.getLineProps,l=e.getTokenProps;return a.default.createElement(u.default,{className:t,style:n,p:3},f(r).map(function(e,t){return a.default.createElement("div",o({line:e,key:t}),e.map(function(e,t){return a.default.createElement("span",l({token:e,key:t}))}))}))})};t.default=p;var f=function(e){var t=e.length;if(0===t)return e;var n=e[t-1];return 1===n.length&&n[0].empty?e.slice(0,t-1):e}},304:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,((a=n(366))&&a.__esModule?a:{default:a}).default)({is:"pre",m:0});r.displayName="Pre";var o=r;t.default=o},305:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CodeRenderer=t.default=void 0,n(269),n(270),n(41),n(271),n(29),n(370);var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(0)),r=c(n(306)),o=c(n(1)),l=c(n(375)),u=c(n(376)),i=c(n(300));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n,a,r,o,l){try{var u=e[o](l),i=u.value}catch(e){return void n(e)}u.done?t(i):Promise.resolve(i).then(a,r)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),e}function y(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?v(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(e){function t(e){var n;f(this,t),E(v(v(n=y(this,b(t).call(this,e)))),"state",{codeString:""}),E(v(v(n)),"_isMounted",!1);var r=n.props.source;return n.beautify(a.default.createElement(r,null)),n}var n,o;return g(t,a.Component),d(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.setCode()}},{key:"setCode",value:function(){this.code&&this.setState({codeString:this.props.raw+this.code}),this.code=null}},{key:"beautify",value:(n=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.props.language,e.next="html"===e.t0?3:18;break;case 3:return this.code=l.default.renderToStaticMarkup(t),this.code=this.code.replace(/data-fake:/g,""),this.code=this.code.replace(/disabled=""/g,'disabled="disabled"'),e.prev=6,e.next=9,(0,r.default)(this.code,"html");case 9:this.code=e.sent,this.code=(0,u.default)(this.code,{ocd:!0}),this._isMounted&&this.setCode(),e.next=17;break;case 14:e.prev=14,e.t1=e.catch(6),console.log("HTML Beautifier Error:",e.t1);case 17:return e.abrupt("break",18);case 18:case"end":return e.stop()}},e,this,[[6,14]])}),o=function(){var e=this,t=arguments;return new Promise(function(a,r){var o=n.apply(e,t);function l(e){p(o,a,r,l,u,"next",e)}function u(e){p(o,a,r,l,u,"throw",e)}l(void 0)})},function(e){return o.apply(this,arguments)})},{key:"render",value:function(){return this.state.codeString?a.default.createElement(O,{language:this.props.language},this.state.codeString):a.default.createElement(a.Fragment,null)}}]),t}();t.default=_,E(_,"propTypes",{language:o.default.string,raw:o.default.string,source:o.default.oneOfType([o.default.node,o.default.func]).isRequired}),E(_,"defaultProps",{language:"html",raw:""});var O=function(e){function t(){return f(this,t),y(this,b(t).apply(this,arguments))}return g(t,a.Component),d(t,[{key:"render",value:function(){return a.default.createElement(i.default,this.props)}}]),t}();t.CodeRenderer=O,E(O,"propTypes",{language:o.default.string,children:o.default.oneOfType([o.default.string,o.default.node,o.default.func]).isRequired}),E(O,"defaultProps",{language:"jsx"})},306:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(41);var a,r=(a=n(371))&&a.__esModule?a:{default:a};var o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(a){switch(t){case"html":r.default.clean(e,{indent:"  ",wrap:80,"replace-nbsp":!0,"remove-tags":[],"remove-attributes":[],"break-around-tags":n.breakAroundTags||["div","span","p","button","input","svg","path"]},function(e){return a(e)})}})};t.default=o},307:function(e,t,n){"use strict";n.r(t);var a=n(274);n.d(t,"propTypes",function(){return a.d}),n.d(t,"defaultProps",function(){return a.c}),n.d(t,"CloseButton",function(){return a.a})},372:function(e,t){},373:function(e,t){},374:function(e,t){},510:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(269),n(270),n(82),n(271);var a=s(n(0)),r=c(n(1)),o=c(n(299)),l=s(n(511)),u=c(n(512)),i=c(n(513));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,y(t).apply(this,arguments))}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,a.Component),n=t,(r=[{key:"render",value:function(){return a.default.createElement(o.default,f({},t.defaultProps,this.props))}}])&&m(n.prototype,r),l&&m(n,l),t}();t.default=h,g(h,"propTypes",{title:r.default.string,id:r.default.string,InfoComponent:r.default.func,DemoComponent:r.default.func,CodeComponent:r.default.func,hideTabs:r.default.bool}),g(h,"defaultProps",{title:"StepIndicator",id:"step-indicator",ExampleCode:i.default,InfoComponent:u.default,DemoComponent:l.default,CodeComponent:l.Example,callback:l.Example.AdditionalCallback||null,hideTabs:!1})},511:function(e,t,n){"use strict";n.r(t),n.d(t,"Example",function(){return s});n(56);var a=n(6),r=n.n(a),o=n(0),l=n.n(o),u=n(296),i=n(369),c=n.n(i),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={active_url:null},n.onChangeHandler=function(e){e.event.preventDefault(),n.history&&n.history.push(e.item.url)},"undefined"!=typeof window&&(n.history=c()(),n.state={active_url:n.history.location.search}),n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.unlisten=this.history&&this.history.listen(function(t){var n=t.search;e.setState({active_url:n})})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return l.a.createElement(o.Fragment,null,l.a.createElement(u.a,{active_item:"2",active_url:this.state.active_url,data:p,on_change:this.onChangeHandler}))},t}(o.Component);s.AdditionalCallback={info:function(e){var t=e.CodeRenderer;return l.a.createElement(o.Fragment,null,l.a.createElement("h4",null,"Data Structure"),l.a.createElement(t,{language:"json"},p))}};var p=JSON.stringify([{title:"Om din nye bolig",url:"?a"},{title:"Ditt lån og egenkapital",url:"?b"},{title:"Oppsummering",url:"?c",url_future:""}],null,2);t.default=function(){return l.a.createElement(s,null)}},512:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return i});var a=n(83),r=n.n(a),o=n(0),l=n.n(o),u=n(278);t.default=function(e){var t=e.components;r()(e,["components"]);return l.a.createElement(u.MDXTag,{name:"wrapper",components:t},l.a.createElement(u.MDXTag,{name:"p",components:t},"The breadcrumb component is a pagination component - not a navigation.\nIn this example we've sent the component an array of objects to simulate a scenario in a web application.\nPreviously visited pages will be clickable ",l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"anchor links")," and unvisited/unlocked items are simply unclickable ",l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"spans"),".\n",l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"activeItem")," is the active indicator."),l.a.createElement(u.MDXTag,{name:"table",components:t},l.a.createElement(u.MDXTag,{name:"thead",components:t,parentName:"table"},l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"thead"},l.a.createElement(u.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Properties"),l.a.createElement(u.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Description"))),l.a.createElement(u.MDXTag,{name:"tbody",components:t,parentName:"table"},l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"data")),l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"em",components:t,parentName:"td"},"(mandatory)")," defines the data/steps showing up in a json format like ",l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"[{title,url}]"))),l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"active_item")),l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"em",components:t,parentName:"td"},"(mandatory)")," defines the as active marked step")),l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"show_numbers")),l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"em",components:t,parentName:"td"},"(optional)")," define whether to show automatically counted numbers or not. Defaults to ",l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"true"))))),l.a.createElement(u.MDXTag,{name:"table",components:t},l.a.createElement(u.MDXTag,{name:"thead",components:t,parentName:"table"},l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"thead"},l.a.createElement(u.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Data Parameters"),l.a.createElement(u.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Description"))),l.a.createElement(u.MDXTag,{name:"tbody",components:t,parentName:"table"},l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"title")),l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"em",components:t,parentName:"td"},"(mandatory)")," the title showing on every step")),l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"url")),l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"em",components:t,parentName:"td"},"(optional)")," sets the url, showing on every step, if not ",l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"url_future")," is set")),l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"url_future")),l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"em",components:t,parentName:"td"},"(optional)")," sets the url, showing only on the future steps. Can be used to ",l.a.createElement(u.MDXTag,{name:"em",components:t,parentName:"td"},"reset")," the future steps individually")),l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"url_passed")),l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"em",components:t,parentName:"td"},"(optional)")," sets the url, showing only on the passed steps. Can be used to ",l.a.createElement(u.MDXTag,{name:"em",components:t,parentName:"td"},"reset")," the passed steps individually")))))};var i={component:"StepIndicator",type:"element",class:"dnb-step-indicator",status:"prototype",version:"0.5.0"}},513:function(e,t){e.exports='<StepIndicator\n  active_item="2"\n  active_url={this.state.active_url}\n  data={dataBlob}\n  on_change={this.onChangeHandler}\n/>\n'}}]);
//# sourceMappingURL=component---src-pages-uilib-elements-step-indicator-md-189dbb6160e09f97886e.js.map