"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9917],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),y=a,d=m["".concat(l,".").concat(y)]||m[y]||u[y]||o;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2077:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={id:"system",title:"System"},l=void 0,p={unversionedId:"datatypes/contextual/services/system",id:"datatypes/contextual/services/system",title:"System",description:"System service contains several useful functions related to system environments and properties. Both of system environments and system properties are key/value pairs. They are used to pass user-defined information to our application.",source:"@site/docs/datatypes/contextual/services/system.md",sourceDirName:"datatypes/contextual/services",slug:"/datatypes/contextual/services/system",permalink:"/next/datatypes/contextual/services/system",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/contextual/services/system.md",tags:[],version:"current",frontMatter:{id:"system",title:"System"},sidebar:"datatypes-sidebar",previous:{title:"Random",permalink:"/next/datatypes/contextual/services/random"},next:{title:"Introduction",permalink:"/next/datatypes/fiber/"}},c=[{value:"System Environment",id:"system-environment",children:[],level:2},{value:"System Property",id:"system-property",children:[],level:2},{value:"Miscellaneous",id:"miscellaneous",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"System service contains several useful functions related to system environments and properties. Both of ",(0,o.kt)("strong",{parentName:"p"},"system environments")," and ",(0,o.kt)("strong",{parentName:"p"},"system properties")," are key/value pairs. They are used to pass user-defined information to our application."),(0,o.kt)("p",null,"Environment variables are global operating system level variables available to all applications running on the same machine, while properties are application-level variables provided to our application."),(0,o.kt)("h2",{id:"system-environment"},"System Environment"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," function retrieves the value of an environment variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nfor {\n  user <- System.env("USER")\n  _    <- user match {\n            case Some(value) => \n              Console.printLine(s"The USER env is: $value")\n            case None        => \n              Console.printLine("Oops! The USER env is not set")\n          }\n} yield ()\n')),(0,o.kt)("h2",{id:"system-property"},"System Property"),(0,o.kt)("p",null,"Also, the System service has a ",(0,o.kt)("inlineCode",{parentName:"p"},"property")," function to retrieve the value of a system property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nfor {\n  user <- System.property("LOG_LEVEL")\n  _    <- user match {\n           case Some(value) => \n             Console.printLine(s"The LOG_LEVEL property is: $value")\n           case None => \n             Console.printLine("Oops! The LOG_LEVEL property is not set")\n         }\n} yield ()\n')),(0,o.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,o.kt)("p",null,"With the ",(0,o.kt)("inlineCode",{parentName:"p"},"lineSeparator")," method, we can determine the line separator for the underlying platform:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'System.lineSeparator\n// res2: String = """\n// """\n')))}m.isMDXComponent=!0}}]);