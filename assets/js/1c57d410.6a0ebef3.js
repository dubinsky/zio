"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[6512],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?s.createElement(h,i(i({ref:t},c),{},{components:n})):s.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5051:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var s=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],o={id:"spec",title:"Spec"},l=void 0,p={unversionedId:"datatypes/test/spec",id:"datatypes/test/spec",title:"Spec",description:"A Spec[R, E, T] is the backbone of ZIO Test. All specs require an environment of type R and may potentially fail with an error of type E.",source:"@site/docs/datatypes/test/spec.md",sourceDirName:"datatypes/test",slug:"/datatypes/test/spec",permalink:"/next/datatypes/test/spec",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/test/spec.md",tags:[],version:"current",frontMatter:{id:"spec",title:"Spec"},sidebar:"datatypes-sidebar",previous:{title:"Introduction",permalink:"/next/datatypes/test/"},next:{title:"Assertion",permalink:"/next/datatypes/test/assertion"}},c=[{value:"Constructors",id:"constructors",children:[],level:2},{value:"Dependencies on Other Services",id:"dependencies-on-other-services",children:[{value:"Using Standard Test Services",id:"using-standard-test-services",children:[],level:3},{value:"Providing Layers",id:"providing-layers",children:[],level:3},{value:"Sharing Layers Within a Suite",id:"sharing-layers-within-a-suite",children:[],level:3}],level:2},{value:"Operations",id:"operations",children:[{value:"Test Aspects",id:"test-aspects",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Spec[R, E, T]")," is the backbone of ZIO Test. All specs require an environment of type ",(0,r.kt)("inlineCode",{parentName:"p"},"R")," and may potentially fail with an error of type ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),"."),(0,r.kt)("p",null,"We can think of a spec as just a collection of tests. It is essentially a recursive data structure where every spec is just one individual test or a suite that itself can have multiple specs inside that each could be tests or sub suites. We can go down as far as we want in a recursive tree-like data structure."),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"A Single Test")," \u2014 The ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," constructor creates one single spec (test):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-scala",metastring:"mdoc:silent:nest","mdoc:silent:nest":!0},'import zio.test._\n\nval mySpec = test("true is true") {\n  assertTrue(true)\n}\n')),(0,r.kt)("p",{parentName:"li"},"Real tests that run some logic and return testing result are created mostly with ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," function. It expects two arguments, first one will be the label of test which will be used for visual reporting back to the user, and an assertion which contains some testable logic specified about a target under the test.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Collection of Multiple Tests")," \u2014 The ",(0,r.kt)("inlineCode",{parentName:"p"},"suite")," creates a suite which contains other specs (tests or suites):"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\n\nval mySuite =\n  suite("A suite containing multiple tests")(\n    test("the first test") {\n      assertTrue(1 + 1 == 2)\n    },\n    test("the second test") {\n      assertTrue(2 * 2 == 4)\n    }\n  )\n')),(0,r.kt)("p",null,"  Suites can contain other suites. We can have multiple suites and one big suite that will aggregate them all:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\n\nsuite("int and string")(\n  suite("int suite")(\n    test("minus")(assertTrue(2 - 1 == 1)),\n    test("plus")(assertTrue(1 + 1 == 2))\n  ),\n  suite("string suite")(\n    test("concat")(assertTrue("a" + "b" == "ab")),\n    test("length")(assertTrue("abc".length == 3))\n  )\n)\n')),(0,r.kt)("h2",{id:"dependencies-on-other-services"},"Dependencies on Other Services"),(0,r.kt)("p",null,"Just like the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," data type, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Spec")," requires an environment of type ",(0,r.kt)("inlineCode",{parentName:"p"},"R"),". When we write tests, we might need to access a service through the environment. It can be a combination of the standard services such a ",(0,r.kt)("inlineCode",{parentName:"p"},"Clock"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Console"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Random")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"System")," or test services like ",(0,r.kt)("inlineCode",{parentName:"p"},"TestClock"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TestConsole"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TestRandom"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"TestSystem"),", or any user-defined services."),(0,r.kt)("h3",{id:"using-standard-test-services"},"Using Standard Test Services"),(0,r.kt)("p",null,"All standard test services are located at the ",(0,r.kt)("inlineCode",{parentName:"p"},"zio.test")," package. They are test implementation of standard ZIO services. The use of these test services enables us to test functionality that depends on printing to or reading from a console, randomness, timings, and, also the system properties."),(0,r.kt)("p",null,"Let's see how we can test the ",(0,r.kt)("inlineCode",{parentName:"p"},"sayHello")," function, which uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Console")," service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.test.Assertion._\n\nimport java.io.IOException\n\ndef sayHello: ZIO[Any, IOException, Unit] =\n  Console.printLine("Hello, World!")\n\nsuite("HelloWorldSpec")(\n  test("sayHello correctly displays output") {\n    for {\n      _      <- sayHello\n      output <- TestConsole.output\n    } yield assertTrue(output == Vector("Hello, World!\\n"))\n  }\n)\n')),(0,r.kt)("p",null,"There is a separate section in the documentation pages that covers ",(0,r.kt)("a",{parentName:"p",href:"/next/datatypes/test/environment/"},"all built-in test services"),"."),(0,r.kt)("h3",{id:"providing-layers"},"Providing Layers"),(0,r.kt)("p",null,"By using ",(0,r.kt)("inlineCode",{parentName:"p"},"Spec#provideLayer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Spec#provideSomeLayer"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"Spec#provideCustomLayer"),", a test or suite of tests can be provided with any dependencies in a similar way to how a ZIO data type can. "),(0,r.kt)("h3",{id:"sharing-layers-within-a-suite"},"Sharing Layers Within a Suite"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Spec")," has a very nice mechanism to share layers within all tests in a suite. So instead of acquiring and releasing dependencies for each test, we can share the layer within all tests. The test framework acquires that layer for once and shares that between all tests. When the execution of all tests is finished, that layer will be released."),(0,r.kt)("p",null,"Assume we have the following tests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mdoc:compile-only"},'val testA =\n  test("producing an element to the kafka service") {\n    for {\n      _ <- Kafka.produce(\n        topic = "testTopic",\n        key = "key1",\n        value = "value1")\n    } yield assertTrue(true)\n  }\n\nval testB =\n  test("consuming elements from the kafka service") {\n    for {\n      _ <- Kafka.consume(topic = "testTopic")\n    } yield assertTrue(true)\n  }\n')),(0,r.kt)("p",null,"We can provide kafka as a shared layer within all tests in a suite:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'suite("a test suite with shared kafka layer")(\n  testA,\n  testB\n).provideCustomShared(EmbeddedKafka.layer)\n')),(0,r.kt)("h2",{id:"operations"},"Operations"),(0,r.kt)("p",null,"In ZIO Test, specs are just values like other data types in ZIO. So we can filter, map or manipulate these data types. In this section, we are going to learn some of the most important operations on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Spec")," data type:"),(0,r.kt)("h3",{id:"test-aspects"},"Test Aspects"),(0,r.kt)("p",null,"We can think of a test aspect as a polymorphic function from one test to another test. We use them to change existing tests or even entire suites or specs that we have already created."),(0,r.kt)("p",null,"Test aspects are applied to a test or suite using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@@")," operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.test.{test, _}\n\ntest("a single test") {\n  ???\n} @@ testAspect\n\nsuite("suite of multiple tests") {\n  ???\n} @@ testAspect\n')),(0,r.kt)("p",null,"The great thing about test aspects is that they are very composable. So we chain them one after another. We can even have test aspects that modify other test aspects."),(0,r.kt)("p",null,"So let's say we have a challenge that we need to run a test, and we want to make sure there is no flaky on the JVM, and then we want to make sure it doesn't take more than 60 seconds:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.test.TestAspect._\n\ntest("a test with two aspects composed together") {\n  ???\n} @@ jvm(nonFlaky) @@ timeout(60.seconds)\n')),(0,r.kt)("p",null,"This is an example of a test suite showing the use of aspects to modify test behavior:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\nimport zio.{test => _, _}\nimport zio.test.TestAspect._\n\nobject MySpec extends ZIOSpecDefault {\n  def spec = suite("A Suite")(\n    test("A passing test") {\n      assertTrue(true)\n    },\n    test("A passing test run for JVM only") {\n      assertTrue(true)\n    } @@ jvmOnly, // @@ jvmOnly only runs tests on the JVM\n    test("A passing test run for JS only") {\n      assertTrue(true)\n    } @@ jsOnly, // @@ jsOnly only runs tests on Scala.js\n    test("A passing test with a timeout") {\n      assertTrue(true)\n    } @@ timeout(10.nanos), // @@ timeout will fail a test that doesn\'t pass within the specified time\n    test("A failing test... that passes") {\n      assertTrue(true)\n    } @@ failing, //@@ failing turns a failing test into a passing test\n    test("A ignored test") {\n      assertTrue(false)\n    } @@ ignore, //@@ ignore marks test as ignored\n    test("A flaky test that only works on the JVM and sometimes fails; let\'s compose some aspects!") {\n      assertTrue(false)\n    } @@ jvmOnly           // only run on the JVM\n      @@ eventually        // @@ eventually retries a test indefinitely until it succeeds\n      @@ timeout(20.nanos) // it\'s a good idea to compose `eventually` with `timeout`, or the test may never end\n  ) @@ timeout(60.seconds) // apply a timeout to the whole suite\n}\n')))}d.isMDXComponent=!0}}]);