//all common functions that allows to configure modules
//var com={};
"use strict";
window["com"] = {};
com.sapui= {v:3};
// $ is alias of com.sapui
var $=com.sapui= {v:3};

$.initStructure=function (libPath){
var root = window
var structure=libPath.split(".")
for (var i = 0; i < structure.length; i++) {
	root[structure[i]]=root[structure[i]]||{}
	root= root[structure[i]];
	}
}


$.initconf = function() {
    for (var y = 0; y <conf.modules.length; y++) {
    	var mod = conf.modules[y];
    	if (mod.active) {
        for (var z = 0; z <mod.src.length; z++)  {
             var script = document.createElement ('script')
    		 script.src = mod.rootpath+mod.src[z]
             document.write (script.outerHTML)
         }
}}
}
$.initconf();

/*
$.loadfiles = function() {
var filepaths = [
                 'js/lib/Calculator/calculator-events-v-2.js',
                 'js/lib/Calculator/calculator-core-v-2.js'];


for (var i = 0;i<filepaths.length;i++) {
    var script = document.createElement ('script')
    script.src = filepaths[i]
    document.write (script.outerHTML)  
}
}

$.loadfiles();
*/