(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{651:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"azure-resource-model-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#azure-resource-model-source","aria-hidden":"true"}},[e._v("#")]),e._v(" Azure Resource Model Source")]),e._v(" "),s("p",[e._v("The Azure Resource Model Source Plugin provides the Azure VMs as nodes on a Rundeck Server.")]),e._v(" "),s("p",[e._v("The source code lives at "),s("a",{attrs:{href:"https://github.com/rundeck-plugins/rundeck-azure-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/rundeck-plugins/rundeck-azure-plugin"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"credentials-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#credentials-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" Credentials Settings")]),e._v(" "),s("p",[e._v("Settings related to the Azure connection")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Client ID")]),e._v(": Azure Client ID.")]),e._v(" "),s("li",[s("strong",[e._v("Tenant ID")]),e._v(": Azure Tenant ID.")]),e._v(" "),s("li",[s("strong",[e._v("Subscription ID")]),e._v(": Azure Subscription ID.")]),e._v(" "),s("li",[s("strong",[e._v("Azure Access Key")]),e._v(": Azure Access Key.")]),e._v(" "),s("li",[s("strong",[e._v("Certificate Path")]),e._v(": (Optional) Azure certificate file path (if the access key is not defined).")]),e._v(" "),s("li",[s("strong",[e._v("Certificate Password")]),e._v(": (Optional) Azure certificate Password (if the access key is not defined).")])]),e._v(" "),s("h3",{attrs:{id:"other-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" Other Settings:")]),e._v(" "),s("p",[e._v("Mapping and filter settings")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Mapping Params")]),e._v(': Custom mapping settings. Property mapping definitions. Specify multiple mappings in the form "attributeName.selector=selector" or "attributeName.default=value", separated by ";"')]),e._v(" "),s("li",[s("strong",[e._v("Resource Group")]),e._v(": Filter using resource group")]),e._v(" "),s("li",[s("strong",[e._v("Only Running Instances")]),e._v(': Filter for the "Running" instances. If false, all instances will be returned.')])]),e._v(" "),s("h3",{attrs:{id:"mapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapping","aria-hidden":"true"}},[e._v("#")]),e._v(" Mapping")]),e._v(" "),s("p",[e._v("Map the Azure VM properties to Rundeck Node definition")]),e._v(" "),s("h4",{attrs:{id:"default-mapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-mapping","aria-hidden":"true"}},[e._v("#")]),e._v(" Default Mapping")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("nodename.selector                   =    name\nhostname.selector                   =    hostname\ndescription.selector                =    short_description\nosName.selector                     =    osName\nosVersion.selector                  =    osVersion\nosFamily.selector                   =    osFamily\nusername.selector                   =    username\nregion.selector                     =    azure_region\nresourceGroup.selector              =    azure_resourceGroup\nstatus.selector                     =    azure_status\nid.selector                         =    azure_id\nnode-executor.selector              =    node_executor\nfile-copier.selector                =    file_copier\nvmId.selector                       =    azure_vmId\ntags.selector                       =    tags\n\nimage:type.selector                 =    azure_image_type\nimage:offer.selector                =    azure_image_offer\nimage:sku.selector                  =    azure_image_sku\nimage:version.selector              =    azure_image_version\nosDisk:osType.selector              =    azure_osDisk_osType\nosDisk:name.selector                =    azure_osDisk_name\nosDisk:createOption.selector        =    azure_osDisk_createOption\nosDisk:diskSizeGB.selector          =    azure_osDisk_diskSizeGB\n\nplan:name.selector                  =    azure_plan_name\nplan:product.selector               =    azure_plan_product\nplan:publisher.selector             =    azure_plan_publisher\n\nsize:name.selector                              =    azure_size_name\nsize:numberOfCores.selector                     =    azure_size_numberOfCores\nsize:memoryInMB.selector                        =    azure_size_memoryInMB\nsize:maxDataDiskCount.selector                  =    azure_size_maxDataDiskCount\nsize:azure_size_resourceDiskSizeInMB.selector   =    azure_size_azure_size_resourceDiskSizeInMB\n\nprovisioningState:code.selector                 =    azure_provisioningState_code\nprovisioningState:displayStatus.selector        =    azure_provisioningState_displayStatus\nprovisioningState:message.selector              =    azure_provisioningState_message\nprovisioningState:time.selector                 =    azure_provisioningState_time\n\n")])])]),s("h3",{attrs:{id:"adding-tags-from-azure-vm-tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-tags-from-azure-vm-tags","aria-hidden":"true"}},[e._v("#")]),e._v(" Adding Tags from Azure VM Tags")]),e._v(" "),s("p",[e._v("You can add Rundeck's node tags using Azure VM tags.")]),e._v(" "),s("p",[e._v("For example, create an Azure VM tags like:")]),e._v(" "),s("ul",[s("li",[e._v("Rundeck-Tags=sometag1,sometag2")])]),e._v(" "),s("p",[s("code",[e._v("sometag1")]),e._v(" and "),s("code",[e._v("sometag2")]),e._v(" will be added as tags on Rundeck nodes")]),e._v(" "),s("h3",{attrs:{id:"adding-custom-tags-from-azure-vm-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-custom-tags-from-azure-vm-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Adding custom tags from Azure VM files")]),e._v(" "),s("p",[e._v("You can add extra tags using the azure fields available (right column on the default mapping).")]),e._v(" "),s("p",[e._v("For example, adding extra tags based on the VM resource group and status:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("tags.selector=azure_resourceGroup,azure_status;\n")])])]),s("h3",{attrs:{id:"adding-custom-attribute-based-on-azure-vm-tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-custom-attribute-based-on-azure-vm-tags","aria-hidden":"true"}},[e._v("#")]),e._v(" Adding custom attribute based on Azure VM Tags")]),e._v(" "),s("p",[e._v("Also, you can add extra nodes attributes using Azure VM tags.")]),e._v(" "),s("p",[e._v("For example, creating the following tags on the Azure VM, you can map those tags to a rundeck node attribute:")]),e._v(" "),s("ul",[s("li",[e._v("Rundeck-node-executor=winrm-exe")]),e._v(" "),s("li",[e._v("Rundeck-file-copier=winrm-filecopier")]),e._v(" "),s("li",[e._v("Rundeck-winrm-password-storage-path=keys/node/windows.password")])]),e._v(" "),s("p",[e._v("As you see, the Azure VM tags must start with "),s("strong",[e._v("Rundeck-")])]),e._v(" "),s("p",[e._v("Then to map those tags to nodes attribute use:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("node-executor.selector=node-executor;\nfile-copier.selector=node-executor;\nwinrm-password-storage-path.selector=winrm-password-storage-path\n")])])])])},[],!1,null,null,null);t.default=r.exports}}]);