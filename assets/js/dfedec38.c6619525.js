"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[8153],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6952:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],c={id:"contributing-to-documentation",title:"Contributing to The ZIO Documentation"},l=void 0,s={unversionedId:"about/contributing-to-documentation",id:"about/contributing-to-documentation",title:"Contributing to The ZIO Documentation",description:"The ZIO documentation is provided by a worldwide community, just like the project itself. So if you are reading this page, you can help us to improve the documentation.",source:"@site/docs/about/contributing-to-documentation.md",sourceDirName:"about",slug:"/about/contributing-to-documentation",permalink:"/next/about/contributing-to-documentation",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/about/contributing-to-documentation.md",tags:[],version:"current",frontMatter:{id:"contributing-to-documentation",title:"Contributing to The ZIO Documentation"},sidebar:"about-sidebar",previous:{title:"ZIO Contributor Guidelines",permalink:"/next/about/contributing"},next:{title:"ZIO Code of Conduct",permalink:"/next/about/code-of-conduct"}},u=[{value:"Toolchain",id:"toolchain",children:[],level:2},{value:"Editing with GitHub Editor",id:"editing-with-github-editor",children:[],level:2},{value:"Editing Documentation Locally",id:"editing-documentation-locally",children:[],level:2},{value:"Giving Feedback",id:"giving-feedback",children:[],level:2}],d={toc:u};function p(e){var t=e.components,c=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ZIO documentation is provided by a worldwide community, just like the project itself. So if you are reading this page, you can help us to improve the documentation."),(0,a.kt)("p",null,"Please read the ",(0,a.kt)("a",{parentName:"p",href:"/next/about/contributing"},"Contributor Guideline")," before contributing to documentation."),(0,a.kt)("h2",{id:"toolchain"},"Toolchain"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The documentation is written in ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Markdown"},"Markdown")," format."),(0,a.kt)("li",{parentName:"ol"},"During the build process of the microsite, we use ",(0,a.kt)("a",{parentName:"li",href:"https://scalameta.org/mdoc/"},"mdoc")," to type-check code snippets in Markdown."),(0,a.kt)("li",{parentName:"ol"},"Our site generator is ",(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"Docusaurus"),".")),(0,a.kt)("h2",{id:"editing-with-github-editor"},"Editing with GitHub Editor"),(0,a.kt)("p",null,"We encourage contributors to use GitHub's editor for making minor changes to existing documents."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"On each page, there is a button called ",(0,a.kt)("em",{parentName:"li"},"Edit this page"),", by clicking this button, we will be redirected to the GitHub editor.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Edit this page",src:n(6049).Z,width:"1255",height:"495"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"After editing the page we can check whether our changes have been formatted correctly or not by using the ",(0,a.kt)("em",{parentName:"li"},"Preview")," tab.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub Editor",src:n(1958).Z,width:"1254",height:"654"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"We can scroll to the bottom of the page and write a title and description of the work, and then propose the changes by clicking on ",(0,a.kt)("em",{parentName:"li"},"Propose changes"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Propose changes",src:n(5569).Z,width:"1256",height:"586"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Our browser will be redirected to a new page titled ",(0,a.kt)("em",{parentName:"li"},"Comparing changes")," after clicking the ",(0,a.kt)("em",{parentName:"li"},"Propose changes")," button. We can compare our changes proposal and then create a pull request by clicking the ",(0,a.kt)("em",{parentName:"li"},"Create pull request")," button.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Open a pull request",src:n(7441).Z,width:"1252",height:"500"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"On the new page, we can edit the title and description of our pull request on the new page and finally click ",(0,a.kt)("em",{parentName:"li"},"Create pull request"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Open a pull request",src:n(9179).Z,width:"1251",height:"704"})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"A pull request has been created. Eventually, our work will be reviewed by the rest of the team.")),(0,a.kt)("h2",{id:"editing-documentation-locally"},"Editing Documentation Locally"),(0,a.kt)("p",null,"ZIO contributors are encouraged to use this approach for introducing new documentation pages, or when we have lots of improvements on code snippets since we can compile check all changes locally before committing and sending a pull request to the project:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First, we need to clone the ZIO project on our machine:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:zio/zio.git\ncd zio\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The documentation source code can be found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," directory and they are all in Markdown format. Now we can begin improving the existing documentation or adding new documentation.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To generate documentation site from type-checked markdowns we can use the following command:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sbt docs/mdoc\n")),(0,a.kt)("p",null,"If one of our snippet codes fails to compile, this command doesn't succeed and will guide us on which line of the documentation caused this error."),(0,a.kt)("p",null,"It is recommended to run this command with sbt shell with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--watch")," option. This will start a file watcher and livereload on changes. It's useful when we want to see the intermediate results while we are writing documentation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sbt\nsbt:docs> docs/mdoc --watch\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Finally, by the following command we can serve the microsite locally:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd website\nnpm install\nnpm run start --watch\n")),(0,a.kt)("p",null,"It will be served on ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:3000/"},"localhost")," address."),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"When we are finished with the documentation, we can commit those changes and ","[create a pull request]"," (contributing.md#create-a-pull-request).")),(0,a.kt)("h2",{id:"giving-feedback"},"Giving Feedback"),(0,a.kt)("p",null,"Sometimes we see some problem in the documentation, or we have some idea to make better documentation, but we haven't time or knowledge to do that personally. We can discuss those ideas with the community. There are two ways to do this:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Using Discord (",(0,a.kt)("a",{parentName:"li",href:"https://discord.gg/2ccFBr4"},"https://discord.gg/2ccFBr4"),") is a great way to share our thoughts with others, discuss them, and brainstorm big ideas."),(0,a.kt)("li",{parentName:"ol"},"Opening a new issue (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/zio/zio/issues/new"},"https://github.com/zio/zio/issues/new"),") is appropriate when we have actionable ideas, such as reorganizing a specific page of a documentation, or a problem with the current documentation.")))}p.isMDXComponent=!0},7441:function(e,t,n){t.Z=n.p+"assets/images/comparing-changes-0217f6c918dd8c182e7ff3c3bd752d5f.png"},6049:function(e,t,n){t.Z=n.p+"assets/images/edit-this-page-e3777168dd95ca190e3dabc7a7e23a7c.png"},1958:function(e,t,n){t.Z=n.p+"assets/images/github-editor-d94476f888f36034cab3f047e58ceab2.png"},9179:function(e,t,n){t.Z=n.p+"assets/images/open-a-pull-request-0631649e35db6fdafd4bbef4e93bf074.png"},5569:function(e,t,n){t.Z=n.p+"assets/images/propose-changes-6ed73517cbc6a90f3cf31e206e6508a1.png"}}]);