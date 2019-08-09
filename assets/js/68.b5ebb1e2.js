(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{559:function(e,t,r){"use strict";r.r(t);var a=r(0),o=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"remote-job-execution"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#remote-job-execution","aria-hidden":"true"}},[e._v("#")]),e._v(" Remote Job Execution")]),e._v(" "),r("h3",{attrs:{id:"cluster-remote-execution"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cluster-remote-execution","aria-hidden":"true"}},[e._v("#")]),e._v(" Cluster Remote Execution")]),e._v(" "),r("p",[e._v("This feature allows Rundeck Enterprise cluster members to forward job executions to\nother cluster members based on a policy configuration. By default, each member\nof the cluster executes jobs locally and does not forward them. You can define\nmultiple profiles and assign different projects to different profiles. If a job\nis executed in a project which is not assigned to a specific profile, the\ndefault policy is used.")]),e._v(" "),r("p",[e._v("Configure the following remote execution policy parameters in "),r("code",[e._v("rundeck-config.properties")]),e._v(".")]),e._v(" "),r("h4",{attrs:{id:"policy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#policy","aria-hidden":"true"}},[e._v("#")]),e._v(" Policy")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("rundeck.clusterMode.remoteExecution.policy = <Policy>\n")])])]),r("p",[e._v("Choose from the following "),r("code",[e._v("<Policy>")]),e._v(" settings:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("None")]),e._v(" - Default. Executes locally only")]),e._v(" "),r("li",[r("code",[e._v("Random")]),e._v(" - Executes randomly among allowed members")]),e._v(" "),r("li",[r("code",[e._v("RoundRobin")]),e._v(" - Executes round-robin style among allowed members")]),e._v(" "),r("li",[r("code",[e._v("Preset")]),e._v(" - Executes on one other preset member")]),e._v(" "),r("li",[r("code",[e._v("Load")]),e._v(" - Executes on a member based on load (Requires Enterprise Cluster 2.3.0 or a later release. See Enable Load Balanced Policy)")])]),e._v(" "),r("h4",{attrs:{id:"list-of-allowed-members"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#list-of-allowed-members","aria-hidden":"true"}},[e._v("#")]),e._v(" List of Allowed Members")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("rundeck.clusterMode.remoteExecution.config.allowed = <List of Allowed Members>\n")])])]),r("p",[e._v("The "),r("code",[e._v("<List of Allowed Members>")]),e._v(" determines additional cluster members that the policy can execute on. Enter values separated by a comma:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("Self")]),e._v(" - Execute locally")]),e._v(" "),r("li",[r("code",[e._v("Other")]),e._v(" - Any other member except this one")]),e._v(" "),r("li",[r("strong",[e._v("UUID")]),e._v(" - A particular UUID")]),e._v(" "),r("li",[r("code",[e._v("/regex/")]),e._v(" - A regular expression matching a UUID")])]),e._v(" "),r("p",[r("strong",[e._v("Example")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("rundeck.clusterMode.remoteExecution.config.allowed = self,/1C519C5A-4E78-4BE9-85EC-.+/\n")])])]),r("p",[e._v("The example configuration shows Self and a regular expression combined.")]),e._v(" "),r("h4",{attrs:{id:"list-of-member-tags"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#list-of-member-tags","aria-hidden":"true"}},[e._v("#")]),e._v(" List of Member Tags")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("<List of Member Tags>")]),e._v(" parameter allows you to restrict the remote Cluster Members by using tags. The tags are similar to Node Tags. The special tag, Self, is automatically only assigned to the "),r("em",[e._v("local")]),e._v(" cluster node. Set tags for a cluster member in the framework.properties file.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("rundeck.clusterMode.remoteExecution.config.allowedTags = <List of Member Tags>\nrundeck.clusterMode.remoteExecution.config.preferredTags = <List of Member Tags>\nrundeck.clusterMode.remoteExecution.config.activeOnly = true/false\n")])])]),r("p",[r("strong",[e._v("Example")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("rundeck.server.uuid=...\nrundeck.server.tags=worker,linux\n")])])]),r("p",[e._v("Allowed Tags policy is configured in a similar way, using comma-separated allowed values, or "),r("code",[e._v("+")]),e._v(" separated tags, which require all tags. The example defines Round Robin execution on any other cluster member tagged as worker or secondary.")]),e._v(" "),r("p",[r("strong",[e._v("Example")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("rundeck.clusterMode.remoteExecution.policy = RoundRobin\nrundeck.clusterMode.remoteExecution.config.allowed = other\nrundeck.clusterMode.remoteExecution.config.allowedTags = worker,secondary\n")])])]),r("p",[e._v("Use Preferred Tags to indicate that certain members are preferred. When Preferred Tags are defined, and some of the allowed members match those tags, the Preferred Members will be used. If no Preferred Members are available, the policy falls back to the Allowed Members that are available.")]),e._v(" "),r("p",[r("strong",[e._v("Example")])]),e._v(" "),r("p",[e._v("This configuration defines Allowed Tags and Preferred Tags for Round Robin execution on any worker or secondary members, if available. Otherwise, use Round Robin on all other members.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("rundeck.clusterMode.remoteExecution.policy = RoundRobin\nrundeck.clusterMode.remoteExecution.config.allowed = other\nrundeck.clusterMode.remoteExecution.config.allowedTags = *\nrundeck.clusterMode.remoteExecution.config.preferredTags = worker,secondary\n")])])]),r("h4",{attrs:{id:"profile-name"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#profile-name","aria-hidden":"true"}},[e._v("#")]),e._v(" Profile Name")]),e._v(" "),r("p",[e._v("Define additional profiles by name:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("rundeck.clusterMode.remoteExecution.profiles = profile1, profile2\n")])])]),r("h4",{attrs:{id:"project-name"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#project-name","aria-hidden":"true"}},[e._v("#")]),e._v(" Project Name")]),e._v(" "),r("p",[e._v("Assign projects to a profile by name:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("rundeck.clusterMode.remoteExecution.profile.profile1.projects=projectA, projectB\n")])])]),r("p",[e._v("The following example defines a policy type and configuration for profile1:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("rundeck.clusterMode.remoteExecution.profile.profile1.policy= <Policy>\nrundeck.clusterMode.remoteExecution.profile.profile1.config.allowed = <List of Allowed Members>\nrundeck.clusterMode.remoteExecution.profile.profile1.config.allowedTags = <List of Member Tags>\nrundeck.clusterMode.remoteExecution.profile.profile1.config.preferredTags = <List of Member Tags>\nrundeck.clusterMode.remoteExecution.profile.profile1.config.activeOnly = true/false\n")])])]),r("h3",{attrs:{id:"load-balanced-execution-policy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#load-balanced-execution-policy","aria-hidden":"true"}},[e._v("#")]),e._v(" Load Balanced Execution Policy")]),e._v(" "),r("p",[e._v("This feature allows Rundeck Enterprise cluster members to forward job executions to\nother cluster members based on statistics calculated by the heartbeat process\nof each cluster member. Load is calculated for each member based on thread\nratio and the percentage of CPU.")]),e._v(" "),r("p",[e._v("Note: You must be running Rundeck Enterprise 2.3.1 or a later release to use this feature.")]),e._v(" "),r("p",[r("strong",[e._v("Example")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("rundeck.clusterMode.remoteExecution.config.criteria = threadRatio,load\n")])])]),r("p",[e._v("Each criteria can be weighted using a relative value:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("rundeck.clusterMode.remoteExecution.config.weights = 1.0,1.5\n")])])]),r("p",[e._v("Cluster members are sorted by the weighted load and placed into groups. Each\ngroup is given a weight, and the policy randomly chooses a group based on the\nproportional weight of the group. A member of the group is chosen randomly and\nused.")]),e._v(" "),r("p",[r("strong",[e._v("Example")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("rundeck.clusterMode.remoteExecution.config.groupWeight=1,0,0,0\n")])])]),r("p",[e._v("The example defines four groups, each with 25% of the members. The weights define 100% chance of the first group being used.")])])},[],!1,null,null,null);t.default=o.exports}}]);