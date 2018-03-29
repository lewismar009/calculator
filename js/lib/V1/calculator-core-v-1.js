

com= com || {};
com.sapui=com.sapui || {v:10};
//two different version how to declare
//com ["sapui"]={}
com.sapui.calculator={};

var calc = com.sapui.calculator;
calc.screen=0;

var mem = calc.mem={};
mem.history={pv2:0,pv1:0,v:0}
mem.mplus=function(valueToSave){
     this.pv2=this.pv1
     this.pv1=this.v
     this.v+=valueToSave
};
mem.mminus=function(valueToTake){
     this.pv2=this.pv1
     this.pv1=this.v
     this.v-=valueToTake
};
mem.memshow=function(){
     calc.screen=this.v
};
calc.clear=function(){
    this.screen=0
};

var ops = calc.ops={};

ops.equals=function(v1,v2,op){
    return calc.screen=op(v1,v2)
}

ops.add=function (v1, v2){
    return v1+v2
    }
ops.sub=function (v1, v2){
    return v1-v2
    }
ops.multi=function (v1, v2){
    return v1*v2
    }
ops.div=function (v1, v2){
    return v1/v2
    }
  

mem.mplus.call(mem.history, 5);
mem.mplus.call(mem.history, 5);
mem.mplus.call(mem.history, 5);
mem.memshow.apply(mem.history);
calc.clear();