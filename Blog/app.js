function openPost(){
    document.querySelector(".fullPost-popup").classList.add("fullPost-popup-active");
    document.querySelector(".fullPost-container").classList.add("fullPost-container-active");
    window.scrollTo({top:screen.height/1.25, behavior:"smooth"});
    window.addEventListener("wheel", centering);
    setTimeout(lockScroll,400);
}

function lockScroll(){
        document.body.style.overflow="hidden";
}

function closePost(){
    document.querySelector(".fullPost-popup").classList.remove("fullPost-popup-active");
    document.querySelector(".fullPost-container").classList.remove("fullPost-container-active");
    window.removeEventListener("wheel", centering);
    document.body.style.overflow="auto";
}

function centering(){
    window.scrollTo({top:screen.height/1.25,  behavior:"smooth"});
}



