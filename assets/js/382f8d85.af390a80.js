"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[58086],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=i,h=d["".concat(o,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},39372:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={id:"index",title:"Introduction to Caliban Deriving",sidebar_label:"Caliban Deriving"},l=void 0,s={unversionedId:"caliban-deriving/index",id:"caliban-deriving/index",title:"Introduction to Caliban Deriving",description:"Full-featured, robust deriving for Caliban.",source:"@site/docs/caliban-deriving/index.md",sourceDirName:"caliban-deriving",slug:"/caliban-deriving/",permalink:"/caliban-deriving/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/caliban-deriving/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to Caliban Deriving",sidebar_label:"Caliban Deriving"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Ecosystem Official Libraries",permalink:"/ecosystem/officials/"},next:{title:"Overview",permalink:"/zio-aws/"}},o={},c=[{value:"Getting started",id:"getting-started",level:2},{value:"Features",id:"features",level:2},{value:"Common features",id:"common-features",level:3},{value:"Case classes",id:"case-classes",level:3},{value:"Sealed traits",id:"sealed-traits",level:3},{value:"Traits",id:"traits",level:3},{value:"Using with effects",id:"using-with-effects",level:2},{value:"Mutations and subscriptions",id:"mutations-and-subscriptions",level:3}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Full-featured, robust deriving for Caliban."),(0,i.kt)("p",null,"The Caliban Deriving library provides an advanced derive macro for the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ghostdogpr/caliban"},"Caliban library")," that seamlessly integrates with the built-in schema derivation system and allows the library users to not only derive the schema for the user defined case classes and enums but also for calculated fields and functions with parameters."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"Start by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"caliban-deriving")," as a dependency to your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "caliban-deriving" % "0.0.1"\n')),(0,i.kt)("p",null,"Once the library is added, Caliban's default auto-derived schemas can be replaced one by one for each type by explicitly deriving its\nschema using the Caliban Deriving method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"case class Example(value: Int)\nobject Example {\n    implicit lazy val exampleSchema: Schema[Any, Example] =\n      deriveSchemaInstance[Any, Example]\n}\n")),(0,i.kt)("p",null,"Please read ",(0,i.kt)("a",{parentName:"p",href:"https://ghostdogpr.github.io/caliban/docs/schema.html#schemas"},"Caliban's official documentation about schemas")," to learn more about what a schema is and what features the core library provides."),(0,i.kt)("p",null,"It is important that it is possible to use a ",(0,i.kt)("em",{parentName:"p"},"mix")," of Caliban's built-in schemas, auto-derived schemas and the ones provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"deriveSchemaInstance"),". Both derive methods are looking for implicit instances of ",(0,i.kt)("inlineCode",{parentName:"p"},"Schema"),"."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"Caliban Deriving's ",(0,i.kt)("inlineCode",{parentName:"p"},"deriveSchemaInstance")," function can be applied on the following Scala data types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"case classes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"sealed traits"),"  or Scala 3 ",(0,i.kt)("em",{parentName:"li"},"enums")),(0,i.kt)("li",{parentName:"ul"},"any ",(0,i.kt)("em",{parentName:"li"},"trait"))),(0,i.kt)("h3",{id:"common-features"},"Common features"),(0,i.kt)("p",null,"The following rules apply equally for case classes, sealed traits and traits."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"public ",(0,i.kt)("inlineCode",{parentName:"li"},"val")," fields and parameterless ",(0,i.kt)("inlineCode",{parentName:"li"},"def")," methods are generated as GraphQL ",(0,i.kt)("em",{parentName:"li"},"fields"),". Their ",(0,i.kt)("inlineCode",{parentName:"li"},"Schema")," is found by an implicit search for the given type. This way it supports exactly the same cases as Caliban's built-in derive method, including fields of type ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ZQuery")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Future"),"."),(0,i.kt)("li",{parentName:"ul"},"public methods with one or more parameters are generated as GraphQL ",(0,i.kt)("em",{parentName:"li"},"functions"),". The ",(0,i.kt)("inlineCode",{parentName:"li"},"Schema")," of the function arguments is found by an implicit search for their type."),(0,i.kt)("li",{parentName:"ul"},"protected and private fields/methods are excluded"),(0,i.kt)("li",{parentName:"ul"},"public members annotated by ",(0,i.kt)("inlineCode",{parentName:"li"},"@GQLExclude")," are also excluded"),(0,i.kt)("li",{parentName:"ul"},"the following core ",(0,i.kt)("a",{parentName:"li",href:"https://ghostdogpr.github.io/caliban/docs/schema.html#annotations"},"Caliban annotations")," are supported: ",(0,i.kt)("inlineCode",{parentName:"li"},"@GQLName"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"@GQLDescription"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"@GQLDeprecated")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"@GQLDirective"))),(0,i.kt)("h3",{id:"case-classes"},"Case classes"),(0,i.kt)("p",null,"From ",(0,i.kt)("em",{parentName:"p"},"case classes")," a GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," is generated. If it is used as an input (as a parameter for a function in another type), then an GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," is generated which only contains the constructor parameters of the case class, not the other members."),(0,i.kt)("h3",{id:"sealed-traits"},"Sealed traits"),(0,i.kt)("p",null,"For ",(0,i.kt)("em",{parentName:"p"},"sum types")," (sealed trait with a set of case class / case objects implementations) if the base trait contains any methods, it will become a GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"interface")," and each constuctor a ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"."),(0,i.kt)("p",null,"If the base trait has no members, but the constructors have parameters, it becomes a GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"union"),". Members of constructors are still handled the same way as mentioned above."),(0,i.kt)("p",null,"If all the constructors are case objects then it becomes a GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"enum"),"."),(0,i.kt)("h3",{id:"traits"},"Traits"),(0,i.kt)("p",null," If the derivation is invoked on a simple trait (not ",(0,i.kt)("inlineCode",{parentName:"p"},"sealed"),") then it works as if it were a concrete parameterless ",(0,i.kt)("em",{parentName:"p"},"case class"),". This means a GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," is generated and a schema derived for an arbitrary trait can be used to serve any implementation of it."),(0,i.kt)("h2",{id:"using-with-effects"},"Using with effects"),(0,i.kt)("p",null,"When there are members of type ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ZQuery"),", they can have an environment parameter (",(0,i.kt)("inlineCode",{parentName:"p"},"-R"),") that is not ",(0,i.kt)("inlineCode",{parentName:"p"},"Any"),". Effects and queries without environment just work."),(0,i.kt)("p",null,"When working with effects requiring an environment the following rules apply:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You have to have the ",(0,i.kt)("inlineCode",{parentName:"li"},"GenericSchema[R]")," trait in scope as described ",(0,i.kt)("a",{parentName:"li",href:"https://ghostdogpr.github.io/caliban/docs/schema.html#effects"},"in the official documentation"),". This should be done by inheriting this trait in an object and putting all the additional derived implicits there."),(0,i.kt)("li",{parentName:"ul"},"The implicit resolution in this case will only be correct if you put all the implicit instances derived with Caliban Deriving's ",(0,i.kt)("inlineCode",{parentName:"li"},"deriveSchemaInstance")," ",(0,i.kt)("strong",{parentName:"li"},"directly into the object")," extending ",(0,i.kt)("inlineCode",{parentName:"li"},"GenericSchema"),"."),(0,i.kt)("li",{parentName:"ul"},"Although the macro can calculate the union of all the required environments used in a type, it is not automatically using it for the result ",(0,i.kt)("inlineCode",{parentName:"li"},"Schema"),". The reason is that you may want to derive schema for multiple data types, each using only a subset of the total environment passed to the ",(0,i.kt)("inlineCode",{parentName:"li"},"GenericSchema"),". In this case the full environment cannot be calculated inside the derivation. For this reason, you ",(0,i.kt)("strong",{parentName:"li"},"must")," provide the full required environment, the same that is passed to the ",(0,i.kt)("inlineCode",{parentName:"li"},"GenericSchema")," in scope, to the ",(0,i.kt)("inlineCode",{parentName:"li"},"deriveSchemaInstance")," method in its first type parameter.")),(0,i.kt)("h3",{id:"mutations-and-subscriptions"},"Mutations and subscriptions"),(0,i.kt)("p",null,"Not supported yet."))}d.isMDXComponent=!0}}]);