(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{430:function(t,e,n){"use strict";n.r(e);var o=n(0),a=Object(o.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"content-converter-plugins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#content-converter-plugins","aria-hidden":"true"}},[t._v("#")]),t._v(" Content Converter Plugins")]),t._v(" "),n("p",[t._v("Content Converter Plugins allow Step Plugins and Log Filter plugins to\noutput data that can be rendered as HTML into the Execution Log view\nof a Rundeck Job or Adhoc execution.")]),t._v(" "),n("blockquote",[n("p",[t._v("Note: For more information in the operation of Content Converter plugins, and how to create them, see (/developer/content-converter-plugins.md).")])]),t._v(" "),n("p",[t._v("For example, the (/manual/log-filters/render-formatted-data.md) plugin\nallows you to simply mark content in your Log output as "),n("code",[t._v("html")]),t._v(" or "),n("code",[t._v("markdown")]),t._v("\nand the appropriate Content Converter plugin(s) will be invoked to render\nthe content correctly when you view it in the GUI. Rundeck also knows how to chain up to two plugins together\nto produce "),n("code",[t._v("text/html")]),t._v(" output for the Log View. This allows some plugins to\nsimply parse formatted data such as CSV, and another plugin to render it as HTML.")]),t._v(" "),n("pre",{staticClass:"diagram"},[t._v("\n .----------------.      +----------------+\n| input: text/json +----\x3e| JSON converter |\n '----------------'      +-------+--------+\n                                 |\n                                 v\n                         .------------------.    +----------------------+\n                        | result: x-java-map +--\x3e| HTML Table converter |\n                         '------------------'    +----------+-----------+\n                                                            |\n                                                            v\n                                                   .------------------.\n\t\t\t\t\t\t                          | result: text/html  |\n\t\t\t\t\t\t                           '------------------'\n\n")]),t._v(" "),n("p",[t._v("Normally Content Converters are not used directly. However,\nStep plugins can include metadata in their log output that will invoke\nContent Converters without needing to use Log Filters. Log Filters such as the Render Formatted Data\nplugin are\nuseful with scripts, commands, or other step plugins that output\ndata or content in plain text format and do not have a way to add\ntheir own metadata to the log output.")]),t._v(" "),n("h2",{attrs:{id:"sanitized-html-output"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sanitized-html-output","aria-hidden":"true"}},[t._v("#")]),t._v(" Sanitized HTML Output")]),t._v(" "),n("p",[t._v("Normally, any HTML that Rundeck generates from user-content (such as log output) will\nbe passed through an HTML Sanitizer, which strips potentially malicious content\nfrom the input HTML, such as "),n("code",[t._v("<script>")]),t._v(" tags and certain attributes.\nIf your HTML output is not rendering as you expect, this may be the reason why.")])])},[],!1,null,null,null);e.default=a.exports}}]);