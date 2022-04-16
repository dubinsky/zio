"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[6294],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5937:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={id:"index",title:"Introduction"},c=void 0,l={unversionedId:"datatypes/metrics/index",id:"datatypes/metrics/index",title:"Introduction",description:"In highly concurrent applications, things are interconnected, so maintaining such setup to run smoothly and without application downtimes is very challenging.",source:"@site/docs/datatypes/metrics/index.md",sourceDirName:"datatypes/metrics",slug:"/datatypes/metrics/",permalink:"/next/datatypes/metrics/",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/metrics/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction"},sidebar:"datatypes-sidebar",previous:{title:"SubscriptionRef",permalink:"/next/datatypes/stream/subscription-ref"},next:{title:"Counter",permalink:"/next/datatypes/metrics/counter"}},p=[],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In highly concurrent applications, things are interconnected, so maintaining such setup to run smoothly and without application downtimes is very challenging. "),(0,i.kt)("p",null,"Imagine we have a complex infrastructure with lots of services. Services are replicated and distributed across our servers. So we have no insight on what happening on the across our services at level of errors, response latency, service uptime, etc. With ZIO Metrics, we can capture these different metrics and provide them to a ",(0,i.kt)("em",{parentName:"p"},"metric service")," for later investigation."),(0,i.kt)("p",null,"ZIO supports 5 types of Metrics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/metrics/counter"},"Counter"))," \u2014 The Counter is used for any value that increases over time like ",(0,i.kt)("em",{parentName:"li"},"request counts"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/metrics/gauge"},"Gauge"))," \u2014 The gauge is a single numerical value that can arbitrary goes up or down over time like ",(0,i.kt)("em",{parentName:"li"},"memory usage"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/metrics/histogram"},"Histogram"))," \u2014 The Histogram is used to track the distribution of a set of observed values across a set of buckets like ",(0,i.kt)("em",{parentName:"li"},"request latencies"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/metrics/summary"},"Summary"))," \u2014 The Summary represents a sliding window of a time series along with metrics for certain percentiles of the time series, referred to as quantiles like ",(0,i.kt)("em",{parentName:"li"},"request latencies"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/metrics/setcount"},"Frequency"))," \u2014 The Frequency is a metric that counts the number of occurrences of distinct string values.")),(0,i.kt)("p",null,"All ZIO Metrics are defined in the form of ZIO Aspects that can be applied to effects without changing the signature of the effect it is applied to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"TODO\n")),(0,i.kt)("p",null,"After adding metrics into our application, whenever we want we can capture snapshot of all metrics recorded by our application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"TODO\n")),(0,i.kt)("p",null,"Also, a ",(0,i.kt)("em",{parentName:"p"},"metric service")," can implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"MetricListener")," interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"TODO\n")),(0,i.kt)("p",null,"And then we can install that to our application which will be notified every time a metric is updated:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"TODO\n")))}m.isMDXComponent=!0}}]);