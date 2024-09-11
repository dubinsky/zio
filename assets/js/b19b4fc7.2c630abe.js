"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[27109],{15680:(e,n,o)=>{o.d(n,{xA:()=>p,yg:()=>u});var i=o(96540);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function t(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,i,a=function(e,n){if(null==e)return{};var o,i,a={},t=Object.keys(e);for(i=0;i<t.length;i++)o=t[i],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)o=t[i],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=i.createContext({}),g=function(e){var n=i.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},p=function(e){var n=g(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var o=e.components,a=e.mdxType,t=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=g(o),f=a,u=c["".concat(s,".").concat(f)]||c[f]||d[f]||t;return o?i.createElement(u,r(r({ref:n},p),{},{components:o})):i.createElement(u,r({ref:n},p))}));function u(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var t=o.length,r=new Array(t);r[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var g=2;g<t;g++)r[g]=o[g];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}f.displayName="MDXCreateElement"},50676:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>g});var i=o(58168),a=(o(96540),o(15680));const t={id:"integration-with-zio-config",title:"How to Integrate with ZIO Config",sidebar_label:"Integration with ZIO Config"},r=void 0,l={unversionedId:"zio-http/guides/integration-with-zio-config",id:"zio-http/guides/integration-with-zio-config",title:"How to Integrate with ZIO Config",description:"When building HTTP applications, it is common to have configuration settings that need to be loaded from various sources such as environment variables, system properties, or configuration files. It is essential especially when deploying applications to different environments like development, testing, and production, or we want to have a cloud-native application that can be configured dynamically.",source:"@site/docs/zio-http/guides/integrate-with-zio-config.md",sourceDirName:"zio-http/guides",slug:"/zio-http/guides/integration-with-zio-config",permalink:"/zio-http/guides/integration-with-zio-config",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/guides/integrate-with-zio-config.md",tags:[],version:"current",frontMatter:{id:"integration-with-zio-config",title:"How to Integrate with ZIO Config",sidebar_label:"Integration with ZIO Config"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO HTTP",permalink:"/zio-http/"},next:{title:"Testing HTTP Applications",permalink:"/zio-http/guides/testing-http-apps"}},s={},g=[{value:"ZIO Config Overview",id:"zio-config-overview",level:2},{value:"Loading Configuration Settings from a File",id:"loading-configuration-settings-from-a-file",level:2},{value:"Client and Server Configuration",id:"client-and-server-configuration",level:2},{value:"Predefined Configuration Schemas",id:"predefined-configuration-schemas",level:3},{value:"Loading Configuration Settings from Environment Variables",id:"loading-configuration-settings-from-environment-variables",level:2},{value:"Loading Configuration Settings from an HOCON File",id:"loading-configuration-settings-from-an-hocon-file",level:3},{value:"Customized Layers",id:"customized-layers",level:3},{value:"Summary",id:"summary",level:2}],p={toc:g},c="wrapper";function d(e){let{components:n,...o}=e;return(0,a.yg)(c,(0,i.A)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"When building HTTP applications, it is common to have configuration settings that need to be loaded from various sources such as environment variables, system properties, or configuration files. It is essential especially when deploying applications to different environments like development, testing, and production, or we want to have a cloud-native application that can be configured dynamically."),(0,a.yg)("p",null,"ZIO HTTP provides seamless integration with ",(0,a.yg)("a",{parentName:"p",href:"https://zio.dev/zio-config/"},"ZIO Config"),", a powerful configuration library for ZIO, to manage configurations in your HTTP applications."),(0,a.yg)("p",null,"In this guide, we will learn how to integrate ZIO HTTP with ZIO Config to load configuration settings for our HTTP applications."),(0,a.yg)("h2",{id:"zio-config-overview"},"ZIO Config Overview"),(0,a.yg)("p",null,"The ZIO core library has a built-in configuration system that allows us to define a type-safe configuration schema, load configurations from various sources, validate configurations, and access configuration settings in a functional way."),(0,a.yg)("p",null,"We can define a configuration schema for any custom data type. For example, if we have a ",(0,a.yg)("inlineCode",{parentName:"p"},"DatabaseConfig")," case class as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"case class DatabaseConfig(\n  url: String,\n  username: String,\n  password: String,\n  poolSize: Int,\n)\n")),(0,a.yg)("p",null,"We can derive a configuration schema for ",(0,a.yg)("inlineCode",{parentName:"p"},"DatabaseConfig")," using ZIO Config as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.config._\nimport zio.config.magnolia._\n\nobject DatabaseConfig {\n  val config: Config[DatabaseConfig] =\n    DeriveConfig.deriveConfig[DatabaseConfig]\n      .mapKey(toSnakeCase)\n      .nested("database")\n}\n')),(0,a.yg)("p",null,"Now, we can load the configuration settings for ",(0,a.yg)("inlineCode",{parentName:"p"},"DatabaseConfig")," by calling ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO.config(DatabaseConfig.config)"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  def run = {\n    for {\n      config <- ZIO.config(DatabaseConfig.config)\n      _      <- ZIO.debug("Just started right now!")\n      _      <- ZIO.debug(s"Connecting to the database: ${config.url}")\n    } yield () \n  }\n}\n')),(0,a.yg)("p",null,"By default, ZIO will load the configs from environment variables, so we need to set the following environment variables:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'export DATABASE_URL="jdbc:postgresql://localhost:5432/mydb"\nexport DATABASE_USERNAME="admin"\nexport DATABASE_PASSWORD="password"\nexport DATABASE_POOL_SIZE=10\n')),(0,a.yg)("h2",{id:"loading-configuration-settings-from-a-file"},"Loading Configuration Settings from a File"),(0,a.yg)("p",null,"As we mentioned earlier, by default, ZIO loads configurations from environment variables. However, we can change the ",(0,a.yg)("inlineCode",{parentName:"p"},"ConfigProvider")," to load configurations from other sources such as system properties, console, and system properties. All of these are built-in providers in the ZIO core library."),(0,a.yg)("p",null,"ZIO Config also provides more advanced ",(0,a.yg)("inlineCode",{parentName:"p"},"ConfigProvider"),"s such as HOCON, JSON, YAML, and XML. Based on the configuration format, we need to add one of the following dependencies to our project:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-config-typesafe" % "4.0.2" // HOCON\nlibraryDependencies += "dev.zio" %% "zio-config-yaml"     % "4.0.2" // YAML and JSON\nlibraryDependencies += "dev.zio" %% "zio-config-xml"      % "4.0.2" // XML\n')),(0,a.yg)("p",null,"Assuming we have an ",(0,a.yg)("inlineCode",{parentName:"p"},"application.conf")," file inside the ",(0,a.yg)("inlineCode",{parentName:"p"},"resources")," directory with the following content:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'database {\n  url: "jdbc:mysql://localhost:3306/mydatabase"\n  url: ${?DATABASE_URL} \n  username: "user"\n  username: ${?DATABASE_USERNAME} \n  password: "password"\n  password: ${?DATABASE_PASSWORD} \n  pool_size: 20\n  pool_size: ${?DATABASE_POOL_SIZE} \n}\n')),(0,a.yg)("p",null,"Then, we can load it using the ",(0,a.yg)("inlineCode",{parentName:"p"},"ConfigProvider.fromResourcePath")," method:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.http._\nimport zio.config.typesafe._\n\nobject MainApp extends ZIOAppDefault {\n  override val bootstrap: ZLayer[ZIOAppArgs, Any, Any] =\n    Runtime.setConfigProvider(ConfigProvider.fromResourcePath())\n\n  def run = \n    for {\n      config <- ZIO.config(DatabaseConfig.config)\n      _      <- ZIO.debug("Just started right now!")\n      _      <- ZIO.debug(s"Connecting to the database: ${config.url}")\n    } yield () \n}\n')),(0,a.yg)("h2",{id:"client-and-server-configuration"},"Client and Server Configuration"),(0,a.yg)("p",null,"Both ",(0,a.yg)("inlineCode",{parentName:"p"},"Client")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Server")," have the ",(0,a.yg)("inlineCode",{parentName:"p"},"default")," layer that requires no configuration and provides an instance of ",(0,a.yg)("inlineCode",{parentName:"p"},"Client")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Server")," with default settings:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"object Client {\n  val default: ZLayer[Any, Throwable, Client] = ???\n}\n\nobject Server {\n  val default: ZLayer[Any, Throwable, Server] = ???\n}\n")),(0,a.yg)("p",null,"In some cases, we need to customize the client or server settings such as timeouts, host, port, and other parameters. To do that, ZIO HTTP provides ",(0,a.yg)("inlineCode",{parentName:"p"},"live")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"customized")," layers that require additional configuration settings:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"object Client {\n  case class Config(\n    // configuration settings for client\n  )\n  \n  val live      : ZLayer[Client.Config with NettyConfig with DnsResolver, Throwable, Client]  = ??? \n  def customized: ZLayer[Client.Config with ClientDriver with DnsResolver, Throwable, Client] = ???\n}\n\nobject Server {\n  case class Config(\n    // configuration settings for server \n  )\n  \n  val live      : ZLayer[Server.Config, Throwable, Server]               = ???\n  val customized: ZLayer[Server.Config & NettyConfig, Throwable, Server] = ???\n}\n")),(0,a.yg)("p",null,"So, to have a customized client or server, we need to provide configuration layers to satisfy the required dependencies. For example, to create a ",(0,a.yg)("inlineCode",{parentName:"p"},"live")," server, we need to provide a ",(0,a.yg)("inlineCode",{parentName:"p"},"ZLayer")," that produces a ",(0,a.yg)("inlineCode",{parentName:"p"},"Server.Config"),"."),(0,a.yg)("p",null,"For a practical example, see the following code which enables the response compression in the server:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala",metastring:'title="zio-http-example/src/main/scala/example/ServerResponseCompression.scala"',title:'"zio-http-example/src/main/scala/example/ServerResponseCompression.scala"'},'package example\n\nimport zio._\n\nimport zio.http._\n\nobject ServerResponseCompression extends ZIOAppDefault {\n  val routes = Routes(\n    Method.GET / "hello" -> handler(Response.text("Hello, World!")),\n  ).sandbox\n\n  val config = ZLayer.succeed(\n    Server.Config.default.copy(\n      responseCompression = Some(Server.Config.ResponseCompressionConfig.default),\n    ),\n  )\n\n  def run = Server.serve(routes).provide(Server.live, config)\n}\n')),(0,a.yg)("p",null,"In the above example, we updated the default server configuration to enable the response compression. Finally, we provided the ",(0,a.yg)("inlineCode",{parentName:"p"},"Server.live")," and our customized config layer to the ",(0,a.yg)("inlineCode",{parentName:"p"},"Server.serve")," method."),(0,a.yg)("h3",{id:"predefined-configuration-schemas"},"Predefined Configuration Schemas"),(0,a.yg)("p",null,"Until now, we changed the server configuration programmatically inside the code. But what if we want to load the client or server configuration from a file, e.g. ",(0,a.yg)("inlineCode",{parentName:"p"},"application.conf"),"? We need to have a configuration schema for the client and server settings, i.e. ",(0,a.yg)("inlineCode",{parentName:"p"},"zio.Config[Client.Config]")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"zio.Config[Server.Config]"),". Fortunately, ZIO HTTP provides these configuration schemas by default."),(0,a.yg)("p",null,"Before going further, let's take a look at the ",(0,a.yg)("inlineCode",{parentName:"p"},"Server.Config")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Client.Config")," and see how are they defined in ZIO HTTP:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"object Client {\n  case class Config(\n    // configuration settings for client\n  )\n  object Config {\n    // Configuration Schema for Cleint.Config\n    val config: zio.Config[Client.Config] = ???\n\n    // default configuration for Client.Config\n    lazy val default: Client.Config = ???\n  }\n}\n\nobject Server {\n  case class Config(\n    // configuration settings for server\n  )\n  object Config {\n    // configuration schema for Server.Config\n    val config: zio.Config[Server.Config] = ???\n\n    // default configuration for Server.Config\n    lazy val default: Server.Config = ???\n  }\n}\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"Server")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Client")," modules have predefined config schema, i.e. ",(0,a.yg)("inlineCode",{parentName:"p"},"Server.Config.config")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Client.Config.config"),", that can be used to load the server/client configuration from the environment, system properties, or any other configuration sources."),(0,a.yg)("h2",{id:"loading-configuration-settings-from-environment-variables"},"Loading Configuration Settings from Environment Variables"),(0,a.yg)("p",null,"As the ZIO HTTP provided these configuration schemas by default, we can easily use them to load the configuration settings from the considered sources using the corresponding ",(0,a.yg)("inlineCode",{parentName:"p"},"ConfigProvider"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.http._\n\nobject MainApp extends ZIOAppDefault {\n  def run = {\n    Server\n      .install(\n        Routes(\n          Method.GET / "hello" -> handler(Response.text("Hello, world!")),\n        ),\n      )\n      .flatMap(port => ZIO.debug(s"Sever started on http://localhost:$port") *> ZIO.never)\n      .provide(\n        Server.live,\n        ZLayer.fromZIO(\n          ZIO.config(Server.Config.config.mapKey(_.replace(\'-\', \'_\'))),\n        ),\n      )\n  }\n}\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"export BINDING_HOST=localhost\nexport BINDING_PORT=8081\n")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"In the above example, we used the ",(0,a.yg)("inlineCode",{parentName:"p"},"mapKey")," method to replace the ",(0,a.yg)("inlineCode",{parentName:"p"},"-")," character with ",(0,a.yg)("inlineCode",{parentName:"p"},"_")," in the configuration keys. This is because the environment variables do not allow the ",(0,a.yg)("inlineCode",{parentName:"p"},"-")," character in the key names.")),(0,a.yg)("h3",{id:"loading-configuration-settings-from-an-hocon-file"},"Loading Configuration Settings from an HOCON File"),(0,a.yg)("p",null,"By changing the ",(0,a.yg)("inlineCode",{parentName:"p"},"ConfigProvider")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"ConfigProvider.fromResourcePath()"),", we can load the server configuration from the ",(0,a.yg)("inlineCode",{parentName:"p"},"application.conf")," file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},"zio.http.server {\n  binding_port: 8083\n  binding_host: localhot\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala",metastring:'title="zio-http-example/src/main/scala/example/config/LoadServerConfigFromHoconFile.scala"',title:'"zio-http-example/src/main/scala/example/config/LoadServerConfigFromHoconFile.scala"'},'package example.config\n\nimport zio._\n\nimport zio.config._\nimport zio.config.typesafe._\n\nimport zio.http._\n\nobject LoadServerConfigFromHoconFile extends ZIOAppDefault {\n  override val bootstrap: ZLayer[ZIOAppArgs, Any, Any] =\n    Runtime.setConfigProvider(ConfigProvider.fromResourcePath())\n\n  def run = {\n    Server\n      .install(\n        Routes(\n          Method.GET / "hello" -> handler(Response.text("Hello, world!")),\n        ),\n      )\n      .flatMap(port => ZIO.debug(s"Sever started on http://localhost:$port") *> ZIO.never)\n      .provide(\n        Server.live,\n        ZLayer.fromZIO(\n          ZIO.config(Server.Config.config.nested("zio.http.server").mapKey(_.replace(\'-\', \'_\'))),\n        ),\n      )\n  }\n}\n')),(0,a.yg)("p",null,"Instead of providing two layers (",(0,a.yg)("inlineCode",{parentName:"p"},"Server.live")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"ZLayer.fromZIO(ZIO.config(Server.Config.config))"),") to the ",(0,a.yg)("inlineCode",{parentName:"p"},"Server.serve")," method, we can combine them into a single layer using the ",(0,a.yg)("inlineCode",{parentName:"p"},"Server.configured")," layer:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala",metastring:'title="zio-http-example/src/main/scala/example/config/HoconWithConfiguredLayerExample.scala"',title:'"zio-http-example/src/main/scala/example/config/HoconWithConfiguredLayerExample.scala"'},'package example.config\n\nimport zio._\n\nimport zio.config.typesafe._\n\nimport zio.http._\n\nobject HoconWithConfiguredLayerExample extends ZIOAppDefault {\n  override val bootstrap: ZLayer[ZIOAppArgs, Any, Any] =\n    Runtime.setConfigProvider(ConfigProvider.fromResourcePath())\n\n  def run = {\n    Server\n      .install(\n        Routes(\n          Method.GET / "hello" -> handler(Response.text("Hello, world!")),\n        ),\n      )\n      .flatMap(port => ZIO.debug(s"Sever started on http://localhost:$port") *> ZIO.never)\n      .provide(Server.configured())\n  }\n}\n')),(0,a.yg)("h3",{id:"customized-layers"},"Customized Layers"),(0,a.yg)("p",null,"If we need to have more control, the ",(0,a.yg)("inlineCode",{parentName:"p"},"Server")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Client")," companion objects have also ",(0,a.yg)("inlineCode",{parentName:"p"},"customized")," layers that require additional configuration settings to customize the underlying settings for the server and client:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Server.customized")," is a layer that requires a ",(0,a.yg)("inlineCode",{parentName:"li"},"Server.Config")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"NettyConfig")," and returns a ",(0,a.yg)("inlineCode",{parentName:"li"},"Server")," layer."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Client.customized")," is a layer that requires a ",(0,a.yg)("inlineCode",{parentName:"li"},"Client.Config"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"NettyConfig"),", and ",(0,a.yg)("inlineCode",{parentName:"li"},"DnsResolver")," and returns a ",(0,a.yg)("inlineCode",{parentName:"li"},"Client")," layer.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.http._\nimport zio.http.netty._\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"object Clinet {\n  case class Config(\n    // configuration settings for client\n  )\n  \n  val customized: ZLayer[Config with ClientDriver with DnsResolver, Throwable, Client] = ???\n}\n\nobject Server {\n  case class Config(\n    // configuration settings for server \n  )\n  \n  val customized: ZLayer[Config & NettyConfig, Throwable, Server] = ???\n}\n")),(0,a.yg)("h2",{id:"summary"},"Summary"),(0,a.yg)("p",null,"In this guide, we learned how to integrate ZIO HTTP with ZIO Config to load configuration settings for our HTTP applications. We also learned how to load configuration settings from environment variables, system properties, and configuration files, such as HOCON and YAML using ZIO Config's configuration providers."))}d.isMDXComponent=!0}}]);