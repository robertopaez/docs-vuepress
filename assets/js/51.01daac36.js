(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{496:function(e,t,i){"use strict";i.r(t);var n=i(0),o=Object(n.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"replication"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#replication","aria-hidden":"true"}},[e._v("#")]),e._v(" Replication")]),e._v(" "),i("p",[e._v("In order to keep a Rundeck Enterprise Cluster in sync, we provide plugins to replicate Rundeck state across instances.")]),e._v(" "),i("h2",{attrs:{id:"job-replication-plugin"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#job-replication-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" Job Replication Plugin")]),e._v(" "),i("p",[e._v("The Job replication plugin is a SCM Export plugin included with Rundeck Enterprise. It automatically replicates Job definitions to a secondary Rundeck instance whenever a Job is modified within a project.")]),e._v(" "),i("p",[e._v("Enable the plugin in the SCM section of the Configuration page for a project.")]),e._v(" "),i("h3",{attrs:{id:"configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),i("p",[e._v("Endpoint URL")]),e._v(" "),i("p",[e._v(": Remote Rundeck API URL")]),e._v(" "),i("p",[e._v("API Token")]),e._v(" "),i("p",[e._v(": API Token for authentication to the remote Rundeck")]),e._v(" "),i("p",[e._v("Project")]),e._v(" "),i("p",[e._v(": Name of remote Project to use, or "),i("code",[e._v("${job.project}")]),e._v(" to maintain the same name")]),e._v(" "),i("h2",{attrs:{id:"execution-replication-file-storage-plugin"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#execution-replication-file-storage-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" Execution Replication File Storage Plugin")]),e._v(" "),i("p",[e._v("The Execution Replication File Storage Plugin included with Rundeck Enterprise creates a Rundeck formatted Project Archive for each execution, and uploads it to a remote\nRundeck server, to replicate the execution data")]),e._v(" "),i("p",[e._v("Enable the plugin in rundeck-config.properties:")]),e._v(" "),i("pre",[i("code",[e._v("rundeck.execution.logs.fileStoragePlugin=ExecutionReplicationPlugin\n")])]),e._v(" "),i("p",[e._v("Configuration will be defined in framework.properties/project.properties:")]),e._v(" "),i("pre",[i("code",[e._v("framework.plugin.ExecutionFileStorage.ExecutionReplicationPlugin.rundeckUrl=http://host\nframework.plugin.ExecutionFileStorage.ExecutionReplicationPlugin.apiToken=...\nframework.plugin.ExecutionFileStorage.ExecutionReplicationPlugin.outputDir=/tmp\nframework.plugin.ExecutionFileStorage.ExecutionReplicationPlugin.project=${execution.project}\nframework.plugin.ExecutionFileStorage.ExecutionReplicationPlugin.timeout=30\n")])])])},[],!1,null,null,null);t.default=o.exports}}]);