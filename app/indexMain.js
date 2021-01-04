// TODO INDEX HOVER STYLING

let image01 = document.getElementById("image01");
let image02 = document.getElementById("image02");
let textHover01 = document.getElementById("textHover01");
let textHover02 = document.getElementById("textHover02");
let hamburguerIndex = document.getElementById("hamburguerIndex");
let headerInfo = document.getElementById("headerInfo");

textHover01.onmouseover = function() {
    image01.style.display = "block";
}

textHover01.onmouseout = function() {
    image01.style.display = "none";
}

textHover02.onmouseover = function() {
    image02.style.display = "block";
}

textHover02.onmouseout = function() {
    image02.style.display = "none";
}

hamburguerIndex.onclick = function() {
    if (headerInfo.style.display == "block") {
        headerInfo.style.display = "none";
    } else {
        headerInfo.style.display = "block";
    }

}