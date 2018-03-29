//var com={};
window["com"] = {};
com.sapui= {v:3};
com.sapui.initStructure=function (libPath){
var root = window
var structure=libPath.split(".")
for (var i = 0; i < structure.length; i++) {
	root[structure[i]]=root[structure[i]]||{}
	root= root[structure[i]];
	}
}

com.sapui.loadfiles = function() {
var filepaths = [
                 'js/lib/calculator-events-v-2.js',
                 'js/lib/calculator-core-v-2.js'];


for (var i = 0;i<filepaths.length;i++) {
    var script = document.createElement ('script')
    script.src = filepaths[i]
    document.write (script.outerHTML)  
}
}