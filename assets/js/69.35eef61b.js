(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{562:function(e,t,r){"use strict";r.r(t);var a=r(0),o=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"storage-facility"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#storage-facility","aria-hidden":"true"}},[e._v("#")]),e._v(" Storage Facility")]),e._v(" "),r("p",[e._v("This document describes the Rundeck Storage Facility which is used both for Key Storage, and for Project Definition Storage.")]),e._v(" "),r("h2",{attrs:{id:"storage-facility-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#storage-facility-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Storage Facility")]),e._v(" "),r("p",[e._v('The Storage facility provides a filesystem-like structure for storing files. Each file is located with a "/"-separated "path" and a name, similar to a file system path.')]),e._v(" "),r("p",[e._v("Currently the Storage Facility is split into two separate containers:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#key-storage"}},[e._v("Key Storage")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#project-storage"}},[e._v("Project Storage")])])]),e._v(" "),r("p",[e._v("Both containers use the same storage mechanisms, but they can be configured independently of each other,\nand have different APIs for modification.")]),e._v(" "),r("h2",{attrs:{id:"key-storage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#key-storage","aria-hidden":"true"}},[e._v("#")]),e._v(" Key Storage")]),e._v(" "),r("p",[e._v("The Key Storage container allows storing public keys, private keys, and passwords securely. The\ncontents of these files can be accessed by Node Execution plugins for authenticating to remote nodes.\nThe contents can be written via the Rundeck API, but only public keys can be read via the API.")]),e._v(" "),r("p",[e._v("See the chapter: "),r("router-link",{attrs:{to:"/administration/security/key-storage.html"}},[e._v("Key Storage")]),e._v(".")],1),e._v(" "),r("p",[e._v("When configuring Key Storage providers, the configuration entries in "),r("code",[e._v("rundeck-config.properties")]),e._v(" start with:")]),e._v(" "),r("pre",[r("code",[e._v("rundeck.storage.provider.[index]\n")])]),e._v(" "),r("p",[e._v("And converter plugins start with:")]),e._v(" "),r("pre",[r("code",[e._v("rundeck.storage.converter.[index]\n")])]),e._v(" "),r("h2",{attrs:{id:"project-storage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#project-storage","aria-hidden":"true"}},[e._v("#")]),e._v(" Project Storage")]),e._v(" "),r("p",[e._v("Similar to Key Storage, the Project Storage container keeps files related to Rundeck Projects:")]),e._v(" "),r("ul",[r("li",[e._v("contents of "),r("code",[e._v("etc/project.properties")]),e._v(" - the Project configuration")]),e._v(" "),r("li",[e._v("contents of "),r("code",[e._v("readme.md")]),e._v(" and "),r("code",[e._v("motd.md")]),e._v(" - Readme and MOTD files")])]),e._v(" "),r("p",[e._v("Access to these contents can be made via the Rundeck API.")]),e._v(" "),r("p",[e._v("See the chapter: "),r("router-link",{attrs:{to:"/administration/projects/configuration.html"}},[e._v("Project Setup")])],1),e._v(" "),r("p",[e._v("When configuring Project Storage providers, the configuration entries in "),r("code",[e._v("rundeck-config.properties")]),e._v(" start with:")]),e._v(" "),r("pre",[r("code",[e._v("rundeck.config.storage.provider.[index]\n")])]),e._v(" "),r("p",[e._v("And converter plugins start with:")]),e._v(" "),r("pre",[r("code",[e._v("rundeck.config.storage.converter.[index]\n")])]),e._v(" "),r("h2",{attrs:{id:"storage-backends"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#storage-backends","aria-hidden":"true"}},[e._v("#")]),e._v(" Storage backends")]),e._v(" "),r("p",[e._v("The location of stored data can be either on the filesystem, the database, or some external system via usage of a "),r("strong",[e._v("Storage Plugin")]),e._v(".")]),e._v(" "),r("p",[e._v("Rundeck provides these built-in implementations:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("filesystem")]),e._v(" - stores files locally on the filesystem")]),e._v(" "),r("li",[r("code",[e._v("db")]),e._v(" - stores file data as BLOBs in the database")])]),e._v(" "),r("p",[e._v("It is highly recommended that you configure Rundeck to use a relational database instead of the default file-based data storage.")]),e._v(" "),r("p",[e._v("For information on configuring Rundeck to use specific Databases, see:")]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/administration/configuration/database/"}},[e._v("Administor Guide > Rundeck Configuration > Database")])],1)]),e._v(" "),r("p",[e._v("To develop your own storage plugin, see:")]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/developer/07-storage-plugin.html"}},[e._v("Storage Plugin Development")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"storage-converters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#storage-converters","aria-hidden":"true"}},[e._v("#")]),e._v(" Storage Converters")]),e._v(" "),r("p",[e._v("Files can be encrypted in the storage backend by use of a "),r("router-link",{attrs:{to:"/developer/08-storage-converter-plugins.html"}},[e._v("Storage Converter plugin")]),e._v(". A typical plugin would encrypt data at write time, and decrypt it at read time.")],1),e._v(" "),r("p",[e._v("The Storage Converter Plugin handles reading and writing the content for any matching resources. The subsequent data is stored in the storage backend (on-disk or in a database) alongside the metadata for the file.")]),e._v(" "),r("p",[e._v("Converter plugins do not have to manage storing the data, that will be handled by the Storage backend.")]),e._v(" "),r("p",[e._v("To develop your own storage converter plugin, see:")]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/developer/08-storage-converter-plugins.html"}},[e._v("Storage Converter Plugin Development")]),e._v(".")],1)]),e._v(" "),r("h3",{attrs:{id:"using-encryption"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#using-encryption","aria-hidden":"true"}},[e._v("#")]),e._v(" Using Encryption")]),e._v(" "),r("p",[e._v("Rundeck provides a bundled Storage Converter plugin implementation:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("jasypt-encryption")]),e._v(" - encrypts the storage contents: (/administration/configuration/plugins/bundled-plugins.md#jasypt-encryption-plugin])")])])])},[],!1,null,null,null);t.default=o.exports}}]);