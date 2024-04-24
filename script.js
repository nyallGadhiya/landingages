function homepageAnimation() {
    gsap.set(".swipesm",{
        scale:5
    })
    
    let tl=gsap.timeline({
        scrollTrigger:{
            trigger:".home",
            start:"top top",
            end:"bottom bottom",
            scrub:1,
        }
    })
    
     tl.to(".vid1",{
        
        '--clip':"0%",
     },'same_anim') 
    .to(".swipesm",{
        
        scale:1
     }, 'same_anim')
    .to(".lft",{
        
        xPercent: -10,
        stagger: .03,
        ease: Power4
    },'same-row')
    .to(".rgt",{
        xPercent: 10,
        stagger: .03,
        ease: Power4        
    },'same-row') 
    
}

function realpageAnim() {
    gsap.to(".slide",{
        scrollTrigger:{
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            marks:true,
            scrub:1
        },
        xPercent:-200,
        ease:Power4
    })
}

function workanim()
{
    document.querySelectorAll(".listelem")
.forEach(function(el){
    el.addEventListener("mousemove",function(dets){
       gsap.to(this.querySelector(".picture"), { opacity:1 , ease:Power4,x:gsap.utils.mapRange(0, window.innerWidth ,-500,500,dets.clientX) , duration: .5 })
    })
    el.addEventListener("mouseleave", function(dets){
        gsap.to(this.querySelector(".picture"), { opacity:0 , ease:Power4 , duration: .5 })
    })
})
}

function worklayer()
{
    document.querySelectorAll(".bluelayer")
.forEach(function(el){
    el.addEventListener("mousemove",function(dets){
       gsap.to(this.querySelector(".bluelayer"), { opacity:1  })
    })
    el.addEventListener("mouseleave", function(dets){

    })
})
}

function testonomialanim() {
    
let=clutter="";
document.querySelector(".paratext")
.textContent.split("")
.forEach(function(e) {
    if(e===" ") clutter+=`<span>&nbsp;</span>`
    clutter+=`<span >${e}</span>`
})
document.querySelector(".paratext").innerHTML=clutter

gsap.set(".paratext span",{opacity: .1})
gsap.to(".paratext span",{
    scrollTrigger:{
        trigger:".paratext",
        start:"top 30%",
        end:"bottom 60%",
        scrub:2
    },
    opacity:1,
    stagger:.03,
    ease: Power4
})
}
(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();
function bodycolorchange()
{
document.querySelectorAll(".section")
.forEach(function(e){
    ScrollTrigger.create({
        trigger: e,
        start:"top 50%",
        end:"bottom 50%",
        onEnter: function(){
            document.body.setAttribute("theme",e.dataset.color); 
        },
        onEnterback: function(){
            document.body.setAttribute("theme",e.dataset.color); 
        }
    })
})
}

//sound effects

  const audioclick= new Audio();
  audioclick.src="./click.mp3";
    

homepageAnimation();
realpageAnim();
workanim();
testonomialanim();
bodycolorchange();