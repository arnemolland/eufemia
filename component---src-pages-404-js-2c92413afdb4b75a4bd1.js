(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{158:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(269),r(270),r(271);var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),o=a(r(1)),i=a(r(272));function a(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,d,y,h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,u(t).apply(this,arguments))}var r,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,n.Component),r=t,(o=[{key:"render",value:function(){var e=this.props.location.pathname;return n.default.createElement(m,{className:"dnb-body"},n.default.createElement(g,null,n.default.createElement("h1",null,"404"),n.default.createElement("h2",null,"We couldn't find that page:"),n.default.createElement("p",null,"There's not a page at ",n.default.createElement("code",null,e))))}}])&&c(r.prototype,o),i&&c(r,i),t}();t.default=h,p=h,d="propTypes",y={location:o.default.object.isRequired},d in p?Object.defineProperty(p,d,{value:y,enumerable:!0,configurable:!0,writable:!0}):p[d]=y;var m=(0,i.default)("div",{target:"e48k2y70"})("display:flex;justify-content:center;align-items:center;height:100vh;"),g=(0,i.default)("div",{target:"e48k2y71"})("width:60vw;text-align:center;padding-bottom:4rem;")},269:function(e,t,r){r(391)("asyncIterator")},270:function(e,t,r){"use strict";var n=r(5),o=r(32),i=r(20),a=r(7),s=r(22),c=r(395).KEY,l=r(19),u=r(61),f=r(47),p=r(45),d=r(4),y=r(392),h=r(391),m=r(396),g=r(97),b=r(12),v=r(14),_=r(44),O=r(96),w=r(59),k=r(60),S=r(397),x=r(394),P=r(31),j=r(43),E=x.f,T=P.f,C=S.f,N=n.Symbol,R=n.JSON,M=R&&R.stringify,A=d("_hidden"),F=d("toPrimitive"),L={}.propertyIsEnumerable,I=u("symbol-registry"),D=u("symbols"),z=u("op-symbols"),H=Object.prototype,U="function"==typeof N,W=n.QObject,q=!W||!W.prototype||!W.prototype.findChild,B=i&&l(function(){return 7!=k(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(e,t,r){var n=E(H,t);n&&delete H[t],T(e,t,r),n&&e!==H&&T(H,t,n)}:T,X=function(e){var t=D[e]=k(N.prototype);return t._k=e,t},Y=U&&"symbol"==typeof N.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof N},G=function(e,t,r){return e===H&&G(z,t,r),b(e),t=O(t,!0),b(r),o(D,t)?(r.enumerable?(o(e,A)&&e[A][t]&&(e[A][t]=!1),r=k(r,{enumerable:w(0,!1)})):(o(e,A)||T(e,A,w(1,{})),e[A][t]=!0),B(e,t,r)):T(e,t,r)},J=function(e,t){b(e);for(var r,n=m(t=_(t)),o=0,i=n.length;i>o;)G(e,r=n[o++],t[r]);return e},V=function(e){var t=L.call(this,e=O(e,!0));return!(this===H&&o(D,e)&&!o(z,e))&&(!(t||!o(this,e)||!o(D,e)||o(this,A)&&this[A][e])||t)},K=function(e,t){if(e=_(e),t=O(t,!0),e!==H||!o(D,t)||o(z,t)){var r=E(e,t);return!r||!o(D,t)||o(e,A)&&e[A][t]||(r.enumerable=!0),r}},Z=function(e){for(var t,r=C(_(e)),n=[],i=0;r.length>i;)o(D,t=r[i++])||t==A||t==c||n.push(t);return n},Q=function(e){for(var t,r=e===H,n=C(r?z:_(e)),i=[],a=0;n.length>a;)!o(D,t=n[a++])||r&&!o(H,t)||i.push(D[t]);return i};U||(s((N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(r){this===H&&t.call(z,r),o(this,A)&&o(this[A],e)&&(this[A][e]=!1),B(this,e,w(1,r))};return i&&q&&B(H,e,{configurable:!0,set:t}),X(e)}).prototype,"toString",function(){return this._k}),x.f=K,P.f=G,r(393).f=S.f=Z,r(94).f=V,r(95).f=Q,i&&!r(46)&&s(H,"propertyIsEnumerable",V,!0),y.f=function(e){return X(d(e))}),a(a.G+a.W+a.F*!U,{Symbol:N});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;$.length>ee;)d($[ee++]);for(var te=j(d.store),re=0;te.length>re;)h(te[re++]);a(a.S+a.F*!U,"Symbol",{for:function(e){return o(I,e+="")?I[e]:I[e]=N(e)},keyFor:function(e){if(!Y(e))throw TypeError(e+" is not a symbol!");for(var t in I)if(I[t]===e)return t},useSetter:function(){q=!0},useSimple:function(){q=!1}}),a(a.S+a.F*!U,"Object",{create:function(e,t){return void 0===t?k(e):J(k(e),t)},defineProperty:G,defineProperties:J,getOwnPropertyDescriptor:K,getOwnPropertyNames:Z,getOwnPropertySymbols:Q}),R&&a(a.S+a.F*(!U||l(function(){var e=N();return"[null]"!=M([e])||"{}"!=M({a:e})||"{}"!=M(Object(e))})),"JSON",{stringify:function(e){for(var t,r,n=[e],o=1;arguments.length>o;)n.push(arguments[o++]);if(r=t=n[1],(v(t)||void 0!==e)&&!Y(e))return g(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!Y(t))return t}),n[1]=t,M.apply(R,n)}}),N.prototype[F]||r(15)(N.prototype,F,N.prototype.valueOf),f(N,"Symbol"),f(Math,"Math",!0),f(n.JSON,"JSON",!0)},271:function(e,t,r){var n=r(7);n(n.S,"Object",{setPrototypeOf:r(398).set})},272:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=r(85),a=r(1),s=r.n(a),c=r(63),l=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria|x)-.*))$/i,u=Object(c.a)(l.test.bind(l));var f,p="__EMOTION_THEMING__",d=((f={})[p]=s.a.object,f);var y=u,h=function(e){return"theme"!==e&&"innerRef"!==e},m=function(){return!0},g=function(e,t){for(var r=2,n=arguments.length;r<n;r++){var o=arguments[r],i=void 0;for(i in o)e(i)&&(t[i]=o[i])}return t};var b=function(e,t){var r=function(n,o){var i,a,s,c;void 0!==o&&(i=o.e,a=o.label,s=o.target,c=n.__emotion_forwardProp&&o.shouldForwardProp?function(e){return n.__emotion_forwardProp(e)&&o.shouldForwardProp(e)}:o.shouldForwardProp);var l=n.__emotion_real===n,u=void 0===i&&l&&n.__emotion_base||n;return"function"!=typeof c&&(c="string"==typeof u&&u.charAt(0)===u.charAt(0).toLowerCase()?y:h),function(){var f=arguments,y=l&&void 0!==n.__emotion_styles?n.__emotion_styles.slice(0):[];if(void 0!==a&&y.push("label:"+a+";"),void 0===i)if(null==f[0]||void 0===f[0].raw)y.push.apply(y,f);else{y.push(f[0][0]);for(var h=f.length,b=1;b<h;b++)y.push(f[b],f[0][b])}var v=function(r){var n,o;function a(){return r.apply(this,arguments)||this}o=r,(n=a).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o;var l=a.prototype;return l.componentWillMount=function(){void 0!==this.context[p]&&(this.unsubscribe=this.context[p].subscribe(function(e){this.setState({theme:e})}.bind(this)))},l.componentWillUnmount=function(){void 0!==this.unsubscribe&&this.context[p].unsubscribe(this.unsubscribe)},l.render=function(){var r=this.props,n=this.state;this.mergedProps=g(m,{},r,{theme:null!==n&&n.theme||r.theme||{}});var o="",a=[];return r.className&&(o+=void 0===i?e.getRegisteredStyles(a,r.className):r.className+" "),o+=void 0===i?e.css.apply(this,y.concat(a)):i,void 0!==s&&(o+=" "+s),t.createElement(u,g(c,{},r,{className:o,ref:r.innerRef}))},a}(t.Component);return v.displayName=void 0!==a?a:"Styled("+("string"==typeof u?u:u.displayName||u.name||"Component")+")",void 0!==n.defaultProps&&(v.defaultProps=n.defaultProps),v.contextTypes=d,v.__emotion_styles=y,v.__emotion_base=u,v.__emotion_real=v,v.__emotion_forwardProp=c,Object.defineProperty(v,"toString",{value:function(){return"."+s}}),v.withComponent=function(e,t){return r(e,void 0!==t?g(m,{},o,t):o).apply(void 0,y)},v}};return r};r.d(t,"flush",function(){return i.flush}),r.d(t,"hydrate",function(){return i.hydrate}),r.d(t,"cx",function(){return i.cx}),r.d(t,"merge",function(){return i.merge}),r.d(t,"getRegisteredStyles",function(){return i.getRegisteredStyles}),r.d(t,"injectGlobal",function(){return i.injectGlobal}),r.d(t,"keyframes",function(){return i.keyframes}),r.d(t,"css",function(){return i.css}),r.d(t,"sheet",function(){return i.sheet}),r.d(t,"caches",function(){return i.caches});var v=b(i,o.a);t.default=v},391:function(e,t,r){var n=r(5),o=r(21),i=r(46),a=r(392),s=r(31).f;e.exports=function(e){var t=o.Symbol||(o.Symbol=i?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:a.f(e)})}},392:function(e,t,r){t.f=r(4)},393:function(e,t,r){var n=r(99),o=r(62).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},394:function(e,t,r){var n=r(94),o=r(59),i=r(44),a=r(96),s=r(32),c=r(98),l=Object.getOwnPropertyDescriptor;t.f=r(20)?l:function(e,t){if(e=i(e),t=a(t,!0),c)try{return l(e,t)}catch(e){}if(s(e,t))return o(!n.f.call(e,t),e[t])}},395:function(e,t,r){var n=r(45)("meta"),o=r(14),i=r(32),a=r(31).f,s=0,c=Object.isExtensible||function(){return!0},l=!r(19)(function(){return c(Object.preventExtensions({}))}),u=function(e){a(e,n,{value:{i:"O"+ ++s,w:{}}})},f=e.exports={KEY:n,NEED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,n)){if(!c(e))return"F";if(!t)return"E";u(e)}return e[n].i},getWeak:function(e,t){if(!i(e,n)){if(!c(e))return!0;if(!t)return!1;u(e)}return e[n].w},onFreeze:function(e){return l&&f.NEED&&c(e)&&!i(e,n)&&u(e),e}}},396:function(e,t,r){var n=r(43),o=r(95),i=r(94);e.exports=function(e){var t=n(e),r=o.f;if(r)for(var a,s=r(e),c=i.f,l=0;s.length>l;)c.call(e,a=s[l++])&&t.push(a);return t}},397:function(e,t,r){var n=r(44),o=r(393).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return a&&"[object Window]"==i.call(e)?function(e){try{return o(e)}catch(e){return a.slice()}}(e):o(n(e))}},398:function(e,t,r){var n=r(14),o=r(12),i=function(e,t){if(o(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=r(24)(Function.call,r(394).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,r){return i(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:i}}}]);
//# sourceMappingURL=component---src-pages-404-js-2c92413afdb4b75a4bd1.js.map