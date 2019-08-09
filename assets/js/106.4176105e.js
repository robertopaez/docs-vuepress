(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{643:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"rundeck-key-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rundeck-key-storage","aria-hidden":"true"}},[e._v("#")]),e._v(" Rundeck Key Storage")]),e._v(" "),a("p",[e._v("This document describes the Rundeck Key Storage mechanism for a developer to implement a secure data flow of sensitive private key data that can be used for sessions via a Rundeck Node Executor.")]),e._v(" "),a("p",[e._v("The structure or hierarchy used for organizing Keys is up to you.")]),e._v(" "),a("p",[e._v('A typical way to store shared keys might be under a "common" or "shared" root. Specific user or project keys might be stored under "user/[username]/" or "project/[name]" paths:')]),e._v(" "),a("ul",[a("li",[a("code",[e._v("common/qa-dev.pem")])]),e._v(" "),a("li",[a("code",[e._v("user/bob/dev1.pem")])]),e._v(" "),a("li",[a("code",[e._v("user/bob/prod1.pem")])]),e._v(" "),a("li",[a("code",[e._v("role/qa/web1.pem")])]),e._v(" "),a("li",[a("code",[e._v("project/project1/default.pem")])])]),e._v(" "),a("h2",{attrs:{id:"acl-policies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acl-policies","aria-hidden":"true"}},[e._v("#")]),e._v(" ACL Policies")]),e._v(" "),a("p",[e._v("Access to the Keys in the Storage facility are restricted by use of [ACL policies](/administration/security/authorization.md#].")]),e._v(" "),a("p",[e._v("Access to the "),a("code",[e._v("keys")]),e._v(" path requires an [Application scope](/administration/security/authorization.md#application-scope-resources-and-actions] authorization.")]),e._v(" "),a("p",[e._v("Within the application scope definition, define access with a "),a("code",[e._v("for")]),e._v(" entry of "),a("code",[e._v("storage")]),e._v(".")]),e._v(" "),a("p",[e._v("Authorization can be granted for these actions:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("create")]),e._v(" - create files")]),e._v(" "),a("li",[a("code",[e._v("update")]),e._v(" - modify files")]),e._v(" "),a("li",[a("code",[e._v("read")]),e._v(" - list directories and view and read files")]),e._v(" "),a("li",[a("code",[e._v("delete")]),e._v(" - delete files")])]),e._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" authorize keys/ storage files\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'rundeck'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("storage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'keys/.*'")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("allow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'keys/test1.pub'")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("allow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("create"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("delete"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'keys/scratch/.*'")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("allow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("create"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("delete"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("h2",{attrs:{id:"api-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-usage","aria-hidden":"true"}},[e._v("#")]),e._v(" API Usage")]),e._v(" "),a("p",[e._v("The [Key Storage API](/api/rundeck-api.md#key-storage] is provided through the standard Rundeck HTTP API. Rundeck should be configured to use HTTPS, and all API access requires either an authentication token, or username and password authentication.")]),e._v(" "),a("p",[e._v("Creating an key entry:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("POST /api/11/storage/keys/{path}/{name}")]),e._v(" "),a("ul",[a("li",[e._v('Stores a key file named "{name}" at a particular path')]),e._v(" "),a("li",[e._v("Request content is stored as-is, and the "),a("code",[e._v("Content-Type")]),e._v(" is stored with the data.")]),e._v(" "),a("li",[e._v('using Content-Type "application/pgp-keys" creates a '),a("strong",[e._v("Public key")])]),e._v(" "),a("li",[e._v('using Content-Type "application/octet-stream" creates a '),a("strong",[e._v("Private key")])])])])]),e._v(" "),a("p",[e._v("Listing entries:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("GET /api/11/storage/keys/{path}/")]),e._v(" "),a("ul",[a("li",[e._v("Lists all entries in the directory, provides a JSON or XML response based on the "),a("code",[e._v("Accept")]),e._v(" request header")])])])]),e._v(" "),a("p",[e._v("Retrieving keys:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("GET /api/11/storage/keys/{path}/{name}")]),e._v(" "),a("ul",[a("li",[e._v("Retrieve the key file data.")]),e._v(" "),a("li",[e._v("Provides a JSON or XML response based on the "),a("code",[e._v("Accept")]),e._v(" request header")])])])]),e._v(" "),a("p",[e._v("If the "),a("code",[e._v("Accept")]),e._v(" header specifies "),a("code",[e._v("*/*")]),e._v(" or the content-type of the file, then the response will be:")]),e._v(" "),a("ul",[a("li",[e._v("For a "),a("strong",[e._v("Public Key")]),e._v(": the public key content")]),e._v(" "),a("li",[e._v("For a "),a("strong",[e._v("Private Key")]),e._v(": a "),a("code",[e._v("403 Unauthorized")]),e._v(" response.")])]),e._v(" "),a("p",[e._v("Deleting an entry:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("DELETE /api/11/storage/keys/{path}/{name}")]),e._v(" "),a("ul",[a("li",[e._v("deletes the entry if it exists and returns "),a("code",[e._v("204")]),e._v(" response")])])])]),e._v(" "),a("h2",{attrs:{id:"storage-backends"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-backends","aria-hidden":"true"}},[e._v("#")]),e._v(" Storage backends")]),e._v(" "),a("p",[e._v("The location of stored Key data can be either on the filesystem, the database, or some external system via usage of a "),a("strong",[e._v("Storage Plugin")]),e._v(".")]),e._v(" "),a("p",[e._v("Rundeck provides these built-in implementations:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("file")]),e._v(" - stores files locally on the filesystem (default)")]),e._v(" "),a("li",[a("code",[e._v("db")]),e._v(" - stores file data as BLOBs in the database")])]),e._v(" "),a("h3",{attrs:{id:"configuring-storage-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-storage-plugins","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuring Storage Plugins")]),e._v(" "),a("p",[e._v("See [Plugins User Guide - Configuring Storage Plugins](/administration/configuration/plugins/configuring.md#storage-plugins].")]),e._v(" "),a("h2",{attrs:{id:"key-data-storage-converter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-data-storage-converter","aria-hidden":"true"}},[e._v("#")]),e._v(" Key Data Storage Converter")]),e._v(" "),a("p",[e._v("Keys can be encrypted in the storage backend by use of a "),a("router-link",{attrs:{to:"/developer/08-storage-converter-plugins.html"}},[e._v("Storage Converter plugin")]),e._v(". A typical plugin would encrypt any private-key data at write time, and decrypt it at read time.")],1),e._v(" "),a("p",[e._v("The Storage Converter Plugin handles reading and writing the content for any matching resources. The subsequent data is stored in the storage backend (on-disk or in a database) alongside the metadata for the file. If necessary, the metadata content can also be encrypted by modifying the data map that is provided.")]),e._v(" "),a("p",[e._v("Converter plugins do not have to manage storing the data, that will be handled by the Storage backend.")]),e._v(" "),a("h3",{attrs:{id:"configuring-storage-converter-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-storage-converter-plugins","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuring Storage Converter Plugins")]),e._v(" "),a("p",[e._v("See [Plugins User Guide - Configuring Storage Converter Plugins](/administration/configuration/plugins/configuring.md#storage-converter-plugins].")]),e._v(" "),a("h2",{attrs:{id:"using-keys-via-rundeck-node-executors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-keys-via-rundeck-node-executors","aria-hidden":"true"}},[e._v("#")]),e._v(" Using Keys via Rundeck Node Executors")]),e._v(" "),a("h3",{attrs:{id:"built-in-jschnodeexecutor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#built-in-jschnodeexecutor","aria-hidden":"true"}},[e._v("#")]),e._v(" Built-in JschNodeExecutor")]),e._v(" "),a("p",[e._v("The provided java-based JschNodeExecutor, which is the default used for Node execution, uses Node attributes to determine the type of authentication used when connecting to the Node via SSH. To select private-key based authentication the Node attribute "),a("code",[e._v("ssh-authentication")]),e._v(" is used:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v('ssh-authentication="privateKey"')]),e._v(" (default value)")])]),e._v(" "),a("p",[e._v("The default and typical usage is to use a private key stored on the local file system specified via the "),a("code",[e._v("ssh-keypath")]),e._v(" attribute.")]),e._v(" "),a("p",[e._v("Use the following attribute to select one of the stored Keys for authentication.")]),e._v(" "),a("p",[e._v("Attribute\n: "),a("code",[e._v("ssh-key-storage-path")])]),e._v(" "),a("p",[e._v("Value\n: "),a("code",[e._v("/keys/{path}/{name}")]),e._v(" - the storage path to the key. Currently all keys are stored under the "),a("code",[e._v("/keys")]),e._v(" top-level path.")]),e._v(" "),a("p",[e._v("The value of the "),a("code",[e._v("ssh-key-storage-path")]),e._v(" attribute can embed values taken from the execution context of the Rundeck job or execution, for example the username of the user running the job. This would be embedded as "),a("code",[e._v("${job.username}")]),e._v(', so to specify use of a key named "default.pem" stored in a path with the username of the executing user, the attribute might be set as:')]),e._v(" "),a("pre",[a("code",[e._v('ssh-key-storage-path="/keys/users/${job.username}/default.pem"\n')])]),e._v(" "),a("p",[e._v("When resolved, this will evaluate to "),a("code",[e._v("/keys/users/bob/default.pem")]),e._v(" (for example).")])])},[],!1,null,null,null);t.default=n.exports}}]);