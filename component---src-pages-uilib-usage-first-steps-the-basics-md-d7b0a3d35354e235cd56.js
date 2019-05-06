(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{1219:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return o}),n.d(t,"default",function(){return c});n(16),n(14),n(20),n(19),n(18),n(22),n(4),n(5);var a=n(0),i=n(13);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o={title:"The Basics",draft:!1,order:2},s={_frontmatter:o},m="wrapper";function c(e){var t=e.components,n=l(e,["components"]);return Object(a.mdx)(m,r({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("h1",null,"The Basics"),Object(a.mdx)("p",null,"The ",Object(a.mdx)("inlineCode",{parentName:"p"},"dnb-ui-lib")," is hosted on the global NPM registry. It includes all the necessary parts to build an independent layer on top of a frontend framework of your choice."),Object(a.mdx)("p",null,"It is recommended to have an application setup with a compiling/build process in place."),Object(a.mdx)("h2",null,"HTML Elements and styling"),Object(a.mdx)("p",null,"There are three things going on once an HTML element is displayed and up-and-running."),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"syntax as HTML"),Object(a.mdx)("li",{parentName:"ul"},"styling by CSS"),Object(a.mdx)("li",{parentName:"ul"},"internal states by JavaScript")),Object(a.mdx)("p",null,"From here we can redefine the properties of the HTML elements in order to customize them.\nWe can also bind event listeners to work together with your application."),Object(a.mdx)("h3",null,"Pixel Perfect"),Object(a.mdx)("p",null,"One of the most important reasons why Eufemia exists, is to make it more easy to get a pixel perfect result on developing WEB Applications."),Object(a.mdx)("p",null,"Therefore, You come a long way on using the ",Object(a.mdx)("inlineCode",{parentName:"p"},"dnb-ui-lib")," correctly:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Make You use ",Object(a.mdx)("a",r({parentName:"li"},{href:"/uilib/usage/customisation/styling"}),"import the style packages correctly")," (with or without CSS reset depending on Your legacy code situation)"),Object(a.mdx)("li",{parentName:"ul"},"Always (mostly) use ",Object(a.mdx)("inlineCode",{parentName:"li"},"rem"),' to the nearest "8px" value, like ',Object(a.mdx)("strong",{parentName:"li"},"1px = 0.0625rem")," (1/16)"),Object(a.mdx)("li",{parentName:"ul"},"Always use the ",Object(a.mdx)("a",r({parentName:"li"},{href:"/uilib/elements"}),"HTML Elements")," or ",Object(a.mdx)("a",r({parentName:"li"},{href:"/uilib/components"}),"UI Components")),Object(a.mdx)("li",{parentName:"ul"},"There are more ",Object(a.mdx)("a",r({parentName:"li"},{href:"/uilib/usage/best-practices/for-styling"}),"useful tips on styling"))),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Make sure You test Your Layout and Styles for various conditions during and after development:")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Up two 3x times in ",Object(a.mdx)("strong",{parentName:"li"},"font-size")," (change the Web Browser default font size)"),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Zoom")," the Web Browser up to 3x times"),Object(a.mdx)("li",{parentName:"ul"},"Make Your layout ",Object(a.mdx)("strong",{parentName:"li"},"responsive"),", either with CSS Grid or Media Queries and,"),Object(a.mdx)("li",{parentName:"ul"},"Check the different screen sizes"),Object(a.mdx)("li",{parentName:"ul"},"Test Your App on different devices and operating systems"),Object(a.mdx)("li",{parentName:"ul"},"Pixel perfection is good for many, for the rest, make everything ",Object(a.mdx)("a",r({parentName:"li"},{href:"/uilib/usage/accessibility"}),"accessible for everyone"))),Object(a.mdx)("h2",null,"States"),Object(a.mdx)("p",null,"All the UI Components (and some HTML Elements) have individual interaction states. The look and feel is defined in the default ",Object(a.mdx)("a",r({parentName:"p"},{href:"/uilib/usage/customisation/theming"}),"theming file")," (",Object(a.mdx)("strong",{parentName:"p"},"theme-ui"),")."),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"hover"),Object(a.mdx)("li",{parentName:"ul"},"active (TouchStart)"),Object(a.mdx)("li",{parentName:"ul"},"focus"),Object(a.mdx)("li",{parentName:"ul"},"disabled")),Object(a.mdx)("h2",null,"CSS Styles"),Object(a.mdx)("p",null,"Read about ",Object(a.mdx)("a",r({parentName:"p"},{href:"/uilib/usage/customisation/styling"}),"how the styles are setup")," and ",Object(a.mdx)("a",r({parentName:"p"},{href:"/uilib/usage/customisation/consume-styles"}),"how to import the CSS"),"."),Object(a.mdx)("h2",null,"Compiler"),Object(a.mdx)("p",null,"With ",Object(a.mdx)("a",r({parentName:"p"},{href:"https://nodejs.org/"}),"Node.js")," as our JavaScript runtime in place, we may use ES6 (ECMAScript 2015) to write our application. There are many frameworks and libraries to build user interfaces. If we take ",Object(a.mdx)("a",r({parentName:"p"},{href:"https://reactjs.org/docs/add-react-to-a-website.html#optional-try-react-with-jsx"}),"React JSX")," as an starting point, we basically ",Object(a.mdx)("a",r({parentName:"p"},{href:"/uilib/usage/first-steps/react"}),"do this"),":"),Object(a.mdx)(i.a,{hideCode:!0,hideToolbar:!0,mdxType:"ComponentBox"},'\n<Button text="Primary Button" />\n'),Object(a.mdx)("pre",null,Object(a.mdx)("code",r({parentName:"pre"},{className:"language-jsx"}),"// Define the imports\nimport { Button } from 'dnb-ui-lib'\n\n// And consume the Component in Your markup render method\nrender(<Button text=\"Primary Button\" />)\n")),Object(a.mdx)("p",null,"You also may ",Object(a.mdx)("a",r({parentName:"p"},{href:"/uilib/usage/customisation/consume-styles"}),"import the styles")," on a higher lever in Your application:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",r({parentName:"pre"},{className:"language-js"}),"// e.g. in the App root\nimport 'dnb-ui-lib/style'\n")),Object(a.mdx)("p",null,"You can also import a single style of one component at a time:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",r({parentName:"pre"},{className:"language-js"}),"// Imports only the Button CSS and Main DNB Theme\nimport 'dnb-ui-lib/components/button/style'\nimport 'dnb-ui-lib/components/button/style/themes/ui'\n")),Object(a.mdx)("p",null,"And finally bind an ",Object(a.mdx)("a",r({parentName:"p"},{href:"/uilib/usage/customisation/event-handling"}),"event listener"),":"),Object(a.mdx)("pre",null,Object(a.mdx)("code",r({parentName:"pre"},{className:"language-jsx"}),'<Button text="Button" on_click={myClickHandler} />\n')),Object(a.mdx)("h2",null,"UMD"),Object(a.mdx)("p",null,"In case you don't have a compiling/build process, You can use the UMD packed version of the ",Object(a.mdx)("inlineCode",{parentName:"p"},"dnb-ui-lib"),". Take a look here how to use it ",Object(a.mdx)("inlineCode",{parentName:"p"},"REPOSITORY/packages/examples/example-html")," (src/umd). But this will not optimize your code for the best user experience. So, to use UMD is ",Object(a.mdx)("strong",{parentName:"p"},"not recommended"),"."),Object(a.mdx)("pre",null,Object(a.mdx)("code",r({parentName:"pre"},{className:"language-html"}),'<html>\n  <head>\n    ...\n    <link\n      rel="stylesheet"\n      href="https://unpkg.com/dnb-ui-lib@latest/style/dnb-ui-core.min.css"\n    />\n    <link\n      rel="stylesheet"\n      href="https://unpkg.com/dnb-ui-lib@latest/style/dnb-ui-components.min.css"\n    />\n    <link\n      rel="stylesheet"\n      href="https://unpkg.com/dnb-ui-lib@latest/style/themes/dnb-theme-ui.min.css"\n    />\n  </head>\n  <body>\n    ...\n    <script src="https://unpkg.com/dnb-ui-lib@latest/umd/dnb-ui-lib.min.js"><\/script>\n  </body>\n</html>\n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-uilib-usage-first-steps-the-basics-md-d7b0a3d35354e235cd56.js.map