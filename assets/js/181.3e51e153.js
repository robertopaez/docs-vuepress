(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{525:function(e,r,t){"use strict";t.r(r);var n=t(0),o=Object(n.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"version-2-5-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version-2-5-0","aria-hidden":"true"}},[e._v("#")]),e._v(" Version 2.5.0")]),e._v(" "),t("h1",{attrs:{id:"release-2-5-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#release-2-5-0","aria-hidden":"true"}},[e._v("#")]),e._v(" Release 2.5.0")]),e._v(" "),t("p",[e._v("=============")]),e._v(" "),t("p",[e._v("Date: 2015-04-15")]),e._v(" "),t("p",[e._v("Name: "),t("span",{staticStyle:{color:"saddlebrown"}},[t("span",{staticClass:"glyphicon glyphicon-grain"}),e._v(' "cafe au lait saddlebrown grain"')])]),e._v(" "),t("p",[e._v("This release has many new features and bugfixes, and contains some refactoring under the hood.")]),e._v(" "),t("h2",{attrs:{id:"new-features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-features","aria-hidden":"true"}},[e._v("#")]),e._v(" New Features")]),e._v(" "),t("ul",[t("li",[e._v("Upgraded grails framework, which adds support for Java 8 (and removes Java 6)")]),e._v(" "),t("li",[e._v("Can now store Project definition and configuration in the database (optional), see [Project Definitions](/administration/projects/configuration.md#project-definitions] and information in the "),t("a",{attrs:{href:"http://rundeck.org/2.5.0/upgrading/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Upgrade Guide"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("Improved GUI for administering a project: modify Project configuration file contents, and readme.md/motd.md contents. Project archiving is also now performed asynchronously.")]),e._v(" "),t("li",[e._v("New Jasypt encryption plugin can be used for Key Storage and Project Configuration, see "),t("router-link",{attrs:{to:"/plugins/#jasypt-encryption-converter-plugin"}},[e._v("Jasypt Encryption Converter Plugin")])],1),e._v(" "),t("li",[e._v("Support Key Storage password for SSH sudo and SSH private key passphrase")]),e._v(" "),t("li",[e._v("New workflow step plugin: Assert state of another Job, optionally halt workflow with custom status string")]),e._v(" "),t("li",[e._v("New "),t("code",[e._v("rd-acl")]),e._v(" commandline tool can list test and generate .aclpolicy file contents, see "),t("router-link",{attrs:{to:"/manpages/man1/rd-acl.html"}},[e._v("rd-acl")])],1),e._v(" "),t("li",[e._v("New Orchestrator plugin point. Orchestrators can be used to batch and sequence the matched nodes used in node dispatching, e.g.: only allow a certain % to run simultaneously.\n"),t("ul",[t("li",[t("router-link",{attrs:{to:"/plugins/"}},[e._v("Plugins User Guide -  Orchestrator Plugins")])],1),e._v(" "),t("li",[t("router-link",{attrs:{to:"/developer/09-orchestrator-plugin.html"}},[e._v("Plugin Developer Guide -  Orchestrator Plugin")])],1),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/tree/development/examples/example-java-orchestrator-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example code"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[e._v("Added hybrid LDAP + properties file group authentication for JAAS ("),t("code",[e._v("JettyCombinedLdapLoginModule")]),e._v(")\n"),t("ul",[t("li",[t("router-link",{attrs:{to:"/history/http//rundeck.org/2.5.0/administration/authenticating-users.html#combining-ldap-with-other-modules"}},[e._v("Administration - Authentication - Combining LDAP with other modules")])],1)])])]),e._v(" "),t("h2",{attrs:{id:"upgrading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrading")]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" We've attempted to maintain compatibility with previous plugins, but due to changes in the core library,\nRundeck may have issues loading or running some plugins.")]),e._v(" "),t("p",[e._v("Please report issues found to "),t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github issues"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("See the "),t("router-link",{attrs:{to:"/upgrading/upgrading.html"}},[e._v("Upgrading Guide")])],1),e._v(" "),t("h2",{attrs:{id:"contributors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contributors","aria-hidden":"true"}},[e._v("#")]),e._v(" Contributors")]),e._v(" "),t("ul",[t("li",[e._v("Andreas Knifh")]),e._v(" "),t("li",[e._v("Greg Schueler (gschueler)")]),e._v(" "),t("li",[e._v("Mark Bidewell (mbidewell)")]),e._v(" "),t("li",[e._v("Mayank Asthana (mayankasthana)")]),e._v(" "),t("li",[e._v("Puru Tuladhar (tuladhar)")]),e._v(" "),t("li",[e._v("Thomas Mueller (vinzent)")]),e._v(" "),t("li",[e._v("Yagi (yagince)")]),e._v(" "),t("li",[e._v("ashley-taylor")]),e._v(" "),t("li",[e._v("new23d")])]),e._v(" "),t("h2",{attrs:{id:"bug-reporters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug-reporters","aria-hidden":"true"}},[e._v("#")]),e._v(" Bug Reporters")]),e._v(" "),t("ul",[t("li",[e._v("MartinMulder")]),e._v(" "),t("li",[e._v("MartyNeal")]),e._v(" "),t("li",[e._v("Zophar78")]),e._v(" "),t("li",[e._v("adamhamner")]),e._v(" "),t("li",[e._v("ahonor")]),e._v(" "),t("li",[e._v("ashley-taylor")]),e._v(" "),t("li",[e._v("brismuth")]),e._v(" "),t("li",[e._v("danifr")]),e._v(" "),t("li",[e._v("dbeckham")]),e._v(" "),t("li",[e._v("ffk23")]),e._v(" "),t("li",[e._v("gschueler")]),e._v(" "),t("li",[e._v("hirsts")]),e._v(" "),t("li",[e._v("hjdr4")]),e._v(" "),t("li",[e._v("knifhen")]),e._v(" "),t("li",[e._v("mayankasthana")]),e._v(" "),t("li",[e._v("mbidewell")]),e._v(" "),t("li",[e._v("mgherman")]),e._v(" "),t("li",[e._v("mikagika")]),e._v(" "),t("li",[e._v("new23d")]),e._v(" "),t("li",[e._v("reigner-yrastorza")]),e._v(" "),t("li",[e._v("travisgroth")]),e._v(" "),t("li",[e._v("tuladhar")]),e._v(" "),t("li",[e._v("vinzent")]),e._v(" "),t("li",[e._v("yagince")])]),e._v(" "),t("h2",{attrs:{id:"issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#issues","aria-hidden":"true"}},[e._v("#")]),e._v(" Issues")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1164",target:"_blank",rel:"noopener noreferrer"}},[e._v("Project config page: plugin properties of wrong scope displayed"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1163",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security: Script plugins: password rendering option plugin property files not properly obscured"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1161",target:"_blank",rel:"noopener noreferrer"}},[e._v("Display of active jobs maxes out at 20"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1158",target:"_blank",rel:"noopener noreferrer"}},[e._v("dispatch command does not work when project config stored in RDB"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1150",target:"_blank",rel:"noopener noreferrer"}},[e._v("Schedules don't launch"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/1149",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fix LDAP nested groups for Active Directory"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1148",target:"_blank",rel:"noopener noreferrer"}},[e._v("Documentation: Database docs link to 404 Not Found"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/1143",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fixed typo in command in docs and grammar"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/1135",target:"_blank",rel:"noopener noreferrer"}},[e._v("Project definitions and configuration stored in DB"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/1134",target:"_blank",rel:"noopener noreferrer"}},[e._v("Refactor authorization into components, add preauth attribute role"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/1133",target:"_blank",rel:"noopener noreferrer"}},[e._v("Support ServerAliveInterval and ServerAliveCountMax"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1131",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rundeck v2.4.0-1 rundeck not deleting dispatch files"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1129",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dispatched inline script has race condition with crontab"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1128",target:"_blank",rel:"noopener noreferrer"}},[e._v("Storage provider/converter config info on Plugins page is wrong"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/1127",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add default storage encryption plugin"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/1124",target:"_blank",rel:"noopener noreferrer"}},[e._v("JettyPamLoginModule: supplementalRoles split regex requires whitespace"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1122",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using SSH stored password for sudo"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1121",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jobs initiated from the crontab do not respect the timeout value given for that job"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1120",target:"_blank",rel:"noopener noreferrer"}},[e._v("Script plugin non-instance configuration fails"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1119",target:"_blank",rel:"noopener noreferrer"}},[e._v('Add "server uuid" element to the Execution info'),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1118",target:"_blank",rel:"noopener noreferrer"}},[e._v("API doc: Getting Project Info response xml has bad formatting"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1114",target:"_blank",rel:"noopener noreferrer"}},[e._v("${result.resultCode} is not available in the error handler for a Local Command Plugin step."),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/1105",target:"_blank",rel:"noopener noreferrer"}},[e._v("job state conditional plugin"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1104",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add workflow step plugin: Assert state of another Job, optionally halt workflow with custom status string"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1095",target:"_blank",rel:"noopener noreferrer"}},[e._v("GUI: 2.4.x: Custom property input fields for node-step plugins style issues"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1094",target:"_blank",rel:"noopener noreferrer"}},[e._v("Export archive does not work"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1092",target:"_blank",rel:"noopener noreferrer"}},[e._v("LDAP auth requests have no timeout"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1090",target:"_blank",rel:"noopener noreferrer"}},[e._v("upload jobs page: after uploading, Delete action from action menu should be available"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1089",target:"_blank",rel:"noopener noreferrer"}},[e._v("List Plugins admin page should show Resource Model Source providers"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1088",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scheduled jobs without a default value for required options fail to run"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1087",target:"_blank",rel:"noopener noreferrer"}},[e._v("'Algorithm negotiation fail'  JSCH"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/1075",target:"_blank",rel:"noopener noreferrer"}},[e._v("Upgrade grails to 2.4.4"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/1074",target:"_blank",rel:"noopener noreferrer"}},[e._v('Launcher: fix "nohup: redirecting stderr to stdout" warning'),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1056",target:"_blank",rel:"noopener noreferrer"}},[e._v("Inline scripts for jobs do not honor File Copy Settings"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/1043",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add text/plain MIME type for YAML files"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/1026",target:"_blank",rel:"noopener noreferrer"}},[e._v("Support project-specific email template overrides"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/920",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add support for Java 8"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/859",target:"_blank",rel:"noopener noreferrer"}},[e._v("aclpolicy validation/builder tool"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/826",target:"_blank",rel:"noopener noreferrer"}},[e._v("adding orchestrator"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/808",target:"_blank",rel:"noopener noreferrer"}},[e._v("The run shell tool can clobber plugin cache"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/608",target:"_blank",rel:"noopener noreferrer"}},[e._v("Allow hybrid LDAP + properties file group authentication"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/232",target:"_blank",rel:"noopener noreferrer"}},[e._v("add configurable timeout for remote option URLs"),t("OutboundLink")],1)])])])},[],!1,null,null,null);r.default=o.exports}}]);