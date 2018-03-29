// configuration of the application
// can handel user access control

var conf= {
	application:"calculator", 
    version:12,
    modules:[{name: "calculatrice",
              rootpath: "js/lib/Calculator/",
              version:"v-02",
              src:["calculator-core-v-2.js", "calculator-events-v-2.js"],
              active: true },

              {name: "scientific",
              rootpath: "js/lib/V1/",
              version:"v-02",
              src:["calculator-core-v-1.js", "calculator-events-v-1.js"],
              active: false}
              ]
 }



 /*the idea
 modules: sum of module: {
	  name = calc
	  rootpath = js/lib/Calculator
	  version
	  SRC:[]
 }
 */
