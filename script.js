// dropmenu in mobile view
mobileTrigger = document.getElementById("mobile-menu-trigger");
menu = document.getElementById("menu");
mobileTrigger.addEventListener("click", ()=>{
    menu.classList.toggle("collapsed");
});
window.addEventListener("resize",() =>{
    if(window.innerWidth > 600 && menu.className == "collapsed")
    menu.classList.toggle("collapsed");
});
///////
// login popup
close = document.getElementById("login-close");
popup = document.getElementById("login-popup");
login = document.getElementById("login-open");
overlay = document.getElementById("overlay");
body = document.getElementsByTagName("body")[0];

login.addEventListener("click",() => {
    popup.style.display= "flex";
    overlay.style.display = "block";
    body.style.overflow = "hidden";
});
close.addEventListener("click", () =>{
    popup.style.display= "none";
    overlay.style.display = "none";
    body.style.overflow = "visible";
});
overlay.addEventListener("click", () =>{
    popup.style.display= "none";
    overlay.style.display = "none";
});
/// slider
events = document.getElementsByClassName("event");
eventLeft = document.getElementById("event-left");
eventRight = document.getElementById("event-right");
slideIndex = 0;
eventLeft.addEventListener('click', ()=>{
    showslide(slideIndex -= 1)
});
eventRight.addEventListener('click', ()=>{
    showslide(slideIndex += 1);
});
function showslide(n){
    if (slideIndex >= events.length) {slideIndex = 0}    
    if (slideIndex < 0) {slideIndex = events.length - 1}
    for (i = 0; i < events.length; i++) {
        events[i].style.display = "none";
        events[i].style.flexBasis='0px';
        events[i].style.minWidth= '0px';
        events[i].style.overflow= 'hidden';
        events[i].style.flexGrow= '0';
    }
    if(window.innerWidth > 768){
        events[slideIndex].style.order = "1";
        events[(slideIndex+1) % events.length].style.order="2";
        events[slideIndex].style.display = "block";
        events[slideIndex].style.flexBasis='300px';
        events[slideIndex].style.minWidth= '250px';
        events[slideIndex].style.overflow= 'visible';
        events[slideIndex].style.flexGrow= '1';
        events[(slideIndex+1) % events.length].style.display = "block";
        events[(slideIndex+1) % events.length].style.flexBasis='300px';
        events[(slideIndex+1) % events.length].style.minWidth= '250px';
        events[(slideIndex+1) % events.length].style.overflow= 'visible';
        events[(slideIndex+1) % events.length].style.flexGrow= '1';
    }
    else{
        events[slideIndex].style.display = "block";
        events[slideIndex].style.flexBasis='300px';
        events[slideIndex].style.minWidth= '250px';
        events[slideIndex].style.overflow= 'visible';
        events[slideIndex].style.flexGrow= '1';
    }
    
    
}
showslide(0);
