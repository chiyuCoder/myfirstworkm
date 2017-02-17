function oyd(id) {
    return document.getElementById(id);
}
function ocn(cn, paid) {
    var pare = paid || document,
        cns = [],
        sib = pare.getElementsByTagName("*"),
        i;
    for (i = 0;i<sib.length;i++){
        if(sib[i].className == cn){
            cns.push(sib[i]);
        }
    }
    return cns;
}
var event=event||window.event;
var wHeight = window.innerHeight
    || document.body.clientHeight
    || document.documentElement.clientHeight;
var myEv = {
    adEv:function adMyEv(ele,beh,func) {
        if(ele.addEventListener){
            ele.addEventListener(beh,func,false);
        }else{
            if(ele.attachEvent){
                ele.attachEvent('on'+beh,func);
            }else{
                ele['on'+beh]=func;
            }
        }
    }    
}



var nav=oyd('myNav').getElementsByTagName('li');

//class=nav
myEv.adEv(window,'scroll',function myWheel(event) {   
    if(window.pageYOffset>100){
        oyd('header').setAttribute('class','serheader');
    }else{
        oyd('header').setAttribute('class','herheader');
    }
    var per=window.pageYOffset/wHeight;
    var intper=Math.floor(per);
    for(inum=0;inum<nav.length;inum++){
        nav[inum].removeAttribute('class');
    }    
    nav[intper].setAttribute('class','act');
})
//滚屏

//1:normal

myEv.adEv(window,'mousewheel',function mysc(event){
    event.preventDefault();
    if(event.wheelDelta<0){ 
        document.body.scrollTop+= wHeight;
       // window.pageYOffset+=wHeight;
    }else{
        if(event.wheelDelta>0){        
             document.body.scrollTop-= wHeight;
        }
    }
})
//2:firefox

myEv.adEv(window,"DOMMouseScroll",function(event) {
    event.preventDefault();
    if(event.detail<0){       
       document.documentElement.scrollTop-=wHeight;
    }else{       
       document.documentElement.scrollTop+=wHeight;
    }
});

//class=QQnum
window.onload=myl();
window.onresize=function myRes(){
    myl();
};
function myl(){
    var wWidth=window.innerWidth
        ||document.body.clientWidth
        ||document.documentElement.clientWidth,
        qql=ocn('QQLogo')[0],
        qqn=ocn('QQnum')[0];
    if(wWidth<1371){
         qqn.style.display='none';
        myEv.adEv(qql,'mouseover',function msover(){
            qqn.style.display='block';           
        });
        myEv.adEv(qql,'mouseout',function msout(){
            qqn.style.display='none';
        })
    }else{
       qqn.style.display='block'; 
    }
}
