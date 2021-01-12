// This JS Doc is used to store all the form data from index.html and the use this data in the generator.html
let selectFontType = document.getElementById("fontType");
let selectCanvasPreset = document.getElementById("canvasPreset");
let selectFontStyle = document.getElementById("fontStyle");
let selectColorStyle = document.getElementById("colorStyle");
let changeFontScaling = document.getElementById("changeFontScaling");

if (typeof(Storage) !== undefined) {
    // Código  compatible

    let saveDataButton = document.getElementById("arrow");

    saveDataButton.onclick = function() {
        sessionStorage.setItem("fontType", JSON.stringify(selectFontType.value));
        sessionStorage.setItem("canvasPreset", JSON.stringify(selectCanvasPreset.value));
        sessionStorage.setItem("fontStyle", JSON.stringify(selectFontStyle.value));
        sessionStorage.setItem("colorStyle", JSON.stringify(selectColorStyle.value));
        sessionStorage.setItem("changeFontScaling", JSON.stringify(changeFontScaling.value));
    }

} else {
    // Código no compatible
}