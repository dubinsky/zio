"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[59929],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var i=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=r,y=c["".concat(l,".").concat(g)]||c[g]||u[g]||a;return n?i.createElement(y,o(o({ref:t},d),{},{components:n})):i.createElement(y,o({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},49132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(58168),r=(n(96540),n(15680));const a={id:"testing-http-apps",title:"Testing HTTP Applications"},o=void 0,s={unversionedId:"zio-http/guides/testing-http-apps",id:"zio-http/guides/testing-http-apps",title:"Testing HTTP Applications",description:"Testing HTTP applications is a critical part of the development process. Utilizing the ZIO Test we can write first-class tests for our HTTP applications.",source:"@site/docs/zio-http/guides/testing-http-apps.md",sourceDirName:"zio-http/guides",slug:"/zio-http/guides/testing-http-apps",permalink:"/zio-http/guides/testing-http-apps",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/guides/testing-http-apps.md",tags:[],version:"current",frontMatter:{id:"testing-http-apps",title:"Testing HTTP Applications"},sidebar:"ecosystem-sidebar",previous:{title:"Integration with ZIO Config",permalink:"/zio-http/guides/integration-with-zio-config"},next:{title:"Examples",permalink:"/zio-http/examples/"}},l={},p=[{value:"ZIO Test",id:"zio-test",level:2},{value:"ZIO HTTP Testkit",id:"zio-http-testkit",level:2},{value:"TestClient",id:"testclient",level:2},{value:"TestServer",id:"testserver",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,i.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Testing HTTP applications is a critical part of the development process. Utilizing the ZIO Test we can write first-class tests for our HTTP applications."),(0,r.yg)("h2",{id:"zio-test"},"ZIO Test"),(0,r.yg)("p",null,"We have comprehensive documentation on ",(0,r.yg)("a",{parentName:"p",href:"https://zio.dev/reference/test/"},"ZIO Test")," which is worth reading to understand how to write tests using ZIO effects."),(0,r.yg)("p",null,"It is easy to test ZIO HTTP applications because we can think of ",(0,r.yg)("inlineCode",{parentName:"p"},"Routes")," as a function of ",(0,r.yg)("inlineCode",{parentName:"p"},"Request => ZIO[R, Response, Response]"),". By provide a ",(0,r.yg)("inlineCode",{parentName:"p"},"Request")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"Routes#runZIO")," will output a ",(0,r.yg)("inlineCode",{parentName:"p"},"Response"),". Without starting a server:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\nimport zio.test.Assertion.equalTo\nimport zio.http._\n\nobject ExampleSpec extends ZIOSpecDefault {\n\n  def spec = suite("http")(\n    test("should be ok") {\n      val app = Handler.ok.toRoutes\n      val req = Request.get(URL(Path.root))\n      assertZIO(app.runZIO(req))(equalTo(Response.ok))\n    }\n  )\n}\n')),(0,r.yg)("h2",{id:"zio-http-testkit"},"ZIO HTTP Testkit"),(0,r.yg)("p",null,"ZIO HTTP provides the ",(0,r.yg)("inlineCode",{parentName:"p"},"zio-http-testkit")," package that includes a ",(0,r.yg)("inlineCode",{parentName:"p"},"TestClient")," and a ",(0,r.yg)("inlineCode",{parentName:"p"},"TestServer"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-test"         % "2.1.9"  % Test\nlibraryDependencies += "dev.zio" %% "zio-test-sbt"     % "2.1.9"  % Test\nlibraryDependencies += "dev.zio" %% "zio-http-testkit" % "3.0.0" % Test\ntestFrameworks += new TestFramework("zio.test.sbt.ZTestFramework")\n')),(0,r.yg)("p",null,"Now, based on the requirement we can use any of the following test utilities:"),(0,r.yg)("h2",{id:"testclient"},"TestClient"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"TestClient")," allows us to write tests for our HTTP applications by defining the behavior of the client:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"TestClient.addRequestResponse")," - Adds an 1-1 mapping from a ",(0,r.yg)("inlineCode",{parentName:"li"},"Request")," to a ",(0,r.yg)("inlineCode",{parentName:"li"},"Response")," to the ",(0,r.yg)("inlineCode",{parentName:"li"},"TestClient"),". "),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"TestClient.addRoute")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"addRoutes")," - Add one or more ",(0,r.yg)("inlineCode",{parentName:"li"},"Route")," or a single ",(0,r.yg)("inlineCode",{parentName:"li"},"Routes")," instance to the ",(0,r.yg)("inlineCode",{parentName:"li"},"TestClient"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"TestClient.installSocketApp")," - Installs a ",(0,r.yg)("inlineCode",{parentName:"li"},"WebSocketApp")," to the ",(0,r.yg)("inlineCode",{parentName:"li"},"TestClient"),".")),(0,r.yg)("p",null,"After defining the behavior of the test client, we can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"TestClient.layer")," to provide the ",(0,r.yg)("inlineCode",{parentName:"p"},"TestClient")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Client")," to the test cases:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.http._\nimport zio.test.{test, _}\n\nobject TestUsingTestClient extends ZIOSpecDefault {\n  def spec = \n    test("hello world route and fallback") {\n      for {\n        client           <- ZIO.service[Client]\n        _                <- TestClient.addRoutes {\n          Routes(\n            Method.GET / trailing          -> handler { Response.text("fallback") },\n            Method.GET / "hello" / "world" -> handler { Response.text("Hey there!") },\n          )\n        }\n        helloResponse    <- client.batched(Request.get(URL.root / "hello" / "world"))\n        helloBody        <- helloResponse.body.asString\n        fallbackResponse <- client.batched(Request.get(URL.root / "any"))\n        fallbackBody     <- fallbackResponse.body.asString\n      } yield assertTrue(helloBody == "Hey there!", fallbackBody == "fallback")\n    }.provide(TestClient.layer)\n}\n')),(0,r.yg)("h2",{id:"testserver"},"TestServer"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"TestServer")," allows us to write tests for our HTTP applications by defining the behavior of the server:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"TestServer.addRequestResponse")," - Adds an 1-1 mapping from a ",(0,r.yg)("inlineCode",{parentName:"li"},"Request")," to a ",(0,r.yg)("inlineCode",{parentName:"li"},"Response")," to the ",(0,r.yg)("inlineCode",{parentName:"li"},"TestServer"),". "),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"TestServer.addRoute")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"TestServer.addRoutes")," - Add one or more ",(0,r.yg)("inlineCode",{parentName:"li"},"Route")," or a single ",(0,r.yg)("inlineCode",{parentName:"li"},"Routes")," instance to the ",(0,r.yg)("inlineCode",{parentName:"li"},"TestServer"),". ")),(0,r.yg)("p",null,"After defining the behavior of the test server, we can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"TestServer.layer")," to provide the ",(0,r.yg)("inlineCode",{parentName:"p"},"TestServer")," to any test cases that require ",(0,r.yg)("inlineCode",{parentName:"p"},"Server"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.http._\nimport zio.http.netty.NettyConfig\nimport zio.http.netty.server.NettyDriver\nimport zio.test._\n\nobject TestServerExampleSpec extends ZIOSpecDefault {\n\n  def spec = suite("test http app") {\n    test("test hello and fallback routes") {\n      for {\n        client <- ZIO.service[Client]\n        port   <- ZIO.serviceWithZIO[Server](_.port)\n        testRequest = Request\n          .get(url = URL.root.port(port))\n          .addHeaders(Headers(Header.Accept(MediaType.text.`plain`)))\n        _                <- TestServer.addRoutes {\n          Routes(\n            Method.GET / trailing          -> handler {\n              Response.text("fallback")\n            },\n            Method.GET / "hello" / "world" -> handler {\n              Response.text("Hey there!")\n            },\n          )\n        }\n        helloResponse    <- client.batched(Request.get(testRequest.url / "hello" / "world"))\n        helloBody        <- helloResponse.body.asString\n        fallbackResponse <- client.batched(Request.get(testRequest.url / "any"))\n        fallbackBody     <- fallbackResponse.body.asString\n      } yield assertTrue(helloBody == "Hey there!", fallbackBody == "fallback")\n    }.provideSome[Client with Driver](TestServer.layer)\n  }.provide(\n    ZLayer.succeed(Server.Config.default.onAnyOpenPort),\n    Client.default,\n    NettyDriver.customized,\n    ZLayer.succeed(NettyConfig.defaultWithFastShutdown),\n  )\n}\n')))}u.isMDXComponent=!0}}]);