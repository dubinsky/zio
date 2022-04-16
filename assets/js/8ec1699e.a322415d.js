"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[5432],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(h,i(i({ref:n},l),{},{components:t})):r.createElement(h,i({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3953:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={id:"semaphore",title:"Semaphore"},p=void 0,c={unversionedId:"datatypes/concurrency/semaphore",id:"datatypes/concurrency/semaphore",title:"Semaphore",description:"A Semaphore datatype which allows synchronization between fibers with the withPermit operation, which safely acquires and releases a permit.",source:"@site/docs/datatypes/concurrency/semaphore.md",sourceDirName:"datatypes/concurrency",slug:"/datatypes/concurrency/semaphore",permalink:"/next/datatypes/concurrency/semaphore",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/concurrency/semaphore.md",tags:[],version:"current",frontMatter:{id:"semaphore",title:"Semaphore"},sidebar:"datatypes-sidebar",previous:{title:"Hub",permalink:"/next/datatypes/concurrency/hub"},next:{title:"Introduction",permalink:"/next/datatypes/stm/"}},l=[{value:"Operations",id:"operations",children:[],level:2}],u={toc:l};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Semaphore")," datatype which allows synchronization between fibers with the ",(0,o.kt)("inlineCode",{parentName:"p"},"withPermit")," operation, which safely acquires and releases a permit.\n",(0,o.kt)("inlineCode",{parentName:"p"},"Semaphore")," is based on ",(0,o.kt)("inlineCode",{parentName:"p"},"Ref[A]")," datatype."),(0,o.kt)("h2",{id:"operations"},"Operations"),(0,o.kt)("p",null,"For example, a synchronization of asynchronous tasks can\nbe done via acquiring and releasing a semaphore with a given number of permits it can spend.\nWhen the acquire operation cannot be performed due to no more available ",(0,o.kt)("inlineCode",{parentName:"p"},"permits")," in the semaphore, such task\nis semantically blocked, until the ",(0,o.kt)("inlineCode",{parentName:"p"},"permits")," value is large enough again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import java.util.concurrent.TimeUnit\nimport zio._\nimport zio.Console._\n\nval task = for {\n  _ <- printLine("start")\n  _ <- ZIO.sleep(Duration(2, TimeUnit.SECONDS))\n  _ <- printLine("end")\n} yield ()\n\nval semTask = (sem: Semaphore) => for {\n  _ <- sem.withPermit(task)\n} yield ()\n\nval semTaskSeq = (sem: Semaphore) => (1 to 3).map(_ => semTask(sem))\n\nval program = for {\n\n  sem <- Semaphore.make(permits = 1)\n\n  seq <- ZIO.succeed(semTaskSeq(sem))\n\n  _ <- ZIO.collectAllPar(seq)\n\n} yield ()\n')),(0,o.kt)("p",null,"As the binary semaphore is a special case of a counting semaphore,\nwe can acquire and release any number of ",(0,o.kt)("inlineCode",{parentName:"p"},"permits"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val semTaskN = (sem: Semaphore) => for {\n  _ <- sem.withPermits(5)(task)\n} yield ()\n")),(0,o.kt)("p",null,"The guarantee of ",(0,o.kt)("inlineCode",{parentName:"p"},"withPermit")," (and its corresponding counting version ",(0,o.kt)("inlineCode",{parentName:"p"},"withPermits"),") is that each acquisition will be followed by the equivalent number of releases, regardless of whether the task succeeds, fails, or is interrupted."))}m.isMDXComponent=!0}}]);