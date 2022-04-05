function menmenuHidden() {
    document.getElementById('men').style.visibility = "hidden";
} 

function menmenuVisible() {
    document.getElementById('men').style.visibility = "visible";
}

function womenmenuHide() {
    document.getElementById('women').style.visibility = "hidden";
} 

function womenmenuShow() {
    document.getElementById('women').style.visibility = "visible";
}

function sideBarOffer(){
    var slide = document.getElementById('sidebaroffer');

    if (window.getComputedStyle(slide).display === "block") {
        console.log(slide)
        slide.style.display = "none";
    } else {
        slide.style.display = "block"
    }
}