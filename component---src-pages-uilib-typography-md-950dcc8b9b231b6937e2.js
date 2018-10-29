(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{226:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(84),n(53),n(287);var r=l(n(0)),o=n(278),a=l(n(404));function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components,n=i(e,["components"]);return r.default.createElement(o.MDXTag,{name:"wrapper",Layout:function(e){var t=e.children;return r.default.createElement("div",null,t)},layoutProps:n,components:t},r.default.createElement(a.default,null))};t._frontmatter={header:"UI Library",title:"Typography",draft:!1,order:4}},299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(269),n(270),n(271),n(56);var r=n(285),o=p(n(305)),a=p(n(0)),l=n(307),i=d(n(11)),u=d(n(1)),c=d(n(369)),s=n(272),f=n(13);function d(e){return e&&e.__esModule?e:{default:e}}function p(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(){return"undefined"==typeof window?null:(0,c.default)().location},E=(0,s.css)(";.fullscreen-page &{top:0;.is-sticky .dnb-tabs__tabs{margin:0 -2rem;}}.dnb-tabs__tabs{justify-content:space-between;align-items:center;}.toggle-fullscreen{margin-right:1rem;}.dnb-modal__close-button{position:relative;top:auto;right:auto;}"),O=function(e){function t(e){var n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=b(t).call(this,e),n=!o||"object"!==m(o)&&"function"!=typeof o?g(r):o,v(g(g(n)),"state",{activeTabKey:"demo",wasFullscreen:null}),v(g(g(n)),"openTab",function(e){var t=e.key;n.setState({activeTabKey:t})}),v(g(g(n)),"openFullscreen",function(){var e=_();e&&(0,f.navigate)("".concat(e.pathname,"?fullscreen#").concat(n.state.activeTabKey))}),v(g(g(n)),"quitFullscreen",function(){var e=_();e&&(0,f.navigate)([e.pathname,e.hash].join(""))});var a=_();return a&&(n.state.wasFullscreen=/fullscreen/.test(a.search)),n}var n,u,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,a.Component),n=t,(u=[{key:"isActive",value:function(e){return this.state.activeTabKey===e}},{key:"componentWillMount",value:function(){var e=_();e&&this.setState({wasFullscreen:/fullscreen/.test(e.search)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,u=t.id,c=t.tabs,s=t.hideTabs,f=t.ExampleCode,d=t.InfoComponent,p=t.DemoComponent,m=t.CodeComponent,y=t.callback;return a.default.createElement("div",{className:"wrapped-item"},s?a.default.createElement("h4",null,a.default.createElement(i.default,{to:"/uilib/components/".concat(u)},n)):a.default.createElement("h1",null,n),!s&&a.default.createElement(r.Tabs,{data:c,on_change:this.openTab,render:function(t){var n=t.Wrapper,o=t.TabsList,i=t.Tabs;return a.default.createElement(n,{className:E},a.default.createElement(o,null,a.default.createElement("div",{className:"dnb-tabs__tabs__inner"},a.default.createElement(i,null)),e.state.wasFullscreen?a.default.createElement(l.CloseButton,{on_click:e.quitFullscreen,title:"Quit Fullscreen",className:"toggle-fullscreen"}):a.default.createElement(r.Button,{on_click:e.openFullscreen,className:"toggle-fullscreen",variant:"secondary",title:"Fullscreen",icon:"fullscreen"})))}}),this.isActive("demo")&&a.default.createElement("div",{className:"dnb-tabs__content"},a.default.createElement(p,null),y&&y.demo&&a.default.createElement(y.demo,{CodeRenderer:o.CodeRenderer})),this.isActive("info")&&a.default.createElement("div",{className:"dnb-tabs__content"},a.default.createElement(d,null),y&&y.info&&a.default.createElement(y.info,{CodeRenderer:o.CodeRenderer}),f&&a.default.createElement(a.Fragment,null,a.default.createElement("h3",null,"JSX Example"),a.default.createElement(o.CodeRenderer,{language:"jsx"},f))),this.isActive("code")&&a.default.createElement("div",{className:"dnb-tabs__content"},a.default.createElement(o.default,{source:m}),y&&y.code&&a.default.createElement(y.code,{CodeRenderer:o.CodeRenderer})))}}])&&y(n.prototype,u),c&&y(n,c),t}();v(O,"propTypes",{ExampleCode:u.default.string,InfoComponent:u.default.func.isRequired,DemoComponent:u.default.func.isRequired,CodeComponent:u.default.func.isRequired,callback:u.default.shape({demo:u.default.oneOfType([u.default.func,u.default.node]),info:u.default.oneOfType([u.default.func,u.default.node]),code:u.default.oneOfType([u.default.func,u.default.node])}),hideTabs:u.default.bool,title:u.default.string.isRequired,id:u.default.string.isRequired,tabs:u.default.array}),v(O,"defaultProps",{ExampleCode:null,hideTabs:!1,callback:null,tabs:[{title:"Demo",key:"demo"},{title:"Details",key:"info"},{title:"Markup",key:"code"}]});var w=O;t.default=w},300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(82),n(269),n(270),n(86);var r=u(n(0)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(367)),a=u(n(364)),l=n(365),i=u(n(304));function u(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e){var t=e.language,n=e.children,u=e.reactLive,f=e.className;return t||(t=((f||"").split(/-/)||[null,"jsx"])[1]),u&&"jsx"===t?(console.log("exampleCode",t,s(n)),r.default.createElement(l.LiveProvider,{code:"string"==typeof n?String(n).trim():null},r.default.createElement(l.LiveEditor,null),r.default.createElement(l.LiveError,null),r.default.createElement(l.LivePreview,null))):r.default.createElement(o.default,c({},o.defaultProps,{code:String(n).trim(),language:t,theme:a.default}),function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,l=e.getTokenProps;return r.default.createElement(i.default,{className:t,style:n,p:3},d(o).map(function(e,t){return r.default.createElement("div",a({line:e,key:t}),e.map(function(e,t){return r.default.createElement("span",l({token:e,key:t}))}))}))})};t.default=f;var d=function(e){var t=e.length;if(0===t)return e;var n=e[t-1];return 1===n.length&&n[0].empty?e.slice(0,t-1):e}},304:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(0,((r=n(366))&&r.__esModule?r:{default:r}).default)({is:"pre",m:0});o.displayName="Pre";var a=o;t.default=a},305:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CodeRenderer=t.default=void 0,n(269),n(270),n(41),n(271),n(29),n(370);var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=c(n(306)),a=c(n(1)),l=c(n(375)),i=c(n(376)),u=c(n(300));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t,n,r,o,a,l){try{var i=e[a](l),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function y(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?v(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){function t(e){var n;d(this,t),_(v(v(n=y(this,b(t).call(this,e)))),"state",{codeString:""}),_(v(v(n)),"_isMounted",!1);var o=n.props.source;return n.beautify(r.default.createElement(o,null)),n}var n,a;return h(t,r.Component),m(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.setCode()}},{key:"setCode",value:function(){this.code&&this.setState({codeString:this.props.raw+this.code}),this.code=null}},{key:"beautify",value:(n=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.props.language,e.next="html"===e.t0?3:18;break;case 3:return this.code=l.default.renderToStaticMarkup(t),this.code=this.code.replace(/data-fake:/g,""),this.code=this.code.replace(/disabled=""/g,'disabled="disabled"'),e.prev=6,e.next=9,(0,o.default)(this.code,"html");case 9:this.code=e.sent,this.code=(0,i.default)(this.code,{ocd:!0}),this._isMounted&&this.setCode(),e.next=17;break;case 14:e.prev=14,e.t1=e.catch(6),console.log("HTML Beautifier Error:",e.t1);case 17:return e.abrupt("break",18);case 18:case"end":return e.stop()}},e,this,[[6,14]])}),a=function(){var e=this,t=arguments;return new Promise(function(r,o){var a=n.apply(e,t);function l(e){f(a,r,o,l,i,"next",e)}function i(e){f(a,r,o,l,i,"throw",e)}l(void 0)})},function(e){return a.apply(this,arguments)})},{key:"render",value:function(){return this.state.codeString?r.default.createElement(O,{language:this.props.language},this.state.codeString):r.default.createElement(r.Fragment,null)}}]),t}();t.default=E,_(E,"propTypes",{language:a.default.string,raw:a.default.string,source:a.default.oneOfType([a.default.node,a.default.func]).isRequired}),_(E,"defaultProps",{language:"html",raw:""});var O=function(e){function t(){return d(this,t),y(this,b(t).apply(this,arguments))}return h(t,r.Component),m(t,[{key:"render",value:function(){return r.default.createElement(u.default,this.props)}}]),t}();t.CodeRenderer=O,_(O,"propTypes",{language:a.default.string,children:a.default.oneOfType([a.default.string,a.default.node,a.default.func]).isRequired}),_(O,"defaultProps",{language:"jsx"})},306:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(41);var r,o=(r=n(371))&&r.__esModule?r:{default:r};var a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(r){switch(t){case"html":o.default.clean(e,{indent:"  ",wrap:80,"replace-nbsp":!0,"remove-tags":[],"remove-attributes":[],"break-around-tags":n.breakAroundTags||["div","span","p","button","input","svg","path"]},function(e){return r(e)})}})};t.default=a},307:function(e,t,n){"use strict";n.r(t);var r=n(274);n.d(t,"propTypes",function(){return r.d}),n.d(t,"defaultProps",function(){return r.c}),n.d(t,"CloseButton",function(){return r.a})},372:function(e,t){},373:function(e,t){},374:function(e,t){},404:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(269),n(270),n(82),n(271);var r=s(n(0)),o=c(n(1)),a=c(n(299)),l=s(n(405)),i=c(n(406)),u=c(n(407));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,y(t).apply(this,arguments))}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r.Component),n=t,(o=[{key:"render",value:function(){return r.default.createElement(a.default,d({},t.defaultProps,this.props))}}])&&p(n.prototype,o),l&&p(n,l),t}();t.default=g,h(g,"propTypes",{title:o.default.string,id:o.default.string,InfoComponent:o.default.func,DemoComponent:o.default.func,CodeComponent:o.default.func,hideTabs:o.default.bool}),h(g,"defaultProps",{title:"Typography",id:"typography",ExampleCode:u.default,InfoComponent:i.default,DemoComponent:l.default,CodeComponent:l.Example,callback:l.Example.AdditionalCallback||null,hideTabs:!1})},405:function(e,t,n){"use strict";n.r(t),n.d(t,"Example",function(){return f});var r=n(85),o=n(6),a=n.n(o),l=n(0),i=n.n(l),u=n(1),c=n.n(u),s=n(272),f=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return i.a.createElement(l.Fragment,null,i.a.createElement("div",{className:"dnb-width-limit typography-demo"},i.a.createElement(d,{font_family:"Fedra Sans Book",typo_class:"typo-book"}),i.a.createElement(d,{font_family:"Fedra Sans Book Italic",typo_class:"typo-book-italic"}),i.a.createElement(d,{font_family:"Fedra Sans Medium",typo_class:"typo-medium"}),i.a.createElement(d,{font_family:"Fedra Sans Medium Italic",typo_class:"typo-medium-italic"}),i.a.createElement(d,{font_family:"Fedra Sans Light",typo_class:"typo-light"}),i.a.createElement(d,{font_family:"Fedra Sans Light Italic",typo_class:"typo-light-italic"}),i.a.createElement(d,{font_family:"Fedra Sans Bold",typo_class:"typo-bold"}),i.a.createElement(d,{font_family:"Fedra Sans Bold Italic",typo_class:"typo-bold-italic"})))},t}(l.Component),d=function(e){var t=e.typo_class,n=e.font_family;return i.a.createElement("div",{className:Object(s.cx)("dnb-font-family-demo",t)},i.a.createElement("h1",null,"This is the ",n),i.a.createElement("p",null,'Here is a paragraph with some nonsense lipsum text. Contrary to popular belief, Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.'),i.a.createElement("h4",null,"Here are some numbers:"),i.a.createElement("div",{className:"dnb-font-family-demo__numbers"},i.a.createElement("p",{className:"typo-number--lining"},i.a.createElement("strong",null,"Lining:")," 123456789"),i.a.createElement("p",{className:"typo-number--old-style"},i.a.createElement("strong",null,"Old style:")," 123456789")))};d.propTypes={typo_class:c.a.string,font_family:c.a.string.isRequired},d.defaultProps={typo_class:null},t.default=function(){return i.a.createElement("div",{className:Object(r.css)(Object(s.css)())},i.a.createElement(f,null))}},406:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return u});var r=n(83),o=n.n(r),a=n(0),l=n.n(a),i=n(278);t.default=function(e){var t=e.components;o()(e,["components"]);return l.a.createElement(i.MDXTag,{name:"wrapper",components:t},l.a.createElement(i.MDXTag,{name:"p",components:t},"Our default font is ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Fedra Sans Book"),". This font, together with its siblings is loaded\nand imported with ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"@font-face")," in ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"/css/core/font-import.scss"),". The font is hosted by ourselves and not currently on a CDN.\nTo make sure we don't load all of the font faces at once, we apply the font weights by using it's dedicated class prefixed with ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"typo-"),".\nFor instance, if you want a text to be ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"light")," and ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"italic"),", apply the class ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},".typo-light-italic")," where necessary."),l.a.createElement(i.MDXTag,{name:"p",components:t},"Numbers come in two variants; ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Lining")," and ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Old Style"),". Use the ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"lining")," in tables and in other contexts where lots of numbers are side-by-side.\n",l.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Old Style")," is preferred where the numbers stand alone and need to stand out."),l.a.createElement(i.MDXTag,{name:"p",components:t},"For all font weights and variants, check the source of the following examples."))};var u={component:"Typography",type:"element",class:"dnb-typography",status:"prototype",version:"0.5.0"}},407:function(e,t){e.exports='<div className="dnb-width-limit typography-demo">\n  {/* \x3c!-- Book --\x3e */}\n  <Demo font_family="Fedra Sans Book" typo_class="typo-book" />\n  <Demo\n    font_family="Fedra Sans Book Italic"\n    typo_class="typo-book-italic"\n  />\n   {/* \x3c!-- Book Medium --\x3e */}\n  <Demo font_family="Fedra Sans Medium" typo_class="typo-medium" />\n  <Demo\n    font_family="Fedra Sans Medium Italic"\n    typo_class="typo-medium-italic"\n  />\n   {/* \x3c!-- Light --\x3e */}\n  <Demo font_family="Fedra Sans Light" typo_class="typo-light" />\n  <Demo\n    font_family="Fedra Sans Light Italic"\n    typo_class="typo-light-italic"\n  />\n   {/* \x3c!-- Bold --\x3e */}\n  <Demo font_family="Fedra Sans Bold" typo_class="typo-bold" />\n  <Demo\n    font_family="Fedra Sans Bold Italic"\n    typo_class="typo-bold-italic"\n  />\n</div>\n'}}]);
//# sourceMappingURL=component---src-pages-uilib-typography-md-950dcc8b9b231b6937e2.js.map