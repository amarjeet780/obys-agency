

var tl = gsap.timeline() 
tl.from(".line h1" , {
    y:150,
    stagger:0.2,
    delay:0.3 ,
    duration:0.6 ,
})
tl.from(".line h2" , {
    opacity:0,
    onStart: function(){       // jab ye hoha to function start hoga
        var h5Timer = document.querySelector("#line-part1 h5");
var grow=0 ;
setInterval(function(){
    if(grow<100){
        grow++;
        h5Timer.innerHTML=grow++ ;
    }
    else{
        h5Timer.innerHTML=grow
    }
},35)

    }
})
tl.to(".line h2", {
    animationName:"anime",
    opacity:1 ,
})
tl.to("#loader", {
    opacity:0 ,
    duration:0.3 ,
    delay:3,
})
tl.from("#page1" , {
    delay:0.2 ,
    y:1600 ,
    opacity:0 ,
})
tl.to("#loader", {
    display:"none" ,
})
