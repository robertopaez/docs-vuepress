(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{466:function(e,t,a){"use strict";a.r(t);var r=a(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"autotakeover"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autotakeover","aria-hidden":"true"}},[e._v("#")]),e._v(" Autotakeover")]),e._v(" "),a("p",[e._v("To support Autotakeover, you must first:")]),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/administration/cluster/loadbalancer/"}},[e._v("Configure a loadbalancer")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/administration/configuration/database/"}},[e._v("Configure an external database")])],1)]),e._v(" "),a("h3",{attrs:{id:"configure-autotakeover"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-autotakeover","aria-hidden":"true"}},[e._v("#")]),e._v(" Configure Autotakeover")]),e._v(" "),a("p",[e._v("Scheduled jobs are owned by the last cluster member who modified them. Jobs can also be controlled using Cluster Manager. If a cluster member goes down, all scheduled jobs on that cluster member must be moved to another cluster node. This process can be performed automatically using the heartbeat and Autotakeover features in Rundeck Enterprise version 2.1.0 and later releases.")]),e._v(" "),a("p",[e._v("Configure the heartbeat by adding the following settings in "),a("code",[e._v("rundeck-config.properties")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# heartbeat interval in seconds\nrundeck.clusterMode.heartbeat.interval=30\n\n# initial delay after startup to send heartbeat\nrundeck.clusterMode.heartbeat.delay=10\n\n# remote execute/abort message processing interval in seconds\nrundeck.clusterMode.remoteExec.process.interval=10\n\n# age in seconds since last heartbeat to consider another member inactive\nrundeck.clusterMode.heartbeat.considerInactive=150\n\n# age in seconds since last heartbeat to consider another member dead\nrundeck.clusterMode.heartbeat.considerDead=300\n")])])]),a("p",[e._v("Then configure Autotakeover by adding the following settings in "),a("code",[e._v("rundeck-config.properties")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# enables autotakeover for members detected as "dead"\nrundeck.clusterMode.autotakeover.enabled=true\n\n# policy indicates which nodes to take over. "Any": all dead nodes. "Static": only allowed uuids\nrundeck.clusterMode.autotakeover.policy=any\n\n# delay in seconds to wait after sending autotakeover proposal\nrundeck.clusterMode.autotakeover.delay = 60\n\n# sleep in minimum seconds between autotakeover atttempts for a particular destination\nrundeck.clusterMode.autotakeover.sleep = 300\n')])])]),a("p",[e._v("If using static policy, you can configure a list of allowed member UUIDs to proceed with auto take-over if they are marked as dead. If a member is marked as dead and not in this list, auto take-over will not be performed. For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rundeck.clusterMode.autotakeover.config.allowed=<uuid1>,<uuid2>,...\n")])])])])},[],!1,null,null,null);t.default=n.exports}}]);