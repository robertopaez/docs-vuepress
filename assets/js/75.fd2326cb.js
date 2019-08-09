(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{585:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"installing-on-centos-or-red-hat-linux-distributions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-on-centos-or-red-hat-linux-distributions","aria-hidden":"true"}},[a._v("#")]),a._v(" Installing on CentOS or Red Hat Linux distributions")]),a._v(" "),s("h2",{attrs:{id:"open-source-rundeck"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#open-source-rundeck","aria-hidden":"true"}},[a._v("#")]),a._v(" Open Source Rundeck")]),a._v(" "),s("h3",{attrs:{id:"install-with-yum"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-with-yum","aria-hidden":"true"}},[a._v("#")]),a._v(" Install with yum")]),a._v(" "),s("p",[a._v("You can use this script to add the Rundeck yum repo and install Rundeck:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -Uvh http://repo.rundeck.org/latest.rpm\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" rundeck java\n")])])]),s("p",[a._v("When new versions of Rundeck are released, you can upgrade to them using the command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum update rundeck\n")])])]),s("h3",{attrs:{id:"install-rpm-package-directly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-rpm-package-directly","aria-hidden":"true"}},[a._v("#")]),a._v(" Install rpm package directly")]),a._v(" "),s("p",[a._v("Download rpm package: http://rundeck.org/downloads.html and run:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -i rundeck-x.x.x.noarch.rpm rundeck-config-x.x.x.noarch.rpm\n")])])]),s("h2",{attrs:{id:"rundeck-enterprise"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rundeck-enterprise","aria-hidden":"true"}},[a._v("#")]),a._v(" Rundeck Enterprise")]),a._v(" "),s("h3",{attrs:{id:"install-with-yum-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-with-yum-2","aria-hidden":"true"}},[a._v("#")]),a._v(" Install with yum")]),a._v(" "),s("p",[a._v("You can use this script to add the Rundeck Enterprise yum repo and install Rundeck Enterprise cluster:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" https://bintray.com/rundeckpro/rpm/rpm "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tee")]),a._v(" /etc/yum.repos.d/bintray-rundeckpro-rpm.repo\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" java rundeckpro-cluster\n")])])]),s("p",[a._v("When new versions of Rundeck Enterprise are released, you can upgrade to them using the command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum update rundeckpro-cluster\n")])])]),s("h3",{attrs:{id:"install-rpm-package-directly-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-rpm-package-directly-2","aria-hidden":"true"}},[a._v("#")]),a._v(" Install rpm package directly")]),a._v(" "),s("p",[a._v("Download rpm package: http://download.rundeck.com/eval/ and run:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -i rundeckpro-cluster-X.X.X-GA.noarch.rpm\n")])])]),s("h2",{attrs:{id:"starting-rundeck"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#starting-rundeck","aria-hidden":"true"}},[a._v("#")]),a._v(" Starting Rundeck")]),a._v(" "),s("p",[a._v("To start Rundeck:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" rundeckd start\n")])])]),s("p",[a._v("To verify that the service started correctly, tail the logs:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" -f /var/log/rundeck/service.log\n")])])]),s("p",[a._v("The service is ready once you see something similar to:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2018")]),a._v("-04-25 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v(":21:53.203:INFO:oejs.ServerConnector:main: Started ServerConnector@7d593bbc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("HTTP/1.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:4440"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"logging-in-for-the-first-time"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logging-in-for-the-first-time","aria-hidden":"true"}},[a._v("#")]),a._v(" Logging in for the first time")]),a._v(" "),s("ol",[s("li",[a._v("Navigate to "),s("a",{attrs:{href:"http://localhost:4440/user/login",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:4440/"),s("OutboundLink")],1),a._v(" in a browser")]),a._v(" "),s("li",[a._v("Log in with the username "),s("strong",[a._v("admin")]),a._v(" and password "),s("strong",[a._v("admin")])])]),a._v(" "),s("p",[a._v("Rundeck is now up and running!")]),a._v(" "),s("p",[a._v("Next, learn how to "),s("router-link",{attrs:{to:"/manual/03-getting-started.html#project-setup"}},[a._v("create your first Rundeck Enterprise project")])],1)])},[],!1,null,null,null);t.default=r.exports}}]);