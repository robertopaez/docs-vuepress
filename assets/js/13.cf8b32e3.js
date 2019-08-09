(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{231:function(e,t,o){e.exports=o.p+"assets/img/fig0317.ee7e26d2.png"},232:function(e,t,o){e.exports=o.p+"assets/img/fig0318.b71b219b.png"},233:function(e,t,o){e.exports=o.p+"assets/img/fig0319.31d289f9.png"},234:function(e,t,o){e.exports=o.p+"assets/img/fig0319-b.eaccd880.png"},235:function(e,t,o){e.exports=o.p+"assets/img/fig0319-c.5b4dceaa.png"},236:function(e,t,o){e.exports=o.p+"assets/img/fig0320.e89096cf.png"},237:function(e,t,o){e.exports=o.p+"assets/img/fig0310.386fb0e1.png"},238:function(e,t,o){e.exports=o.p+"assets/img/fig0319-d.8c49ce5e.png"},443:function(e,t,o){"use strict";o.r(t);var n=o(0),i=Object(n.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"jobs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jobs","aria-hidden":"true"}},[e._v("#")]),e._v(" Jobs")]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("Updated November 20, 2010")]),e._v(" "),n("p",[e._v("This chapter covers how to run and create "),n("em",[e._v("Jobs")]),e._v(".")]),e._v(" "),n("p",[e._v("Why create a Job?")]),e._v(" "),n("ul",[n("li",[e._v("One might find certain command executions are done repeatedly, and\nperhaps, represent what has become a routine procedure.")]),e._v(" "),n("li",[e._v("Another user in your group needs a simple self-service interface to\nrun a procedure across a set of nodes.")]),e._v(" "),n("li",[e._v("Routine processes need to be encapsulated and become the basis for\nother routine procedures.")])]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("Jobs provide a means to encapsulate a process.\nA "),n("em",[e._v("Job")]),e._v(" is a configuration representing input options,\nthe steps in the process, a filter expression that matches the nodes where\nthose steps will execute, and execution\ncontrol parameters that specify if steps are run in parallel\nand what do do if an error occurs in one of the steps.")]),e._v(" "),n("p",[e._v("Job access is governed by an access control\npolicy you define declaring how users are given privileges to\nread, create, edit, run and kill Jobs.")]),e._v(" "),n("p",[e._v("Rundeck lets you organize and execute Jobs and observe the progress as\nthe Job is running. You can view a list of the currently running Jobs\nor drill down to see the output of individual executing steps.\nJob executions can also be aborted if they need to be stopped.")]),e._v(" "),n("p",[e._v("Each Job execution is stored and contains information about the nodes\nwhere steps executed, success and duration of each step. The job\nexecution output can be downloaded, forwarded to an\nexternal log store or sent as part of a\nnotification via email, IRC, ticketing system, or other destinations.")]),e._v(" "),n("p",[e._v("The next sections describe how to navigate and run existing Jobs. In\nlater sections, the topic of Job creation will be covered where\nyou will learn about steps and job options")]),e._v(" "),n("p",[e._v("If you want to skip ahead, you can go straight to\n"),n("router-link",{attrs:{to:"/manual/creating-jobs.html"}},[e._v("Creating Jobs")]),e._v(".")],1),e._v(" "),n("h2",{attrs:{id:"job-groups"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#job-groups","aria-hidden":"true"}},[e._v("#")]),e._v(" Job groups")]),e._v(" "),n("p",[e._v("As many jobs will accumulate over time, it is useful to organize Jobs\ninto groups. A group is a logical set of jobs, and one job group can\nexist inside another. Rundeck displays job lists as a set of folders\ncorresponding to the group structure your jobs define.")]),e._v(" "),n("p",[e._v("Beyond organizing jobs, groups assist in defining access control\npolicy, covered in the\n"),n("router-link",{attrs:{to:"/administration/security/authorization.html"}},[e._v("Administrator guide - Access Control Policy")]),e._v(".")],1),e._v(" "),n("h2",{attrs:{id:"job-uuids"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#job-uuids","aria-hidden":"true"}},[e._v("#")]),e._v(" Job UUIDs")]),e._v(" "),n("p",[e._v("When created, each new job will be assigned a unique universal identifier (UUID). If you are writing the Job definition using one of the supported formats you can assign the UUID yourself.")]),e._v(" "),n("p",[e._v("You can use the UUID to make sure that when you rename or change the group for\nyour job in your job definition, it will modify the correct job in the server.")]),e._v(" "),n("p",[e._v("The UUID is also useful when porting Job definitions between Rundeck instances.")]),e._v(" "),n("h2",{attrs:{id:"listing-and-filtering-jobs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#listing-and-filtering-jobs","aria-hidden":"true"}},[e._v("#")]),e._v(" Listing and filtering Jobs")]),e._v(" "),n("p",[e._v('All Job activity begins on the main "Jobs" page inside Rundeck. After\nlogging in, press the "Jobs" tab in the top navigation bar and any\nJobs you are authorized to see will be displayed.')]),e._v(" "),n("p",[e._v("If the Jobs were defined inside groups, you will see the listing\ngrouped into a folder like structure. These folders represent the Job\ngroups described earlier. You can navigate these folders by pressing\nthe folder icon to reveal its contents.")]),e._v(" "),n("p",[e._v("Once you have navigated to a Job, you will see its name, possibly its\ndescription and a summary total of how many times it has been executed.")]),e._v(" "),n("p",[e._v("Clicking on the job name will will expand the window to show the Job\ndetail. You will see a button bar containing icons representing the\nactions you are able to perform. Other Job detail will include what\ncommand(s) it will run, filter expressions and other dispatcher options.")]),e._v(" "),n("h3",{attrs:{id:"filtering-jobs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#filtering-jobs","aria-hidden":"true"}},[e._v("#")]),e._v(" Filtering Jobs")]),e._v(" "),n("p",[e._v("The Job page lets you search for Jobs using the Filter option.")]),e._v(" "),n("p",[e._v('Click the "Filter" link to show the filter options:')]),e._v(" "),n("p",[n("img",{attrs:{src:o(231),alt:"Job filter form"}})]),e._v(" "),n("p",[e._v("This will show the Filter fields. Enter a value in any of the filter fields:")]),e._v(" "),n("ul",[n("li",[e._v("Job Name: the name of the job")]),e._v(" "),n("li",[e._v("Group: the name of the job group")]),e._v(" "),n("li",[e._v("Description: Job description text")]),e._v(" "),n("li",[e._v("Scheduled: Include jobs that have been scheduled.")])]),e._v(" "),n("p",[e._v("You can type a substring or a regular expression in any of these\nfields.")]),e._v(" "),n("p",[e._v('After pressing the "Filter" button, the Job list will be filtered to\ninclude only the matching jobs.')]),e._v(" "),n("p",[n("img",{attrs:{src:o(232),alt:"Job filtered list"}})]),e._v(" "),n("p",[e._v("To refine the filter, click on the blue-outlined Filter description,\nand change the filter fields.")]),e._v(" "),n("p",[e._v('To reset the filter and go back to the full job page, click the\n"Clear" button in the Filter fields.')]),e._v(" "),n("h2",{attrs:{id:"running-a-job"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#running-a-job","aria-hidden":"true"}},[e._v("#")]),e._v(" Running a Job")]),e._v(" "),n("p",[e._v('Navigate to the desired Job\nfrom the filtered listing and then press the\n"Run" icon to immediately run the Job.\nIf you do not see the Run icon, it\nmeans your login does not have "run" privileges for that job.')]),e._v(" "),n("p",[n("img",{attrs:{src:o(233),alt:"Job run button"}})]),e._v(" "),n("p",[e._v('If you navigated to the separate job page, press\nthe "Run" button there.')]),e._v(" "),n("p",[n("img",{attrs:{src:o(234),alt:"Job run button"}})]),e._v(" "),n("p",[e._v("The Run job dialog allows you to input Job options if any,\nLog level, Nodes selection and how you want to follow the execution.")]),e._v(" "),n("h3",{attrs:{id:"choose-execution-options"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#choose-execution-options","aria-hidden":"true"}},[e._v("#")]),e._v(" Choose execution options")]),e._v(" "),n("p",[e._v("Jobs can be defined to prompt the user for options. This page contains\na form presenting any of these Job options.")]),e._v(" "),n("p",[e._v("Some options will have default values while others may present you\nwith a menu of choices. Some options are optional while others are\nrequired. Lastly, there might be a pattern governing what values are\nacceptable.")]),e._v(" "),n("p",[e._v("If there are any such Job options, you can change them here before\nproceeding with the execution.")]),e._v(" "),n("p",[e._v('When you are ready, press "Run Job Now". The job will enter\nthe execution queue and you can track its execution in the\nActivity section of the page, or by going to the '),n("router-link",{attrs:{to:"/manual/08-activity.html"}},[e._v("Activity")]),e._v(" page.")],1),e._v(" "),n("h3",{attrs:{id:"following-running-jobs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#following-running-jobs","aria-hidden":"true"}},[e._v("#")]),e._v(" Following Running Jobs")]),e._v(" "),n("p",[e._v("Once you have started running a Job, you can follow the Job's output\nin the Execution page.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(235),alt:"Job execution output"}})]),e._v(" "),n("p",[e._v('On the Jobs list page, look in the "Running" tab in the Activity section of the page\nand click the execution ID\'s progress bar.')]),e._v(" "),n("p",[e._v('If you pressed the "run" button from the Job\'s detail page, or you selected to "Follow execution" when you ran the job, your\nbrowser will already have been directed to the Execution Follow page.')]),e._v(" "),n("h2",{attrs:{id:"viewing-job-detail"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#viewing-job-detail","aria-hidden":"true"}},[e._v("#")]),e._v(" Viewing Job detail")]),e._v(" "),n("p",[e._v("A Job's definition can be shown by clicking on the Definition\ntab in the Job Show page or in the Execution page.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(236),alt:"Job definition"}})]),e._v(" "),n("p",[e._v("The information in the Job detail view includes:")]),e._v(" "),n("ul",[n("li",[e._v("Steps the job will execute")]),e._v(" "),n("li",[e._v("Options presented to the user at the time of job run")]),e._v(" "),n("li",[e._v("Node filter expression with a button to show the matched nodes")]),e._v(" "),n("li",[e._v("Job UUID")]),e._v(" "),n("li",[e._v("Creation date")]),e._v(" "),n("li",[e._v("Statistics about the job executions")])]),e._v(" "),n("p",[e._v('Pressing the "Show Matches" link will display the list of Nodes where the Job will run.')]),e._v(" "),n("h2",{attrs:{id:"job-history"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#job-history","aria-hidden":"true"}},[e._v("#")]),e._v(" Job history")]),e._v(" "),n("p",[e._v("In the Job page, you can see the outcome of previous executions of\nJobs by looking at the Activity section.")]),e._v(" "),n("p",[e._v("You can click on any past execution in the list to see the full execution for that job run.")]),e._v(" "),n("p",[e._v("You can also navigate to the Activity page from the top navigation bar and use the\nsearch filter to find executions by typing in the job name.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(237),alt:"Job executions matches"}})]),e._v(" "),n("p",[e._v("The Jobs page also contains all executions for the job group shown.")]),e._v(" "),n("h2",{attrs:{id:"killing-jobs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#killing-jobs","aria-hidden":"true"}},[e._v("#")]),e._v(" Killing Jobs")]),e._v(" "),n("p",[e._v("Jobs that are currently running can be Killed immediately.")]),e._v(" "),n("p",[e._v("WARNING: This feature should be used with caution, as it forcibly\nkills the Java Thread that the Job is running on.")]),e._v(" "),n("p",[e._v('From the Activity view Now Running section, or in the Job execution\nfollow page, click on the "Kill Job" button for the running Job.')]),e._v(" "),n("p",[e._v('When prompted "Really kill this job?" Click the "Yes" button.')]),e._v(" "),n("p",[e._v('The Job will terminate with a "Killed" completion status.')]),e._v(" "),n("p",[n("img",{attrs:{src:o(238),alt:"Job definition"}})])])},[],!1,null,null,null);t.default=i.exports}}]);