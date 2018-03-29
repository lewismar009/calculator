// new start
"use strict";
/*
var script = document.createElement ('script');
    script.src = 'js/lib/sapui-core-v-03.js';
    document.write (script.outerHTML);

    script = document.createElement ('script');
    script.src = 'js/lib/calculator-events-v-2.js';
    document.write (script.outerHTML);

    script = document.createElement ('script');
    script.src = 'js/lib/calculator-core-v-2.js';
    document.write (script.outerHTML);

*/

var filepaths = ['js/lib/sapui-core-v-03.js',
                 'js/lib/calculator-events-v-2.js',
                 'js/lib/calculator-core-v-2.js'];


for (var i = 0;i<filepaths.length;i++) {
    var script = document.createElement ('script')
    script.src = filepaths[i]
    document.write (script.outerHTML)  
}







