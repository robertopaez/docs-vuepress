(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{218:function(e,t,n){e.exports=n.p+"assets/img/windows-launcher.428c60f0.png"},219:function(e,t,n){e.exports=n.p+"assets/img/login-page.650bd4c4.png"},220:function(e,t,n){e.exports=n.p+"assets/img/nssm-installer.d89541c7.png"},221:function(e,t,n){e.exports=n.p+"assets/img/service-management-console.7f9d6616.png"},588:function(e,t,n){"use strict";n.r(t);var a=n(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"installing-on-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-on-windows","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing on Windows")]),e._v(" "),a("h3",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("Before proceeding to install Rundeck, check all hardware "),a("a",{attrs:{href:"https://docs.rundeck.com/docs/administration/install/system-requirements.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("requirements"),a("OutboundLink")],1),e._v(" to make sure that our machine can be run Rundeck, also, make sure that the Windows user profile has the sufficient rights to install software in the Operating System.")]),e._v(" "),a("p",[e._v("Also, the main dependency is Java Development Kit 1.8 (JDK 8), you can download it from Oracle "),a("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("website"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"installing-rundeck-on-windows-based-systems-and-first-run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-rundeck-on-windows-based-systems-and-first-run","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing Rundeck on Windows based systems and first run")]),e._v(" "),a("p",[e._v("The first step is to download Rundeck WAR file and save it on the main work directory, e.g. "),a("code",[e._v("C:\\rundeck")]),e._v(", you can download "),a("a",{attrs:{href:"https://www.rundeck.com/open-source/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("Community"),a("OutboundLink")],1),e._v(" version or "),a("a",{attrs:{href:"https://download.rundeck.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Enterprise"),a("OutboundLink")],1),e._v(" and save it on "),a("code",[e._v("C:\\rundeck")]),e._v(" folder, now you will set Rundeck path environment variable, for that set it on a Powershell window and :")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("set RDECK_BASE=C:\\rundeck\n")])])]),a("p",[e._v("Next, we need launch Rundeck the first time to generate the configuration files and folders structure, for that you can open a Powershell, go to "),a("code",[e._v("c:\\rundeck")]),e._v(" and execute "),a("code",[e._v("java -jar rundeck-3.0.X.war")]),e._v(" (in community case) or "),a("code",[e._v("java -jar rundeckpro-[edition]-3.0.X.war")]),e._v(" for Enterprise; depending of your system the process can take some time, when Rundeck is ready you can see that on Powershell window:")]),e._v(" "),a("p",[a("img",{attrs:{src:n(218),alt:"Windows launcher"}})]),e._v(" "),a("p",[e._v("At this point, all Rundeck structure is ready and you can stop the process with "),a("code",[e._v("<Crtl+C>")]),e._v(" keyboard combination to proceed to configure.")]),e._v(" "),a("h2",{attrs:{id:"folder-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#folder-structure","aria-hidden":"true"}},[e._v("#")]),e._v(" Folder Structure")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+---etc\n|       admin.aclpolicy => Administrator access control policy defined with a [aclpolicy] document.\n|       apitoken.aclpolicy => Default API ACL policies.\n|       cli-log4j.properties => This file defines the logging configuration for the Commandline tools.\n|       framework.properties => Configuration file used by shell tools and core Rundeck services.\n|       preferences.properties\n|       profile\n|       profile.bat => Shell environment variables used by the shell tools.\n|       project.properties =>Rundeck project configuration file when using Filsystem based project defintions.\n+---libext => Plugin folder.\n+---projects => Projects data (eg: resource files, project properties, etc)\n+---server\n|   +---config\n|   |       jaas-loginmodule.conf\n|   |       log4j.properties => This file defines the logging configuration for rundeck.\n|   |       realm.properties => Property file user directory when PropertyFileLoginModule is used.\n|   |       rundeck-config.properties => This is the primary Rundeck webapp configuration file. Defines default loglevel, datasource configuration, and GUI customization.\n|   |       ssl.properties => To enable SSL access to rundeck.\n|   +---data => H2 default database\n|   |       grailsdb.mv.db\n|   +---lib\n|   |       rundeck-core-3.0.X.jar => rundeck core\n|   +---logs => Rundeck logging\n|   |       rundeck.access.log => access to rundeck.\n|   |       rundeck.api.log => API calls\n|   |       rundeck.audit.log => Authorization messages pertaining to aclpolicy.\n|   |       rundeck.executions.log => Logs of all executions.\n|   |       rundeck.jobs.log => Log of all job definition changes.\n|   |       rundeck.log=> General Rundeck application messages.\n|   |       rundeck.options.log=> Logs remote HTTP requests for Options JSON data.\n|   |       rundeck.project.log\n|   |       rundeck.storage.log=> Standard input and output generated during runtime.\n|   +---sbin\n|   \\---work\n+---tools=> rd-acl client (to manage ACL validation).\n\\---var   => Executions Logs folder.\n")])])]),a("h3",{attrs:{id:"configuring-rundeck"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-rundeck","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuring Rundeck")]),e._v(" "),a("p",[e._v("After installing Rundeck, the first run and know the files/folders structure, you need to configure it, basically publish Rundeck to be available in the network and generate a .bat script to launch Rundeck and use some parameters depending on our needs.")]),e._v(" "),a("p",[e._v("To publish Rundeck to be available in your network, open "),a("code",[e._v("C:\\rundeck\\server\\config\\rundeck-config.properties")]),e._v(" with your favorite text editor and change this line:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server.address=yourhostname\n")])])]),a("p",[e._v("by:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server.address=0.0.0.0\n")])])]),a("p",[e._v("Save the file it and now is time to create a .bat script that launch rundeck properly. For that create a file called "),a("code",[e._v("start_rundeck.bat")]),e._v(" with your favorite text editor and put this in the for Rundeck Community version:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("set CURDIR=%~dp0\ncall %CURDIR%etc\\profile.bat\njava %RDECK_CLI_OPTS% %RDECK_SSL_OPTS% -jar rundeck-3.0.X.war --skipinstall -d  >> %CURDIR%\\var\\logs\\service.log  2>&1\n")])])]),a("p",[e._v("Or for Rundeck Enterprise version:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("set CURDIR=%~dp0\ncall %CURDIR%etc\\profile.bat\njava %RDECK_CLI_OPTS% %RDECK_SSL_OPTS% -jar rundeckpro-[edition]-3.0.X.war --skipinstall -d  >> %CURDIR%\\var\\logs\\service.log  2>&1\n")])])]),a("p",[e._v("To launch, execute start_rundeck.bat at Powershell session, to stop Rundeck you can press "),a("code",[e._v("<Crtl+C>")]),e._v(" keyboard combination.")]),e._v(" "),a("h3",{attrs:{id:"login-to-the-gui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#login-to-the-gui","aria-hidden":"true"}},[e._v("#")]),e._v(" Login to the GUI")]),e._v(" "),a("p",[e._v("By default, Rundeck will be installed in TCP port 4440. To access, go to the following URL using your web browser: "),a("code",[e._v("http://servername:4440")]),e._v(' (when "servername" is the name of your Windows host).')]),e._v(" "),a("p",[a("img",{attrs:{src:n(219),alt:"Login page"}})]),e._v(" "),a("p",[e._v('The default username and password is "admin" with password "admin".')]),e._v(" "),a("h3",{attrs:{id:"run-rundeck-as-a-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-rundeck-as-a-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Run rundeck as a Service")]),e._v(" "),a("p",[e._v("This section will install Rundeck Community or Enterprise as a Service on a Windows based systems.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#installing-rundeck-on-windows-systems-and-first-run"}},[e._v("Install")]),e._v(" Rundeck.")]),e._v(" "),a("li",[e._v("Download "),a("a",{attrs:{href:"http://nssm.cc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("nssm.exe"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Place the executable under "),a("code",[e._v("%RDECK_BASE%")]),e._v(" (you can place it elsewhere, but for the sake of the example let's use always the root dir)")]),e._v(" "),a("li",[e._v("Open a prompt and issue these commands (Administrator user profile is required to install a service)")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    cd C:\\rundeck\n    nssm.exe install RUNDECK\n")])])]),a("ul",[a("li",[e._v('The GUI pops up, set "path" as '),a("code",[e._v("%RDECK_BASE%\\start_rundeck.bat")]),e._v(", startup directory as "),a("code",[e._v("%RDECK_BASE%")]),e._v(' (optionally set "low" on the process tab, under priority, to avoid server CPU spike when starting Rundeck)')])]),e._v(" "),a("p",[a("img",{attrs:{src:n(220),alt:"NSSM Installer"}})]),e._v(" "),a("ul",[a("li",[e._v("Go to the Service Management Console (services.msc) and you'll find "),a("code",[e._v("rundeck")]),e._v(" listed as a service. Starting it will start the "),a("code",[e._v("rundeck")]),e._v(" process.")])]),e._v(" "),a("p",[a("img",{attrs:{src:n(221),alt:"Service Management Console"}})]),e._v(" "),a("ul",[a("li",[e._v("set JVM memory heap on "),a("code",[e._v("%RDECK_BASE%\\etc\\profile.bat")]),e._v(".")])]),e._v(" "),a("p",[e._v("Replace the "),a("code",[e._v("RDECK_CLI_OPTS")]),e._v(" variable with the amount of memory that you need, for example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("....\n\nset RDECK_CLI_OPTS=-Xms1024m -Xmx4096m\nset RD_LIBDIR=%RDECK_BASE%\\tools\\lib\n")])])]),a("p",[e._v("Now, Rundeck is configured as a Service and can be launch it at the moment of start Windows.")]),e._v(" "),a("h3",{attrs:{id:"start-stop-instances"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-stop-instances","aria-hidden":"true"}},[e._v("#")]),e._v(" Start-Stop instances")]),e._v(" "),a("p",[e._v("Go to the Service Management Console (services.msc) and you'll find Rundeck listed as a service. You can start, stop or restart "),a("code",[e._v("rundeck")]),e._v(" service.")])])},[],!1,null,null,null);t.default=r.exports}}]);