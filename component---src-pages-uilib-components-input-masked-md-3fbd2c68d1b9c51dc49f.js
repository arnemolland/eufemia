(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{196:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(84),n(53),n(287);var r=l(n(0)),a=n(278),o=l(n(444));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.default=function(e){var t=e.components;u(e,["components"]);return r.default.createElement(a.MDXTag,{name:"wrapper",components:t},r.default.createElement(o.default,null))};t._frontmatter={header:"UI Library",title:"InputMasked",draft:!0,order:5}},299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(269),n(270),n(271),n(56);var r=n(285),a=p(n(305)),o=p(n(0)),l=n(307),u=d(n(11)),i=d(n(1)),c=d(n(369)),s=n(272),f=n(13);function d(e){return e&&e.__esModule?e:{default:e}}function p(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(){return"undefined"==typeof window?null:(0,c.default)().location},O=(0,s.css)(";.fullscreen-page &{top:0;.is-sticky .dnb-tabs__tabs{margin:0 -2rem;}}.dnb-tabs__tabs{justify-content:space-between;align-items:center;}.toggle-fullscreen{margin-right:1rem;}.dnb-modal__close-button{position:relative;top:auto;right:auto;}"),E=function(e){function t(e){var n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=y(t).call(this,e),n=!a||"object"!==m(a)&&"function"!=typeof a?g(r):a,v(g(g(n)),"state",{activeTabKey:"demo",wasFullscreen:null}),v(g(g(n)),"openTab",function(e){var t=e.key;n.setState({activeTabKey:t})}),v(g(g(n)),"openFullscreen",function(){var e=_();e&&(0,f.navigate)("".concat(e.pathname,"?fullscreen#").concat(n.state.activeTabKey))}),v(g(g(n)),"quitFullscreen",function(){var e=_();e&&(0,f.navigate)([e.pathname,e.hash].join(""))});var o=_();return o&&(n.state.wasFullscreen=/fullscreen/.test(o.search)),n}var n,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,o.Component),n=t,(i=[{key:"isActive",value:function(e){return this.state.activeTabKey===e}},{key:"componentWillMount",value:function(){var e=_();e&&this.setState({wasFullscreen:/fullscreen/.test(e.search)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,i=t.id,c=t.tabs,s=t.hideTabs,f=t.ExampleCode,d=t.InfoComponent,p=t.DemoComponent,m=t.CodeComponent,b=t.callback;return o.default.createElement("div",{className:"wrapped-item"},s?o.default.createElement("h4",null,o.default.createElement(u.default,{to:"/uilib/components/".concat(i)},n)):o.default.createElement("h1",null,n),!s&&o.default.createElement(r.Tabs,{data:c,on_change:this.openTab,render:function(t){var n=t.Wrapper,a=t.TabsList,u=t.Tabs;return o.default.createElement(n,{className:O},o.default.createElement(a,null,o.default.createElement("div",{className:"dnb-tabs__tabs__inner"},o.default.createElement(u,null)),e.state.wasFullscreen?o.default.createElement(l.CloseButton,{on_click:e.quitFullscreen,title:"Quit Fullscreen",className:"toggle-fullscreen"}):o.default.createElement(r.Button,{on_click:e.openFullscreen,className:"toggle-fullscreen",variant:"secondary",title:"Fullscreen",icon:"fullscreen"})))}}),this.isActive("demo")&&o.default.createElement("div",{className:"dnb-tabs__content"},o.default.createElement(p,null),b&&b.demo&&o.default.createElement(b.demo,{CodeRenderer:a.CodeRenderer})),this.isActive("info")&&o.default.createElement("div",{className:"dnb-tabs__content"},o.default.createElement(d,null),b&&b.info&&o.default.createElement(b.info,{CodeRenderer:a.CodeRenderer}),f&&o.default.createElement(o.Fragment,null,o.default.createElement("h3",null,"JSX Example"),o.default.createElement(a.CodeRenderer,{language:"jsx"},f))),this.isActive("code")&&o.default.createElement("div",{className:"dnb-tabs__content"},o.default.createElement(a.default,{source:m}),b&&b.code&&o.default.createElement(b.code,{CodeRenderer:a.CodeRenderer})))}}])&&b(n.prototype,i),c&&b(n,c),t}();v(E,"propTypes",{ExampleCode:i.default.string,InfoComponent:i.default.func.isRequired,DemoComponent:i.default.func.isRequired,CodeComponent:i.default.func.isRequired,callback:i.default.shape({demo:i.default.oneOfType([i.default.func,i.default.node]),info:i.default.oneOfType([i.default.func,i.default.node]),code:i.default.oneOfType([i.default.func,i.default.node])}),hideTabs:i.default.bool,title:i.default.string.isRequired,id:i.default.string.isRequired,tabs:i.default.array}),v(E,"defaultProps",{ExampleCode:null,hideTabs:!1,callback:null,tabs:[{title:"Demo",key:"demo"},{title:"Details",key:"info"},{title:"Markup",key:"code"}]});var w=E;t.default=w},300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(82),n(269),n(270),n(86);var r=i(n(0)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(367)),o=i(n(364)),l=n(365),u=i(n(304));function i(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e){var t=e.language,n=e.children,i=e.reactLive,f=e.className;return t||(t=((f||"").split(/-/)||[null,"jsx"])[1]),i&&"jsx"===t?(console.log("exampleCode",t,s(n)),r.default.createElement(l.LiveProvider,{code:"string"==typeof n?String(n).trim():null},r.default.createElement(l.LiveEditor,null),r.default.createElement(l.LiveError,null),r.default.createElement(l.LivePreview,null))):r.default.createElement(a.default,c({},a.defaultProps,{code:String(n).trim(),language:t,theme:o.default}),function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,l=e.getTokenProps;return r.default.createElement(u.default,{className:t,style:n,p:3},d(a).map(function(e,t){return r.default.createElement("div",o({line:e,key:t}),e.map(function(e,t){return r.default.createElement("span",l({token:e,key:t}))}))}))})};t.default=f;var d=function(e){var t=e.length;if(0===t)return e;var n=e[t-1];return 1===n.length&&n[0].empty?e.slice(0,t-1):e}},304:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,((r=n(366))&&r.__esModule?r:{default:r}).default)({is:"pre",m:0});a.displayName="Pre";var o=a;t.default=o},305:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CodeRenderer=t.default=void 0,n(269),n(270),n(41),n(271),n(29),n(370);var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=c(n(306)),o=c(n(1)),l=c(n(375)),u=c(n(376)),i=c(n(300));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t,n,r,a,o,l){try{var u=e[o](l),i=u.value}catch(e){return void n(e)}u.done?t(i):Promise.resolve(i).then(r,a)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function b(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?v(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){function t(e){var n;d(this,t),_(v(v(n=b(this,y(t).call(this,e)))),"state",{codeString:""}),_(v(v(n)),"_isMounted",!1);var a=n.props.source;return n.beautify(r.default.createElement(a,null)),n}var n,o;return h(t,r.Component),m(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.setCode()}},{key:"setCode",value:function(){this.code&&this.setState({codeString:this.props.raw+this.code}),this.code=null}},{key:"beautify",value:(n=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.props.language,e.next="html"===e.t0?3:18;break;case 3:return this.code=l.default.renderToStaticMarkup(t),this.code=this.code.replace(/data-fake:/g,""),this.code=this.code.replace(/disabled=""/g,'disabled="disabled"'),e.prev=6,e.next=9,(0,a.default)(this.code,"html");case 9:this.code=e.sent,this.code=(0,u.default)(this.code,{ocd:!0}),this._isMounted&&this.setCode(),e.next=17;break;case 14:e.prev=14,e.t1=e.catch(6),console.log("HTML Beautifier Error:",e.t1);case 17:return e.abrupt("break",18);case 18:case"end":return e.stop()}},e,this,[[6,14]])}),o=function(){var e=this,t=arguments;return new Promise(function(r,a){var o=n.apply(e,t);function l(e){f(o,r,a,l,u,"next",e)}function u(e){f(o,r,a,l,u,"throw",e)}l(void 0)})},function(e){return o.apply(this,arguments)})},{key:"render",value:function(){return this.state.codeString?r.default.createElement(E,{language:this.props.language},this.state.codeString):r.default.createElement(r.Fragment,null)}}]),t}();t.default=O,_(O,"propTypes",{language:o.default.string,raw:o.default.string,source:o.default.oneOfType([o.default.node,o.default.func]).isRequired}),_(O,"defaultProps",{language:"html",raw:""});var E=function(e){function t(){return d(this,t),b(this,y(t).apply(this,arguments))}return h(t,r.Component),m(t,[{key:"render",value:function(){return r.default.createElement(i.default,this.props)}}]),t}();t.CodeRenderer=E,_(E,"propTypes",{language:o.default.string,children:o.default.oneOfType([o.default.string,o.default.node,o.default.func]).isRequired}),_(E,"defaultProps",{language:"jsx"})},306:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(41);var r,a=(r=n(371))&&r.__esModule?r:{default:r};var o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(r){switch(t){case"html":a.default.clean(e,{indent:"  ",wrap:80,"replace-nbsp":!0,"remove-tags":[],"remove-attributes":[],"break-around-tags":n.breakAroundTags||["div","span","p","button","input","svg","path"]},function(e){return r(e)})}})};t.default=o},307:function(e,t,n){"use strict";n.r(t);var r=n(274);n.d(t,"propTypes",function(){return r.d}),n.d(t,"defaultProps",function(){return r.c}),n.d(t,"CloseButton",function(){return r.a})},372:function(e,t){},373:function(e,t){},374:function(e,t){},444:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(269),n(270),n(82),n(271);var r=s(n(0)),a=c(n(1)),o=c(n(299)),l=s(n(445)),u=c(n(447)),i=c(n(448));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,b(t).apply(this,arguments))}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.Component),n=t,(a=[{key:"render",value:function(){return r.default.createElement(o.default,d({},t.defaultProps,this.props))}}])&&p(n.prototype,a),l&&p(n,l),t}();t.default=g,h(g,"propTypes",{title:a.default.string,id:a.default.string,InfoComponent:a.default.func,DemoComponent:a.default.func,CodeComponent:a.default.func,hideTabs:a.default.bool}),h(g,"defaultProps",{title:"InputMasked",id:"input-masked",ExampleCode:i.default,InfoComponent:u.default,DemoComponent:l.default,CodeComponent:l.Example,callback:l.Example.AdditionalCallback||null,hideTabs:!1})},445:function(e,t,n){"use strict";n.r(t),n.d(t,"Example",function(){return d});var r=n(85),a=n(6),o=n.n(a),l=n(0),u=n.n(l),i=n(289),c=n(272),s=n(446),f=n.n(s)()({allowDecimal:!1,prefix:"",suffix:" kr."}),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleInputMaskedChange=function(e){var t=e.value;console.log(t)},n._ref=u.a.createRef(),n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;if(this.setState({icon:"chevron-right"}),this._ref.current.addEvent){i.a.enableWebComponent();var t=this._ref.current.addEvent("on_change",function(e){console.log("on_change",e)});setTimeout(function(){e._ref.current.fireEvent("on_change",{value:"Hello from an auto fired event with a new value. But the event listener gets removed in 2 seconds."}),setTimeout(function(){e._ref.current.removeEvent(t)},2e3)},2e3)}},n.render=function(){return u.a.createElement(l.Fragment,null,u.a.createElement(i.a,{mask:["(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],show_mask:"true",attributes:{"data-fake:show_mask":"true"},ref:this._ref}),u.a.createElement(i.a,{id:"text-input-masked-large",autocomplete:"off",size:"large",mask:f,align:"right",placeholder:"Enter an amount",on_change:this.handleInputMaskedChange}),u.a.createElement(i.a,{id:"text-input-masked-large",autocomplete:"off",size:"large",value:"1000000",mask:f,show_mask:"true",align:"right",on_change:this.handleInputMaskedChange}))},t}(l.Component);t.default=function(){return u.a.createElement("div",{className:Object(r.css)(Object(c.css)("display:block;width:100%;.dnb-input{margin:1rem 0;}"))},u.a.createElement(d,null))}},446:function(e,t,n){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(2)},,function(e,t){"use strict";function n(e){return e.split(o).map(function(e){return d.test(e)?d:e})}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=e.length;if(e===o||e[0]===b[0]&&1===t)return b.split(o).concat([d]).concat(h.split(o));if(e===j&&w)return b.split(o).concat(["0",j,d]).concat(h.split(o));var a=e[0]===i&&D;a&&(e=e.toString().substr(1));var l=e.lastIndexOf(j),u=-1!==l,m=void 0,y=void 0,g=void 0;if(e.slice(-1*F)===h&&(e=e.slice(0,-1*F)),u&&(w||C)?(m=e.slice(e.slice(0,I)===b?I:0,l),y=n((y=e.slice(l+1,t)).replace(s,o))):m=e.slice(0,I)===b?e.slice(I):e,X&&(void 0===X?"undefined":r(X))===f){var _="."===O?"[.]":""+O,E=(m.match(new RegExp(_,"g"))||[]).length;m=m.slice(0,X+E*L)}return m=m.replace(s,o),N||(m=m.replace(/^0+(0$|[^0])/,"$1")),m=v?function(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}(m,O):m,g=n(m),(u&&w||!0===C)&&(e[l-1]!==j&&g.push(p),g.push(j,p),y&&((void 0===M?"undefined":r(M))===f&&(y=y.slice(0,M)),g=g.concat(y)),!0===C&&e[l-1]===j&&g.push(d)),I>0&&(g=b.split(o).concat(g)),a&&(g.length===I&&g.push(d),g=[c].concat(g)),h.length>0&&(g=g.concat(h.split(o))),g}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},m=t.prefix,b=void 0===m?a:m,y=t.suffix,h=void 0===y?o:y,g=t.includeThousandsSeparator,v=void 0===g||g,_=t.thousandsSeparatorSymbol,O=void 0===_?l:_,E=t.allowDecimal,w=void 0!==E&&E,k=t.decimalSymbol,j=void 0===k?u:k,P=t.decimalLimit,M=void 0===P?2:P,T=t.requireDecimal,C=void 0!==T&&T,S=t.allowNegative,D=void 0!==S&&S,x=t.allowLeadingZeroes,N=void 0!==x&&x,R=t.integerLimit,X=void 0===R?null:R,I=b&&b.length||0,F=h&&h.length||0,L=O&&O.length||0;return e.instanceOf="createNumberMask",e};var a="$",o="",l=",",u=".",i="-",c=/-/,s=/\D+/g,f="number",d=/\d/,p="[]"}])},447:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return i});var r=n(83),a=n.n(r),o=n(0),l=n.n(o),u=n(278);t.default=function(e){var t=e.components;a()(e,["components"]);return l.a.createElement(u.MDXTag,{name:"wrapper",components:t},l.a.createElement(u.MDXTag,{name:"p",components:t},"The masked input component uses the DNB original input component, but with some additional masking functionality. Read more about the details ",l.a.createElement(u.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"github.com/sanniassin/react-input-mask"}},"on the open source project"),"."),l.a.createElement(u.MDXTag,{name:"p",components:t},l.a.createElement(u.MDXTag,{name:"strong",components:t,parentName:"p"},"TODO:"),' This is an experimental component and should be tested more before using it in production (thinking of e.g. DerivedStateFromProps, or that the "mask" prop uses a function or RegExp, so there has to be build in a special type of JSON parser).'),l.a.createElement(u.MDXTag,{name:"table",components:t},l.a.createElement(u.MDXTag,{name:"thead",components:t,parentName:"table"},l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"thead"},l.a.createElement(u.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Properties"),l.a.createElement(u.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Description"))),l.a.createElement(u.MDXTag,{name:"tbody",components:t,parentName:"table"},l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"mask")),l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"em",components:t,parentName:"td"},"(mandatory)")," The mask prop, defined with a RegExp style of of characters or a callback function. Se ",l.a.createElement(u.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"https://github.com/eggsdesign/dnb-design-system/tree/master/packages/dnb-ui-lib/src/components/input-masked/Example.js"}},"example"),".")),l.a.createElement(u.MDXTag,{name:"tr",components:t,parentName:"tbody"},l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"show_mask")),l.a.createElement(u.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},l.a.createElement(u.MDXTag,{name:"em",components:t,parentName:"td"},"(optional)")," Show mask when input is empty and has no focus.")))))};var i={component:"InputMasked",status:"prototype",version:"0.5.0"}},448:function(e,t){e.exports='<InputMasked\n  mask={[\n    "(",\n    /[1-9]/,\n    /\\d/,\n    /\\d/,\n    ")",\n    " ",\n    /\\d/,\n    /\\d/,\n    /\\d/,\n    "-",\n    /\\d/,\n    /\\d/,\n    /\\d/,\n    /\\d/\n  ]}\n  show_mask="true"\n  ref={this._ref}\n/>\n <InputMasked\n  id="text-input-masked-large"\n  autocomplete="off"\n  size="large"\n  mask={numberMask}\n  align="right"\n  placeholder="Enter an amount"\n  on_change={this.handleInputMaskedChange}\n/>\n <InputMasked\n  id="text-input-masked-large"\n  autocomplete="off"\n  size="large"\n  value="1000000"\n  mask={numberMask}\n  show_mask="true"\n  align="right"\n  on_change={this.handleInputMaskedChange}\n/>\n'}}]);
//# sourceMappingURL=component---src-pages-uilib-components-input-masked-md-3fbd2c68d1b9c51dc49f.js.map