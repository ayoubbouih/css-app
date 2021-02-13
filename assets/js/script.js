// dropmenu in mobile view
mobileTrigger = document.getElementById("mobile-menu-trigger");
menu = document.getElementById("menu");
mobileTrigger.addEventListener("click", ()=>{
    menu.classList.toggle("collapsed");
});
window.addEventListener("resize",() =>{
    if(window.innerWidth > 600 && menu.className == "collapsed")
    menu.classList.toggle("collapsed");
    // position();
});
events = document.getElementsByClassName("event");
eventLeft = document.getElementById("event-left");
eventRight = document.getElementById("event-right");
slideIndex = 0;
function position(){
    for (i = 0; i < events.length; i++) {
        if(events[i].offsetLeft+events[i].offsetWidth > Math.min(window.outerWidth, window.innerWidth)){
            console.log(i);
            events[i].style.visibility = "hidden";
            events[i].style.display = "none";
        }
        else{
            console.log("element",i," right corner: ",events[i].offsetLeft+events[i].offsetWidth," width: ",window.innerWidth)
            
            events[i].style.visibility = "visible";
            events[i].style.display = "block";
        }
    }
    console.log("-----------------");
}
function move(n){
    for(i=0; i< events.length; i++){
        events[i].style.transform="translate(calc(-100% - 40px)),0%)";
        position();
    }
}
// position();
function showslide(n){
        if(n == 1){

        slideIndex += n;
        events[slideIndex].style.visibility = "visible";
        events[slideIndex].style.flexBasis='300px';
        events[slideIndex].style.minWidth= '250px';
        events[slideIndex].style.overflow= 'visible';
        events[slideIndex].style.flexGrow= '1';
        events[slideIndex].style.margin = "20px";
        events[slideIndex].style.order = "1";
        }    
        events[slideIndex].style.visibility = "visible";
        events[slideIndex].style.flexBasis='300px';
        events[slideIndex].style.minWidth= '250px';
        events[slideIndex].style.overflow= 'visible';
        events[slideIndex].style.flexGrow= '1';
        events[slideIndex].style.margin = "20px";
        events[slideIndex].style.order = "1";
    
}
// showslide(0);
