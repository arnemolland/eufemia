(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1192:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return r}),n.d(t,"default",function(){return c});n(16),n(15),n(20),n(19),n(18),n(22),n(4),n(5);var a=n(0),l=(n(30),n(27),n(270));function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var r={title:"CSS Styles",draft:!1,order:1},m={_frontmatter:r},o="wrapper";function c(e){var t=e.components,n=s(e,["components"]);return Object(a.mdx)(o,i({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("h1",null,"CSS Styles"),Object(a.mdx)("p",null,"To ensure flexibility and the possibility of ",Object(a.mdx)("a",i({parentName:"p"},{href:"/uilib/usage/customisation/theming"}),"theming"),", the DNB CSS Styles area built in a bottom up manner."),Object(a.mdx)("p",null,"The styles are decoupled from the functional ",Object(a.mdx)("a",i({parentName:"p"},{href:"/uilib/components"}),"components"),".\nThere are several packages you can use and combine."),Object(a.mdx)("h2",null,"Main Packages"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"dnb-ui-core")," - Includes the ",Object(a.mdx)("em",{parentName:"li"},"DNB Main Styles")," like ",Object(a.mdx)("a",i({parentName:"li"},{href:"/uilib/helper-classes"}),"helper classes"),", font loader, colors and a over-all reset (normalize)."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"dnb-theme-ui")," - Includes ",Object(a.mdx)("a",i({parentName:"li"},{href:"/uilib/elements"}),"optional class selectors for elements"),", ",Object(a.mdx)("a",i({parentName:"li"},{href:"#spacing"}),"optional default spacing"),", ",Object(a.mdx)("a",i({parentName:"li"},{href:"/uilib/typography"}),"default typography")," as well as a theme for every ",Object(a.mdx)("a",i({parentName:"li"},{href:"/uilib/components"}),"component"),"."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"dnb-ui-components")," - Includes all the basic layout styles for the ",Object(a.mdx)("a",i({parentName:"li"},{href:"/uilib/components"}),"components"),"."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"dnb-ui-patterns")," - Includes all the styles (and themes) for ",Object(a.mdx)("a",i({parentName:"li"},{href:"/uilib/patterns"}),"patterns")," (not shown in the ",Object(a.mdx)("a",i({parentName:"li"},{href:"#css-structure-diagram"}),"Diagram"),").")),Object(a.mdx)("h2",null,"Sub Packages"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"dnb-ui-body")," - includes the default body style and a CSS reset (normalize)."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"dnb-ui-basis")," - includes everything from ",Object(a.mdx)("inlineCode",{parentName:"li"},"dnb-ui-core"),", except ",Object(a.mdx)("inlineCode",{parentName:"li"},"dnb-ui-body"),"."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"dnb-ui-elements")," - this package will force styles for all the HTML Elements/Tags. Use it carefully - because this will effect existing styles as well.")),Object(a.mdx)("p",null,"All the CSS packages are ready to use, ",Object(a.mdx)("strong",{parentName:"p"},"minified CSS files"),". You will find the main style here: ",Object(a.mdx)("inlineCode",{parentName:"p"},"dnb-ui-lib/style/dnb-ui-core.min.css")),Object(a.mdx)("h3",null,"Individual styles"),Object(a.mdx)("p",null,"Additionally, it is also possible to import a style and theme for every single component separately. You find the styles here, like: ",Object(a.mdx)("inlineCode",{parentName:"p"},"dnb-ui-lib/components/[button]/style/dnb-button.min.css")," - read more about ",Object(a.mdx)("a",i({parentName:"p"},{href:"/uilib/usage/customisation/consume-styles#single-component-only"}),"how to import a single-component style")),Object(a.mdx)("h2",null,"CSS Structure Diagram"),Object(a.mdx)("p",null,"The following Diagram gives an overall overview how the packages are structured."),Object(a.mdx)("div",{className:"margin-bottom"},Object(a.mdx)(l.default,{mdxType:"CSSDiagram"})),Object(a.mdx)("h2",null,"How to deal with existing styles"),Object(a.mdx)("p",null,"The ",Object(a.mdx)("strong",{parentName:"p"},"dnb-ui-core")," package includes some styles witch effects the global scope (body and CSS reset). To avoid interference with existing styles, let's say a header or a menu, You could only use the ",Object(a.mdx)("strong",{parentName:"p"},"dnb-ui-basis")," package in combination with other packages like ",Object(a.mdx)("strong",{parentName:"p"},"dnb-theme-ui")," and ",Object(a.mdx)("strong",{parentName:"p"},"dnb-ui-components"),"."),Object(a.mdx)("p",null,"You may have a look at some ",Object(a.mdx)("a",i({parentName:"p"},{href:"/uilib/usage/customisation/styling/legacy-styling"}),"code examples of dealing with legacy code"),"."),Object(a.mdx)("h3",null,"Example import"),Object(a.mdx)("pre",null,Object(a.mdx)("code",i({parentName:"pre"},{className:"language-js"}),"import 'dnb-ui-lib/style/basis'\nimport 'dnb-ui-lib/style/components'\nimport 'dnb-ui-lib/style/themes/ui'\n\n// instead of all together\n/* import 'dnb-ui-lib/style' */\n")),Object(a.mdx)("h3",null,"Use Eufemia Styles elsewhere {#core-style}"),Object(a.mdx)("p",null,"If You neither include the ",Object(a.mdx)("strong",{parentName:"p"},"dnb-ui-core")," nor the ",Object(a.mdx)("strong",{parentName:"p"},"dnb-ui-body")," package, then You ending up having no Eufemia styles for the Document ",Object(a.mdx)("inlineCode",{parentName:"p"},"<body>"),". To have the Eufemia Core styles inside a wrapper anyway, simply use the following helper class: ",Object(a.mdx)("inlineCode",{parentName:"p"},".dnb-core-style")),Object(a.mdx)("pre",null,Object(a.mdx)("code",i({parentName:"pre"},{className:"language-html"}),'<div class="dnb-core-style">\n  \x3c!-- Wrapper to have correct Eufemia styles inside --\x3e\n  <h1 class="dnb-h1">I have now the Eufemia Style</h1>\n  <p class="dnb-p">👉 Me as well</p>\n</div>\n')),Object(a.mdx)("h4",null,"CSS Specificity"),Object(a.mdx)("p",null,"Once You use the ",Object(a.mdx)("inlineCode",{parentName:"p"},".dnb-core-style")," wrapper class, You may in some circumstances, need to use it to modify already given properties."),Object(a.mdx)("p",null,"For ",Object(a.mdx)("strong",{parentName:"p"},"Styled Components")," You do it this way:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",i({parentName:"pre"},{className:"language-jsx"}),"import { P } from 'dnb-ui-lib/elements'\nconst MyElement = styled(P)`\n  .dnb-core-style & {\n    margin-top: 3rem;\n  }\n  color: var(--color-sky-blue);\n`\n")),Object(a.mdx)("p",null,"In CSS You simply do it this way:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",i({parentName:"pre"},{className:"language-css"}),".dnb-core-style .my-element {\n  margin-top: 3rem;\n  color: var(--color-sky-blue);\n}\n")),Object(a.mdx)("h2",null,"Spacing for Articles {#spacing}"),Object(a.mdx)("p",null,"To ensure more flexibility in styling, all the margins / spacings are reset to zero. But more often we have to have a by default defined spacing, e.g. ",Object(a.mdx)("inlineCode",{parentName:"p"},"margin")," on HTML Elements like headings or paragraphs."),Object(a.mdx)("p",null,"To use the default DNB spacings, define a CSS class called: ",Object(a.mdx)("inlineCode",{parentName:"p"},".dnb-spacing"),"\nEffected HTML Elements inside this container will then have a default spacing. This will be specially helpful for article alike pages."),Object(a.mdx)("pre",null,Object(a.mdx)("code",i({parentName:"pre"},{className:"language-html"}),'<article class="dnb-spacing">\n  \x3c!-- DNB spacings --\x3e\n  <h1 class="dnb-h1">e.g. I have now the Eufemia spacing (margin)</h1>\n  <p class="dnb-p">👉 Me as well</p>\n</article>\n')),Object(a.mdx)("p",null,"The styles for the ",Object(a.mdx)("inlineCode",{parentName:"p"},".dnb-spacing")," are included in the package: ",Object(a.mdx)("strong",{parentName:"p"},"dnb-theme-ui"),"\nFor more details, check out the source file: ",Object(a.mdx)("inlineCode",{parentName:"p"},"spacing.scss")),Object(a.mdx)("h2",null,"Styling of HTML Elements (tags)"),Object(a.mdx)("p",null,"To deal with HTML Elements, without declaring them individual with the right css classes, like ",Object(a.mdx)("inlineCode",{parentName:"p"},'<h1 class="dnb-h1">'),", You can import the sub package ",Object(a.mdx)("strong",{parentName:"p"},"dnb-ui-elements"),"."),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"NB:")," Use it carefully - cause this will effect existing styles as well!"),Object(a.mdx)("pre",null,Object(a.mdx)("code",i({parentName:"pre"},{className:"language-js"}),"/* directly the CSS file */\nimport 'dnb-ui-lib/style/dnb-ui-elements.min.css'\n\n/* ... or by the shorthand */\nimport 'dnb-ui-lib/style/elements'\n")),Object(a.mdx)("pre",null,Object(a.mdx)("code",i({parentName:"pre"},{className:"language-html"}),"\x3c!-- HTML Elements in the wild --\x3e\n<h1>I'm now Eufemia styled</h1>\n<ul>\n  <li>Me as well</li>\n</ul>\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-uilib-usage-customisation-styling-md-876acece12f96c61d2e5.js.map