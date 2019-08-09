(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{595:function(e,t,r){"use strict";r.r(t);var a=r(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"enterprise-quickstart"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enterprise-quickstart","aria-hidden":"true"}},[e._v("#")]),e._v(" Enterprise Quickstart")]),e._v(" "),r("h3",{attrs:{id:"what-is-rundeck"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-is-rundeck","aria-hidden":"true"}},[e._v("#")]),e._v(" What is Rundeck?")]),e._v(" "),r("p",[e._v("Rundeck is an open source web app that lets system operators repeatably and securely execute operations procedures in production and other environment contexts.")]),e._v(" "),r("h3",{attrs:{id:"what-is-rundeck-enterprise"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-is-rundeck-enterprise","aria-hidden":"true"}},[e._v("#")]),e._v(" What is Rundeck Enterprise?")]),e._v(" "),r("p",[e._v("What differentiates Rundeck Enterprise from the OSS Rundeck version is . . . .")]),e._v(" "),r("h3",{attrs:{id:"how-can-i-try-out-rundeck-enterprise"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-try-out-rundeck-enterprise","aria-hidden":"true"}},[e._v("#")]),e._v(" How can I try out Rundeck Enterprise?")]),e._v(" "),r("p",[r("strong",[e._v("Note:")]),e._v(" this setup is meant for evaluating Rundeck on your local workstation. For a guide to setting up Rundeck Enterprise in production see "),r("router-link",{attrs:{to:"/administration/install/"}},[e._v("Installation")]),e._v(".")],1),e._v(" "),r("ol",[r("li",[r("p",[e._v("Fill out the "),r("a",{attrs:{href:"https://www.rundeck.com/download-now",target:"_blank",rel:"noopener noreferrer"}},[e._v("download form"),r("OutboundLink")],1),e._v(" to access the download page.")])]),e._v(" "),r("li",[r("p",[e._v("Click on "),r("code",[e._v("➤ Cluster")]),e._v(" and click on the the file ending in "),r("code",[e._v(".jar")]),e._v(" to start the download.")])]),e._v(" "),r("li",[r("p",[e._v("Once the download is finished verify that the file's checksum matches the expected checksum:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("shasum -a 1 ~/Downloads/rundeckpro-launcher-cluster-${VERSION_FULL}.jar\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Run the "),r("code",[e._v(".jar")]),e._v(" file:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("java -XX:MaxPermSize=256m -Xmx1024m -jar ~/Downloads/rundeckpro-launcher-cluster-${VERSION_FULL}.jar\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Once you see something similar to following log output, you know the server is ready:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("2018-04-23 16:18:58.889:INFO:oejs.ServerConnector:main: Started ServerConnector@2dcf960d{HTTP/1.1}{0.0.0.0:4440}\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Navigate to "),r("a",{attrs:{href:"http://localhost:4440/user/login",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:4440/"),r("OutboundLink")],1),e._v(" in a browser")])]),e._v(" "),r("li",[r("p",[e._v("Log in with the username "),r("strong",[e._v("admin")]),e._v(" and password "),r("strong",[e._v("admin")])])])]),e._v(" "),r("p",[e._v("Rundeck Enterprise is now running on your workstation for you to evaluate!")]),e._v(" "),r("h3",{attrs:{id:"encrypted-key-config-storage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#encrypted-key-config-storage","aria-hidden":"true"}},[e._v("#")]),e._v(" Encrypted key/config storage")]),e._v(" "),r("p",[e._v("Encrypted key/config storage enabled by default. The default encryption algorithm is stronger than the “Default JCE Policy” used in earlier versions of Java 1.8")]),e._v(" "),r("p",[e._v("Note: If you receive an error message about encryption policy strength with creating projects or keys you will need to upgrade your Java 1.8 version, or set the encryption algorithm in "),r("code",[e._v("rundeck-config.properties")]),e._v(" to a lower strength algorithm such as "),r("code",[e._v("PBEWithMD5AndDES")])]),e._v(" "),r("p",[e._v("Further information about encrypted key/config storage on [this](/administration/configuration/plugins/bundled-plugins.md#jasypt-encryption-plugin] link.")]),e._v(" "),r("h3",{attrs:{id:"what-is-next"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-is-next","aria-hidden":"true"}},[e._v("#")]),e._v(" What is next?")]),e._v(" "),r("p",[e._v("Next, learn how to "),r("router-link",{attrs:{to:"/manual/03-getting-started.html#project-setup"}},[e._v("create your first Rundeck Enterprise project")])],1)])},[],!1,null,null,null);t.default=n.exports}}]);