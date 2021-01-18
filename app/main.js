// ────────────────────────────────────────────────────────────────────────────────

//
// ─── ANCHOR ABOUT ME ────────────────────────────────────────────────────────────
//
/*

- I used Comment Anchors plugin for Visual Studio Code to get an index in the document.

*/

// --- ANCHOR GLOBAL VARIABLES

// --- ANCHOR --- querySelectorAll

let inputEdit = document.querySelectorAll("input.inputEdit");
let inputEditTitle = document.querySelectorAll("input.inputEditTitle");
let inputEditSubtitle = document.querySelectorAll("input.inputEditSubtitle");
let inputEditBodyText = document.querySelectorAll("input.inputEditBodyText");

// --- ANCHOR --- text content

let contentTitle = document.getElementById("contentTitle");
let contentSubtitle = document.getElementById("contentSubtitle");
let contentBodyText = document.getElementById("contentBodyText");

let inputTitle = document.getElementById("inputTitle");
let inputSubtitle = document.getElementById("inputSubtitle");
let inputBodyText = document.getElementById("inputBodyText");

// --- ANCHOR --- canvas size

let canvas = document.getElementById("canvas");
let inputHeight = document.getElementById("inputHeight");
let blockHeight = document.getElementById("btnBlockHeight");
let inputWidth = document.getElementById("inputWidth");
let blockWidth = document.getElementById("btnBlockWidth");
let selectCanvasSizePresets = document.getElementById("canvasSizePresets");
let blockSelectCanvasSizePresets = document.getElementById("btnCanvasSizePreset");
let changeCanvasOrientation = document.getElementById("switch");
let blockCanvasProportion = document.getElementById("btnBlockProportion");
let canvasPositioning = document.getElementById("canvasPositioning");

// --- ANCHOR --- canvas layout

let inputMargin = document.getElementById("inputMargin");
let canvasContainer = document.getElementById("canvasContainer");

// --- ANCHOR --- canvas guides

let guides = document.getElementById("guides");
let columnsQuantity = document.getElementById("columnsQuantity");
let rowQuantity = document.getElementById("rowQuantity");
let gridGap = document.getElementById("gridGap");
let guideOpcity = document.getElementById("guideOpcity");
let showGuides = document.getElementById("showGuides");
let showGuidesIcon = document.getElementById("showGuidesIcon");

let guide = document.querySelectorAll("div.guide");

// --- ANCHOR --- menu

let showMenu = document.getElementById("showMenu");

// --- ANCHOR --- change fonts
/* We used typefaces.js for this */

let titleFontChangeType = document.getElementById("titleFontChange");
let subtitleFontChangeType = document.getElementById("subtitleFontChange");
let bodyTextFontChangeType = document.getElementById("bodyTextFontChange");
let changeFontsType = document.getElementById("changeFontsType");
let titleFontChangeWeight = document.getElementById("titleFontChangeWeight");
let subTitleFontChangeWeight = document.getElementById("subTitleFontChangeWeight");
let bodyTextFontChangeWeight = document.getElementById("bodyTextFontChangeWeight");

let allFontChange = document.querySelectorAll("select.fontChange");
let allFontChangeWeight = document.querySelectorAll("select.fontChangeWeight");
let allFontChangeStyle = document.querySelectorAll("select.fontChangeStyle");

// --- ANCHOR --- font size

let inputTitleSize = document.getElementById("inputTitleSize");
let inputSubitleSize = document.getElementById("inputSubitleSize");
let inputBodyTextSize = document.getElementById("inputBodyTextSize");

let blockInputTitle = document.getElementById("btnBlockTitleSize");
let blockInputSubitle = document.getElementById("btnBlockSubitleSize");
let blockInputBodyText = document.getElementById("btnBlockBodyTextSize");

let inputLineHeightTitle = document.getElementById("inputLineHeightTitle");
let inputLineHeightSubtitle = document.getElementById("inputLineHeightSubtitle");
let inputLineHeightBodyText = document.getElementById("inputLineHeightBodyText");

let changeFontScaling = document.getElementById("changeFontScaling");

// --- ANCHOR --- color

let inputColorTitle = document.getElementById("inputColorTitle");
let inputColorSubtitle = document.getElementById("inputColorSubtitle");
let inputColorBodyText = document.getElementById("inputColorBodyText");
let inputColorCanvas = document.getElementById("inputColorCanvas");



// ANCHOR --- Session Storage

let savedItemFontType = sessionStorage.getItem("fontType");
let savedItemCanvasPreset = sessionStorage.getItem("canvasPreset");
let savedItemFontStyle = sessionStorage.getItem("fontStyle");
let savedItemColorStyle = sessionStorage.getItem("colorStyle");
// let savedItemChangeFontScaling = sessionStorage.getItem("changeFontScaling");


//

let titleFontName = document.getElementById("titleFontName");
let subtitleFontName = document.getElementById("subtitleFontName");
let bodyTextFontName = document.getElementById("bodyTextFontName");

let googleFontsLink01 = document.getElementById("googleFontsLink01");
let googleFontsLink02 = document.getElementById("googleFontsLink02");
let googleFontsLink03 = document.getElementById("googleFontsLink03");

let embed01 = document.getElementById("embed01");
let embed02 = document.getElementById("embed02");
let embed03 = document.getElementById("embed03");
let embed04 = document.getElementById("embed04");

let infoColorPalette = document.querySelectorAll("div.colorPalette");
let infoColorPaletteInfo = document.querySelectorAll("div.colorPaletteInfo");






// ────────────────────────────────────────────────────────────────────────────────




//
// ─── TODO STUFF TO DO ───────────────────────────────────────────────
//

// TODO --- Block aspect Ratio

// let oldH = parseFloat(inputHeight.oldvalue);
// let newHval = parseFloat(inputHeight.value);
// let newWval = parseFloat(inputWidth.value);
// blockProportion(oldH, newHval, newWval);

// if (blockCanvasProportion.value == "on") {
//     blockCanvasProportion.style.color = "blue";
// } else {
//     blockCanvasProportion.style.color = "black";
// }


// blockCanvasProportion.onclick = function() {
//     if (this.value == "on") {
//         this.value = "off";
//         this.style.color = "black";
//     } else {
//         this.value = "on";
//         this.style.color = "blue";
//     }
// }

// function blockProportion(oldH, newHval, newWval) {
//     if (blockCanvasProportion.value == "on") {
//         let oldW = parseFloat(inputWidth.oldvalue);

//         let newH = oldH * newWval / oldW;

//         canvas.style.height = (Math.round(newH * 100) / 100).toFixed(2) / 10 + "%";
//         inputHeight.value = (Math.round(newH * 100) / 100).toFixed(2) + "";
//     }
// }


// function inputHeight() {


//     var oldW = pageWidth;
//     var newH = (newW * oldH) / oldW;
//     $('.pageHeight input').val(Math.round(newH));
// }




// ANCHOR GLOBAL FUNCTIONS

// FIXME --- Limit Input edges

// const limitEdgesInputs = (whatToBlock) => {
//     let minVal = parseFloat(whatToBlock.min);
//     let maxVal = parseFloat(whatToBlock.max);

//     if (whatToBlock.value <= minVal) {
//         whatToBlock.value = minVal;
//     } else if (whatToBlock.value >= maxVal) {
//         whatToBlock.value = maxVal;
//     }
// }




const limitMaxVal = (whatToLimit, styleObj, styleObj02, propertyName, propertyName02, unitOfMeasurement, isCanvasSizing) => {
    let maxVal = parseFloat(whatToLimit.max);
    let minVal = parseFloat(whatToLimit.min);

    if (isCanvasSizing == true) {
        if (whatToLimit.value >= maxVal) {
            whatToLimit.value = maxVal;
            styleObj[propertyName] = maxVal / 10 + unitOfMeasurement;
        } else if (whatToLimit.value <= minVal) {
            styleObj[propertyName] = minVal / 10 + unitOfMeasurement;
        } else {
            styleObj[propertyName] = whatToLimit.value / 10 + unitOfMeasurement;
        }
    } else {
        if (whatToLimit.value >= maxVal) {
            whatToLimit.value = maxVal;
            styleObj[propertyName] = maxVal + unitOfMeasurement;
            if (styleObj02 == null) {} else {
                styleObj02[propertyName02] = maxVal + unitOfMeasurement;
            }
        } else if (whatToLimit.value <= minVal) {
            styleObj[propertyName] = minVal + unitOfMeasurement;
            if (styleObj02 == null) {} else {
                styleObj02[propertyName02] = minVal + unitOfMeasurement;
            }
        } else {
            styleObj[propertyName] = whatToLimit.value + unitOfMeasurement;
            if (styleObj02 == null) {} else {
                styleObj02[propertyName02] = whatToLimit.value + unitOfMeasurement;
            }
        }
    }

    this.focus();
}

const limitMinVal = (whatToLimit) => {
    let minVal = parseFloat(whatToLimit.min);

    if (whatToLimit.value <= minVal) {
        whatToLimit.value = minVal;
    }
}

const inputChange = (whatInput, reference, reference02, propertyName, propertyName02, unitOfMeasurement, extra, isCanvasSizing) => {
    whatInput.oninput = function() {
        if (reference02 == null) {
            limitMaxVal(this, reference.style, null, propertyName, null, unitOfMeasurement, isCanvasSizing);
        } else {
            limitMaxVal(this, reference.style, reference02.style, propertyName, propertyName02, unitOfMeasurement, isCanvasSizing);
        }
        extra.value = "personalized";
    };
    whatInput.focusout = function() {
        limitMinVal(this);
    };
}





// FIXME --- Block elements 

const blockCanvasResizing = (blockingBoolean) => {
    inputWidth.disabled = blockingBoolean;
    inputHeight.disabled = blockingBoolean;
}

let allBlockButtons = document.querySelectorAll("button.blockButton");
let allBlockButtonsSmall = document.querySelectorAll("button.blockButtonSmall");

for (i = 0; i < allBlockButtons.length; i++) {
    allBlockButtons[i].onclick = function() {
        let whatToBlock = $(this).parent();
        if (whatToBlock.parent().find(".blockeable").prop("disabled") == false) {
            whatToBlock.parent().find(".blockeable").prop("disabled", true);
            whatToBlock.find(".btn").css("color", "rgba(0,0,0,0.20)");

        } else {
            whatToBlock.parent().find(".blockeable").prop("disabled", false);
            whatToBlock.find(".btn").css("color", "black");

        }
    }
}

for (i = 0; i < allBlockButtonsSmall.length; i++) {
    allBlockButtonsSmall[i].onclick = function() {
        let whatToBlock = $(this).parent().find(".blockeable");
        if (whatToBlock.prop("disabled") == false) {
            whatToBlock.prop("disabled", true);
        } else {
            whatToBlock.prop("disabled", false);
        }
    }
}


// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────


// ────────────────────────────────────────────────────────────────────────────────
// *** HERE WE START THE CODE ***
// ────────────────────────────────────────────────────────────────────────────────




// TODO --- Funciones normalizadoras
// ------ Del porcentaje de papel y la vida real


//
// ─── ANCHOR MEDIA QUERIES ───────────────────────────────────────────────────────
//


let mediaQueryMax779 = window.matchMedia("(max-width: 779px)")

//
// ─── ANCHOR CANVAS ───────────────────────────────────────────────────────
//
// FIXME Limpiar código

// ANCHOR --- Canvas sizing

// ------ ON WINDOW LOAD

canvas.style.height = inputHeight.value / 10 + "%";
canvas.style.width = inputWidth.value / 10 + "%";

// ------ ON INPUT CHANGE


/* DONE Limite de los input hace que cuando un input tenga el
mínimo de varios dígitos no se pueda escribir el valor escogido.
Por eso hace la cosa rara.
DOS POSIBLES SOLUCIONES:
- onfocusout: dejar al usuario escribir el número pero cuando este
sea menor que el minVal se cambie automáticamente
- Almacenar el valor que ponga el usuario y pasarlo al input cuando salga
 */


inputChange(inputEdit[0], canvas, null, "height", null, "%", selectCanvasSizePresets, true);
inputChange(inputEdit[1], canvas, null, "width", null, "%", selectCanvasSizePresets, true);


// ------ ON WINDOW RESIZE

function resizeCanvasContainer(mediaQueryMax779) {
    if (mediaQueryMax779.matches) { // If media query matches
        canvasContainer.style.width = "90%";
        canvasContainer.style.height = canvasContainer.offsetWidth + "px";

    } else {
        canvasContainer.style.height = "90%";
        canvasContainer.style.width = canvasContainer.offsetHeight + "px";
    }

    window.onresize = function() {
        if (mediaQueryMax779.matches) { // If media query matches
            canvasContainer.style.width = "90%";
            canvasContainer.style.height = canvasContainer.offsetWidth + "px";

        } else {
            canvasContainer.style.height = "90%";
            canvasContainer.style.width = canvasContainer.offsetHeight + "px";
        }
    }
}

resizeCanvasContainer(mediaQueryMax779);
mediaQueryMax779.addListener(resizeCanvasContainer);

// ------ ANCHOR --- Canvas presets
// ------ ON WINDOW LOAD Change SELECT & CANVAS on Session Storage


switch (savedItemCanvasPreset) {
    case '"personalized"':
        selectCanvasSizePresets.value = "personalized";
        canvas.style.height = "40%";
        canvas.style.width = "40%";
        inputHeight.value = 400;
        inputWidth.value = 400;
        blockCanvasResizing(false);
        break;
    case '"dinA"':
        selectCanvasSizePresets.value = "dinA";
        canvas.style.height = "100%";
        canvas.style.width = canvas.offsetHeight / 1.46 + "px";
        inputHeight.value = 1000;
        inputWidth.value = Math.round(1000 / 1.41);
        blockCanvasResizing(true);
        break;
    case '"ansiLetter"':
        selectCanvasSizePresets.value = "ansiLetter";
        canvas.style.height = "100%";
        canvas.style.width = canvas.offsetHeight / 1.29 + "px";
        inputHeight.value = 1000;
        inputWidth.value = Math.round(1000 / 1.29);
        blockCanvasResizing(true);
        break;
    case '"ansiLegal"':
        selectCanvasSizePresets.value = "ansiLegal";
        canvas.style.height = "100%";
        canvas.style.width = canvas.offsetHeight / 1.64 + "px";
        inputHeight.value = 1000;
        inputWidth.value = Math.round(1000 / 1.64);
        blockCanvasResizing(true);
        break;
    case '"desktop"':
        selectCanvasSizePresets.value = "desktop";
        canvas.style.width = "100%";
        canvas.style.height = canvas.offsetWidth / 1.78 + "px";
        inputWidth.value = 1000;
        inputHeight.value = Math.round(1000 / 1.78);
        blockCanvasResizing(true);
        break;
    case '"iphonex"':
        selectCanvasSizePresets.value = "iphonex";
        canvas.style.height = "100%";
        canvas.style.width = canvas.offsetHeight / 2.17 + "px";
        inputHeight.value = 1000;
        inputWidth.value = Math.round(1000 / 2.17);
        blockCanvasResizing(true);
        break;
}

if (savedItemCanvasPreset !== '"personalized"') {
    selectCanvasSizePresets.disabled = true;
    blockCanvasResizing(true);
}

// ------ Change canvas on SELECT CHANGE

selectCanvasSizePresets.oninput = function() {
    switch (this.value) {
        case "personalized":
            canvas.style.height = "40%";
            canvas.style.width = "40%";
            inputHeight.value = 400;
            inputWidth.value = 400;
            blockCanvasResizing(false);
            break;
        case "dinA":
            canvas.style.height = "100%";
            canvas.style.width = canvas.offsetHeight / 1.46 + "px";
            inputHeight.value = 1000;
            inputWidth.value = Math.round(1000 / 1.41);
            blockCanvasResizing(true);
            break;
        case "ansiLetter":
            canvas.style.height = "100%";
            canvas.style.width = canvas.offsetHeight / 1.29 + "px";
            inputHeight.value = 1000;
            inputWidth.value = Math.round(1000 / 1.29);
            blockCanvasResizing(true);
            break;
        case "ansiLegal":
            canvas.style.height = "100%";
            canvas.style.width = canvas.offsetHeight / 1.64 + "px";
            inputHeight.value = 1000;
            inputWidth.value = Math.round(1000 / 1.64);
            blockCanvasResizing(true);
            break;
        case "desktop":
            canvas.style.width = "100%";
            canvas.style.height = canvas.offsetWidth / 1.78 + "px";
            inputWidth.value = 1000;
            inputHeight.value = Math.round(1000 / 1.78);
            blockCanvasResizing(true);
            break;
        case "iphonex":
            canvas.style.height = "100%";
            canvas.style.width = canvas.offsetHeight / 2.17 + "px";
            inputHeight.value = 1000;
            inputWidth.value = Math.round(1000 / 2.17);
            blockCanvasResizing(true);
            break;
    }
}

// --- ANCHOR --- Change canvas orientation
// FIXME Limpiar código

changeCanvasOrientation.onclick = function() {
    if (!!inputHeight && !!inputWidth) {
        let _ = inputHeight.value;
        inputHeight.value = inputWidth.value;
        inputWidth.value = _;
    }

    switch (selectCanvasSizePresets.value) {
        case "personalized":
            canvas.style.height = inputHeight.value / 10 + "%";
            canvas.style.width = inputWidth.value / 10 + "%";
            break;
        case "dinA":
            if (inputWidth.value == 1000) {
                canvas.style.width = "100%";
                canvas.style.height = canvas.offsetWidth / 1.46 + "px";
            } else {
                canvas.style.height = "100%";
                canvas.style.width = canvas.offsetHeight / 1.46 + "px";
            }
            break;
        case "ansiLetter":
            if (inputWidth.value == 1000) {
                canvas.style.width = "100%";
                canvas.style.height = canvas.offsetHeight / 1.29 + "px";
            } else {
                canvas.style.height = "100%";
                canvas.style.width = canvas.offsetHeight / 1.29 + "px";
            }
            break;
        case "ansiLegal":
            if (inputWidth.value == 1000) {
                canvas.style.width = "100%";
                canvas.style.height = canvas.offsetHeight / 1.64 + "px";
            } else {
                canvas.style.height = "100%";
                canvas.style.width = canvas.offsetHeight / 1.64 + "px";
            }
            break;
        case "desktop":
            if (inputWidth.value == 1000) {
                canvas.style.width = "100%";
                canvas.style.height = canvas.offsetHeight / 1.78 + "px";
            } else {
                canvas.style.height = "100%";
                canvas.style.width = canvas.offsetHeight / 1.78 + "px";
            }
            break;
        case "iphonex":
            if (inputWidth.value == 1000) {
                canvas.style.width = "100%";
                canvas.style.height = canvas.offsetHeight / 2.17 + "px";
            } else {
                canvas.style.height = "100%";
                canvas.style.width = canvas.offsetHeight / 2.17 + "px";
            }
            break;
    }
}

// --- ANCHOR --- Canvas margin

inputChange(inputMargin, canvas, guides, "padding", "padding", "px", "", false);

// ------ ON WINDOW LOAD

canvas.style.padding = inputMargin.value + "px";
guides.style.padding = inputMargin.value + "px";

// ------ ON INPUT CHANGE

// inputChange(inputMargin, canvas, "padding", selectCanvasSizePresets);

// inputMargin.oninput = function() {
//     guides.style[referenceStyle] = this.value + "px";
// }

// inputMargin.focusout = function() {
//     limitMinVal(this);
// };

// ANCHOR --- GUIDES

// ------ Show guides

showGuides.onclick = function() {
    // Change icon
    if (showGuidesIcon.innerHTML == "visibility") {
        showGuidesIcon.innerHTML = "visibility_off";
    } else {
        showGuidesIcon.innerHTML = "visibility";
    }

    // Show guides or not

    if (guides.style.display == "grid") {
        guides.style.display = "none";
    } else {
        guides.style.display = "grid";
    }
}

// ------ Guides Quantity

guides.style.gridTemplateColumns = `repeat(${columnsQuantity.value}, 1fr)`;
guides.style.gridGap = gridGap.value + "px";

inputChange(gridGap, guides, null, "gridGap", null, "px", "", false);

guideOpcity.oninput = function() {
    for (i = 0; i < guide.length; i++) {
        limitMaxVal(this, guide[i].style, 'opacity');
        guide[i].style.opacity = this.value;
    }
}

guideOpcity.focusout = function() {
    limitMinVal(this);
};


// ------ Columns

columnsQuantity.oninput = function() {
    let referenceStyle = "gridTemplateColumns";
    limitMaxVal(this, guides.style, referenceStyle);

    guides.style.gridTemplateColumns = `repeat(${columnsQuantity.value}, 1fr)`;
    let columnsQuantityOnChange = "";
    for (i = 0; i < columnsQuantity.value * rowQuantity.value; i++) {
        columnsQuantityOnChange += `<div class="guide"></div>`
    }
    guides.innerHTML = columnsQuantityOnChange;
    guide = document.querySelectorAll("div.guide");
    for (i = 0; i < guide.length; i++) {
        guide[i].style.backgroundColor = inputColorGuides.value;
        guide[i].style.opacity = guideOpcity.value;
    }
}

columnsQuantity.focusout = function() {
    limitMinVal(this);
};

// ------ Rows

rowQuantity.oninput = function() {
    let referenceStyle = "gridTemplateRows";
    limitMaxVal(this, guides.style, referenceStyle);


    guides.style.gridTemplateRows = `repeat(${rowQuantity.value}, 1fr)`;
    let columnsQuantityOnChange = "";
    for (i = 0; i < columnsQuantity.value * rowQuantity.value; i++) {
        columnsQuantityOnChange += `<div class="guide"></div>`
    }
    guides.innerHTML = columnsQuantityOnChange;
    guide = document.querySelectorAll("div.guide");
    for (i = 0; i < guide.length; i++) {
        guide[i].style.backgroundColor = inputColorGuides.value;
        guide[i].style.opacity = guideOpcity.value;
    }
}

rowQuantity.focusout = function() {
    limitMinVal(this);
};

//
// ─── ANCHOR TEXT ────────────────────────────────────────────────────────────────
//

// ANCHOR Text align expression

let inputTextAlign = document.getElementById("inputTextAlign");



canvas.style.textAlign = inputTextAlign.value;

inputTextAlign.onchange = function() {
    canvas.style.textAlign = inputTextAlign.value;
}


// ANCHOR --- Text content change

// ------ ON WINDOW LOAD

contentTitle.innerHTML = inputTitle.placeholder;
contentSubtitle.innerHTML = inputSubtitle.placeholder;
contentBodyText.innerHTML = inputBodyText.placeholder;

// ------ ON INPUT CHANGE

inputTitle.oninput = function() {
    contentTitle.innerHTML = this.value;
}

inputSubtitle.oninput = function() {
    contentSubtitle.innerHTML = this.value;
}

inputBodyText.oninput = function() {
    contentBodyText.innerHTML = this.value;
}

// ANCHOR --- change font used

// ------ ON WINDOW LOAD

// contentTitle.style.fontWeight = titleFontChangeWeight.value;
// contentSubtitle.style.fontWeight = subTitleFontChangeWeight.value;
// contentBodyText.style.fontWeight = bodyTextFontChangeWeight.value;

// ------ ON INPUT CHANGE

titleFontChangeType.onchange = function() {
    contentTitle.style.fontFamily = this.value;
}

subtitleFontChangeType.onchange = function() {
    contentSubtitle.style.fontFamily = this.value;
}

bodyTextFontChangeType.onchange = function() {
    contentBodyText.style.fontFamily = this.value;
}

// ANCHOR --- change font weight


allFontChangeWeight[0].onchange = function() {
    contentTitle.style.fontWeight = allFontChangeWeight[0].value;
}
allFontChangeWeight[1].onchange = function() {
    contentSubtitle.style.fontWeight = allFontChangeWeight[1].value;
}
allFontChangeWeight[2].onchange = function() {
    contentBodyText.style.fontWeight = allFontChangeWeight[2].value;
}

allFontChangeStyle[0].onchange = function() {
    contentTitle.style.fontStyle = allFontChangeStyle[0].value;
}
allFontChangeStyle[1].onchange = function() {
    contentSubtitle.style.fontStyle = allFontChangeStyle[1].value;
}
allFontChangeStyle[2].onchange = function() {
    contentBodyText.style.fontStyle = allFontChangeStyle[2].value;
}



// ANCHOR --- Change font size

// ------ ON WINDOW LOAD

contentBodyText.style.fontSize = inputBodyTextSize.value + "pt";
contentSubtitle.style.fontSize = inputSubitleSize.value + "pt";
contentTitle.style.fontSize = inputTitleSize + "pt";



// ------ ON INPUT CHANGE


inputChange(inputEditTitle[0], contentTitle, null, "fontSize", null, "pt", "", false);
inputChange(inputEditSubtitle[0], contentSubtitle, null, "fontSize", null, "pt", "", false);
inputChange(inputEditBodyText[0], contentBodyText, null, "fontSize", null, "pt", "", false);

// ANCHOR --- Change line height

// ------ ON WINDOW LOAD

contentTitle.style.lineHeight = inputLineHeightTitle.value + "pt";
contentSubtitle.style.lineHeight = contentTitle.style.lineHeight + "pt";
contentBodyText.style.lineHeight = inputLineHeightBodyText.value + "pt";


// ------ ON INPUT CHANGE

inputChange(inputEditTitle[1], contentTitle, null, "lineHeight", null, "pt", "", false);
inputChange(inputEditSubtitle[1], contentSubtitle, null, "lineHeight", null, "pt", "", false);
inputChange(inputEditBodyText[1], contentBodyText, null, "lineHeight", null, "pt", "", false);


// ------ ON FONT SCALE

let changeFontSizeScale = document.querySelectorAll("button.changeFontSizeScale");

if (changeFontScaling.value == "0") {
    for (i = 0; i < changeFontSizeScale.length; i++) {
        changeFontSizeScale[i].disabled = true;
    }
}

changeFontScaling.onchange = function() {
    if (changeFontScaling.value !== "0") {
        for (i = 0; i < changeFontSizeScale.length; i++) {
            changeFontSizeScale[i].disabled = false;
        }
    } else {
        for (i = 0; i < changeFontSizeScale.length; i++) {
            changeFontSizeScale[i].disabled = true;
        }
    }
}


changeFontSizeScale[0].onclick = function() {
    if (changeFontScaling.value !== "0") {
        contentSubtitle.style.fontSize = inputTitleSize.value / (JSON.parse(changeFontScaling.value) * 2) + "pt";
        contentSubtitle.style.lineHeight = inputTitleSize.value / (JSON.parse(changeFontScaling.value) * 2) + 2 + "pt";
        contentBodyText.style.fontSize = inputTitleSize.value / (JSON.parse(changeFontScaling.value) * 3) + "pt";
        contentBodyText.style.lineHeight = inputTitleSize.value / (JSON.parse(changeFontScaling.value) * 3) + "pt";
    }
}

changeFontSizeScale[1].onclick = function() {
    if (changeFontScaling.value !== "0") {
        contentTitle.style.fontSize = inputSubitleSize.value * (JSON.parse(changeFontScaling.value) * 2) + "pt";
        contentBodyText.style.fontSize = inputSubitleSize.value / (JSON.parse(changeFontScaling.value) * 2) + "pt";
    }
}

changeFontSizeScale[2].onclick = function() {
    if (changeFontScaling.value !== "0") {
        contentTitle.style.fontSize = inputBodyTextSize.value * (JSON.parse(changeFontScaling.value) * 4) + "pt";
        contentSubtitle.style.fontSize = inputBodyTextSize.value * (JSON.parse(changeFontScaling.value) * 2) + "pt";
    }
}


//
// ─── ANCHOR CHANGE COLOR ────────────────────────────────────────────────────────
//

let colorPalettes = [{
        "kind": "bw",
        "text": [],
        "canvas": ["#000000", "#ffffff"]
    },
    {
        "kind": "modernColors",
        "text": ["#586C74", "#EEC0DB", "#FDE2C8", "#C6D7C7", "#1B1D1C"],
        "canvas": ["#D2DB01", "#172BF4", "#178E96", "#FF5034", "#77EEDF"]
    },
    {
        "kind": "traditionalColors",
        "text": ["#586C74", "#EEC0DB", "#FDE2C8", "#C6D7C7", "#1B1D1C"],
        "canvas": ["#D2DB01", "#172BF4", "#178E96", "#FF5034", "#77EEDF"]
    },
    {
        "kind": "rainbow",
        "text": ["#586C74", "#EEC0DB", "#FDE2C8", "#C6D7C7", "#1B1D1C"],
        "canvas": ["#D2DB01", "#172BF4", "#178E96", "#FF5034", "#77EEDF"]
    }
];

let textBwColors = ["#586C74", "#EEC0DB", "#FDE2C8", "#C6D7C7", "#1B1D1C"];
let canvasBwColors = ["#586C74", "#EEC0DB", "#FDE2C8", "#C6D7C7", "#1B1D1C"];

let textModernColors = ["#586C74", "#EEC0DB", "#FDE2C8", "#C6D7C7", "#1B1D1C"];
let canvasModernColors = ["#D2DB01", "#172BF4", "#178E96", "#FF5034", "#77EEDF"];

let textTraditionalColors = ["#26242B", "#113319", "#942929", "#343A42"];
let canvasTranditionalColors = ["#F9F0E6", "#F4F5F7", "#F5F5E0", "#f1f1f1"];


const colorizeCanvas = (textColor, canvasColor) => {
    if (inputColorTitle.disabled == false) {
        inputColorTitle.value = textColor;
        contentTitle.style.color = textColor;
    }

    if (inputColorSubtitle.disabled == false) {
        inputColorSubtitle.value = textColor;
        contentSubtitle.style.color = textColor;
    }

    if (inputColorBodyText.disabled == false) {
        inputColorBodyText.value = textColor;
        contentBodyText.style.color = textColor;
    }

    if (inputColorCanvas.disabled == false) {
        inputColorCanvas.value = canvasColor;
        canvasColor.value = canvasColor;
        canvas.style.backgroundColor = canvasColor;
    }
}

let colorPalette = document.getElementById("colorPalette");

const populateColors = () => {
    switch (savedItemColorStyle) {
        case '"bw"':
            colorizeCanvas("#000000", "#ffffff");
            colorPalette.value = "bw";
            break;
        case '"modernColors"':
            colorizeCanvas(textModernColors[0], canvasModernColors[0]);
            colorPalette.value = "modernColors";
            break;
        case '"traditionalColors"':
            colorizeCanvas(textTraditionalColors[0], canvasTranditionalColors[0]);
            colorPalette.value = "traditionalColors";
            break;
        case '"rainbow"':
            colorizeCanvas("#ff0000", "#ffffff");
            colorPalette.value = "rainbow";
            break;
    }
}

populateColors();



colorPalette.onchange = function() {
    switch (colorPalette.value) {
        case "bw":
            savedItemColorStyle = '"bw"';
            break;
        case "modernColors":
            savedItemColorStyle = '"modernColors"';
            break;
        case "traditionalColors":
            savedItemColorStyle = '"traditionalColors"';
            break;
        case "rainbow":
            savedItemColorStyle = '"rainbow"';
            break;
    }

}


// contentTitle.style.color = textModernColors[1];
// canvas.style.backgroundColor = canvasModernColors[1];
let changeInfoColorPalette = function() {
    infoColorPalette[0].style.backgroundColor = inputColorTitle.value;
    infoColorPalette[1].style.backgroundColor = inputColorSubtitle.value;
    infoColorPalette[2].style.backgroundColor = inputColorBodyText.value;
    infoColorPalette[3].style.backgroundColor = inputColorCanvas.value;

    infoColorPaletteInfo[0].innerHTML = inputColorTitle.value;
    infoColorPaletteInfo[1].innerHTML = inputColorSubtitle.value;
    infoColorPaletteInfo[2].innerHTML = inputColorBodyText.value;
    infoColorPaletteInfo[3].innerHTML = inputColorCanvas.value;
}

changeInfoColorPalette();





// ------ Text color

inputColorTitle.oninput = function() {
    contentTitle.style.color = this.value;
    changeInfoColorPalette();
}

inputColorSubtitle.oninput = function() {
    contentSubtitle.style.color = this.value;
    changeInfoColorPalette();
}

inputColorBodyText.oninput = function() {
    contentBodyText.style.color = this.value;
    changeInfoColorPalette();
}

// ------ Canvas color

inputColorCanvas.oninput = function() {
    canvas.style.backgroundColor = this.value;
    changeInfoColorPalette();
}

// ------ Guides color

for (i = 0; i < guide.length; i++) {
    guide[i].style.backgroundColor = inputColorGuides.value;
}

inputColorGuides.oninput = function() {
    for (i = 0; i < guide.length; i++) {
        guide[i].style.backgroundColor = this.value;
    }
}



let infoPanel = function() {


    let changeEmbedLink = function() {

        embed01.innerHTML = `<link href="https://fonts.googleapis.com/css?family=${titleFontChangeType.value.split(' ').join('+')}|${subtitleFontChangeType.value.split(' ').join('+')}|${bodyTextFontChangeType.value.split(' ').join('+')}" rel="stylesheet">`
    }

    changeEmbedLink();

    let changeEmbed02 = function() {
        embed02.innerHTML = "h1{ font-family: " + titleFontChangeType.value + ";" + "}"
        embed03.innerHTML = "h2{ font-family: " + subtitleFontChangeType.value + ";" + "}"
        embed04.innerHTML = "p{ font-family: " + bodyTextFontChangeType.value + ";" + "}"
    }

    changeEmbed02();

    titleFontName.innerHTML = "Title H1 - " + titleFontChangeType.value + ", " + inputTitleSize.value + "pt";

    titleFontChangeType.oninput = function() {
        titleFontName.innerHTML = "Title H1 - " + this.value + ", " + inputTitleSize.value + "pt";
        googleFontsLink01.innerHTML = `<p><a href="https://fonts.google.com/specimen/${titleFontChangeType.value.split(' ').join('+')}" target=“_blank”>See on Google Fonts</a></p>`;
        changeEmbedLink()
        changeEmbed02()
    }

    subtitleFontName.innerHTML = "Subtitle H2 - " + subtitleFontChangeType.value + ", " + inputSubitleSize.value + "pt";

    subtitleFontChangeType.oninput = function() {
        subtitleFontName.innerHTML = "Subtitle H2 - " + this.value + ", " + inputSubitleSize.value + "pt";
        googleFontsLink02.innerHTML = `<p><a href="https://fonts.google.com/specimen/${subtitleFontChangeType.value.split(' ').join('+')}" target=“_blank”>See on Google Fonts</a></p>`;
        changeEmbedLink()
        changeEmbed02()
    }


    bodyTextFontName.innerHTML = "Body Text - " + bodyTextFontChangeType.value + ", " + inputBodyTextSize.value + "pt";

    bodyTextFontChangeType.oninput = function() {
        bodyTextFontName.innerHTML = "Body Text - " + this.value + ", " + inputBodyTextSize.value + "pt";
        googleFontsLink03.innerHTML = `<p><a href="https://fonts.google.com/specimen/${bodyTextFontChangeType.value.split(' ').join('+')}" target=“_blank”>See on Google Fonts</a></p>`;
        changeEmbedLink()
        changeEmbed02()
    }

    googleFontsLink01.innerHTML = `<p><a href="https://fonts.google.com/specimen/${titleFontChangeType.value.split(' ').join('+')}" target=“_blank”>See on Google Fonts</a></p>`;
    googleFontsLink02.innerHTML = `<p><a href="https://fonts.google.com/specimen/${subtitleFontChangeType.value.split(' ').join('+')}" target=“_blank”>See on Google Fonts</a></p>`;
    googleFontsLink03.innerHTML = `<p><a href="https://fonts.google.com/specimen/${bodyTextFontChangeType.value.split(' ').join('+')}" target=“_blank”>See on Google Fonts</a></p>`;

}


// ---  ANCHOR POPULATE select with JSON Data from GOOGLE FONTS API

// --- Manual parse of the Session Storage

// FIXME Limpiar código

let parsedItemFontType = "";

if (savedItemFontType == '"all"') {
    parsedItemFontType = "all";
} else if (savedItemFontType == '"serif"') {
    parsedItemFontType = "serif";
} else if (savedItemFontType == '"sans-serif"') {
    parsedItemFontType = "sans-serif";
} else if (savedItemFontType == '"display"') {
    parsedItemFontType = "display";
} else if (savedItemFontType == '"handwriting"') {
    parsedItemFontType = "handwriting";
} else if (savedItemFontType == '"monospace"') {
    parsedItemFontType = "monospace";
}

let changeDocStyle = document.getElementById("changeDocStyle");

let downloadLink = "";

changeFontsType.value = parsedItemFontType;

let titleFontChangeWeight01 = document.getElementById("titleFontChangeWeight01");

$.getJSON(googleApi, function(data) {
    const loopFontSelect = (jsonData, type) => {
        if (type == "all") {
            for (i = 0; i < allFontChange.length; i++) {
                allFontChange[i].length = 0;
                for (o = 0; o < jsonData.items.length; o++) {
                    optionFonts = document.createElement('option');
                    optionFonts.text = jsonData.items[o].family;
                    optionFonts.value = jsonData.items[o].family;

                    allFontChange[i].add(optionFonts);
                }

            }
        } else if (sessionStorage.length == 0) {
            for (i = 0; i < allFontChange.length; i++) {
                allFontChange[i].length = 0;
                for (o = 0; o < jsonData.items.length; o++) {
                    optionFonts = document.createElement('option');
                    optionFonts.text = jsonData.items[o].family;
                    optionFonts.value = jsonData.items[o].family;

                    allFontChange[i].add(optionFonts);
                }

            }
        } else {
            for (i = 0; i < allFontChange.length; i++) {
                allFontChange[i].length = 0;
                for (o = 0; o < jsonData.items.length; o++) {
                    if (jsonData.items[o].category == type) {
                        optionFonts = document.createElement('option');
                        optionFonts.text = jsonData.items[o].family;
                        optionFonts.value = jsonData.items[o].family;

                        allFontChange[i].add(optionFonts);
                    }
                }
            }
        }


    }

    // FIXME Dirty Code

    if (savedItemFontStyle == '"modern"') {
        changeDocStyle.value = "modernfonts";
    } else if (savedItemFontStyle == '"traditional"') {
        changeDocStyle.value = "traditionalfonts";
    }

    let dataBase;

    switch (changeDocStyle.value) {
        case "data":
            dataBase = data;
            break;
        case "modernfonts":
            dataBase = modernFonts;
            break;
        case "traditional":
            dataBase = traditionalFonts;
            break;
    }

    loopFontSelect(dataBase, changeFontsType.value);

    changeDocStyle.onchange = function() {
        switch (changeDocStyle.value) {
            case "data":
                dataBase = data;
                changeFontsType.length = 0;
                optionFonts = `
                <option value="all">All</option>
                            <option value="serif">Serif</option>
                            <option value="sans-serif">Sans Serif</option>
                            <option value="display">Display</option>
                            <option value="handwriting">Handwriting</option>
                            <option value="monospace">Monospace</option>
                `;

                changeFontsType.innerHTML = optionFonts;
                break;
            case "modernfonts":
                dataBase = modernFonts;
                // NOTE NOWWW changeFontsType.

                changeFontsType.length = 0;
                optionFonts = `
                <option value="all">All</option>
                <option value="sans-serif">Sans Serif</option>
                <option value="display">Display</option>
                <option value="monospace">Monospace</option>
                `;

                changeFontsType.innerHTML = optionFonts;
                break;
            case "traditionalfonts":
                dataBase = traditionalFonts;

                changeFontsType.length = 0;
                optionFonts = `
                <option value="all">All</option>
                <option value="serif">Serif</option>
                <option value="handwriting">Handwriting</option>
                `;

                changeFontsType.innerHTML = optionFonts;
                break;
        }
        loopFontSelect(dataBase, changeFontsType.value);
        contentTitle.style.fontFamily = titleFontChangeType.value;
        contentSubtitle.style.fontFamily = subtitleFontChangeType.value;
        contentBodyText.style.fontFamily = bodyTextFontChangeType.value;

    }


    changeFontsType.onchange = function() {
        loopFontSelect(dataBase, changeFontsType.value);
        contentTitle.style.fontFamily = titleFontChangeType.value;
        contentSubtitle.style.fontFamily = subtitleFontChangeType.value;
        contentBodyText.style.fontFamily = bodyTextFontChangeType.value;
    }

    infoPanel();

});



// ANCHOR MENU
// ANCHOR --- Show menu
let mediaQueryMin1200 = window.matchMedia("(min-width: 1200px)");
let mediaQueryMax1200 = window.matchMedia("(max-width: 1200px)");

if (menu.style.display == "block") {
    showMenu.style.left = "320px";
}

if (mediaQueryMax1200.matches) {

    showMenu.onclick = function() {
        if (menu.style.display == "block") {
            showMenu.style.left = "20px";
            showMenu.children[0].innerHTML = "east";
            menu.style.display = "none";
        } else {
            showMenu.style.left = "320px";
            showMenu.children[0].innerHTML = "west";
            menu.style.display = "block";
        }
    }
}

if (mediaQueryMin1200.matches) {
    menu.style.display = "block";
}

/*
function resizeCanvasContainer(mediaQueryMax779) {
    window.onresize = function() {
        if (mediaQueryMax779.matches) { // If media query matches
            canvasContainer.style.width = "90%";
            canvasContainer.style.height = canvasContainer.offsetWidth + "px";

        } else {
            canvasContainer.style.height = "90%";
            canvasContainer.style.width = canvasContainer.offsetHeight + "px";
        }
    }
}

resizeCanvasContainer(mediaQueryMax779);
mediaQueryMax779.addListener(myFunction);
*/





hamburguerIndex.onclick = function() {
    if (headerInfo.style.display == "none") {
        headerInfo.style.display = "block";
    } else {
        headerInfo.style.display = "none";
    }
}

//
// ─── ANCHOR KEY GENERATOR ───────────────────────────────────────────────────────
//

// ANCHOR --- Prevent space scrolling down on page

window.addEventListener('keydown', function(f) {
    if (f.keyCode == 32 && f.target == document.body) {
        f.preventDefault();
    }
});


let numero = 0;

const cambiarFuenteComplementaria = (fuenteComplementaria) => {
    contentSubtitle.style.fontFamily = fuenteComplementaria;
    contentBodyText.style.fontFamily = fuenteComplementaria;
    subtitleFontChangeType.value = fuenteComplementaria;
    bodyTextFontChangeType.value = fuenteComplementaria;
}

const cambiarFuenteComplementariaTitle = (fuenteComplementaria) => {
    contentTitle.style.fontFamily = fuenteComplementaria;
    titleFontChangeType.value = fuenteComplementaria;
}

let modernNum = 0;

const generatorStuff = function() {
    for (i = 0; i < allFontChange.length; i++) {
        if (allFontChange[i].disabled == false) {
            // allFontChange[i].selectedIndex += 1;
            allFontChange[i].selectedIndex = Math.floor(Math.random() * allFontChange[i].length - 1) + 1;
        }
    }

    switch (savedItemColorStyle) {
        case '"bw"':
            colorizeCanvas("#000000", "#ffffff")
            break;
        case '"modernColors"':
            if (modernNum < textModernColors.length - 1) {
                modernNum += 1;
            } else {
                modernNum = 0;
            }
            colorizeCanvas(textModernColors[modernNum], canvasModernColors[modernNum])

            break;
        case '"traditionalColors"':
            if (modernNum < textTraditionalColors.length - 1) {
                modernNum += 1;
            } else {
                modernNum = 0;
            }
            colorizeCanvas(textTraditionalColors[modernNum], canvasTranditionalColors[modernNum]);

            break;

        case '"rainbow"':

            let randomColor = '#' + ('00000' + (Math.random() * (1 << 24) | 0).toString(16)).slice(-6);
            let randomColor02 = '#' + ('00000' + (Math.random() * (1 << 24) | 0).toString(16)).slice(-6);
            colorizeCanvas(randomColor, randomColor02);


            break;

    }

    // colorPalette.value = inputColorTitle.value.toUpperCase()





    // FIXME Poner esto de escoger la tipo de forma bonita
    if (changeDocStyle.value !== "data") {
        switch (titleFontChangeType.value) {
            case 'Crimson Text':
                cambiarFuenteComplementaria('Work Sans');
                break;
            case 'Oswald':
                cambiarFuenteComplementaria('Cardo');
                break;
            case 'Quicksand':
                cambiarFuenteComplementaria('Quicksand');
                break;
            case 'Archivo Black':
                cambiarFuenteComplementaria('Judson');
                break;
            case 'Abril Fatface':
                cambiarFuenteComplementaria('Roboto');
                break;
            case 'Archivo':
                cambiarFuenteComplementaria('Open Sans');
                break;
            case 'Montserrat':
                cambiarFuenteComplementaria('Work Sans');
                break;
            case 'Prata':
                cambiarFuenteComplementaria('Lato');
                break;
            case 'Montserrat':
                cambiarFuenteComplementaria('Lora');
                break;
            case 'Playfair Display':
                cambiarFuenteComplementaria('Chivo');
                break;
        }
        contentTitle.style.fontFamily = titleFontChangeType.value;
        contentSubtitle.style.fontFamily = subtitleFontChangeType.value;
        contentBodyText.style.fontFamily = bodyTextFontChangeType.value;

    } else {
        contentTitle.style.fontFamily = titleFontChangeType.value;
        contentSubtitle.style.fontFamily = subtitleFontChangeType.value;
        contentBodyText.style.fontFamily = bodyTextFontChangeType.value;
    }



    let rnd = Math.floor(Math.random() * 750) + 250;
    let rnd02 = Math.floor(Math.random() * 750) + 250;
    let rndmarg = Math.floor(Math.random() * 45) + 5;
    let rndTitle = Math.floor(Math.random() * 20) + 40;
    let rndSubtitle = Math.floor(Math.random() * 1) + 20;
    let rndBodyText = Math.floor(Math.random() * 24) + 8;

    if (inputMargin.disabled == false) {
        inputMargin.value = rndmarg;
        canvas.style.padding = inputMargin.value + "px";
        guides.style.padding = inputMargin.value + "px";
    }
    if (inputHeight.disabled == false) {
        inputHeight.value = rnd;
        canvas.style.height = rnd / 10 + "%";
    }
    if (inputWidth.disabled == false) {
        inputWidth.value = rnd02;
        canvas.style.width = rnd02 / 10 + "%";
    }

    switch (changeFontScaling.value) {
        case "0":
            if (inputTitleSize.disabled == false) {
                contentTitle.style.fontSize = rndTitle + "pt";
                contentTitle.style.lineHeight = rndTitle + "pt";
                inputTitleSize.value = rndTitle;
                inputLineHeightTitle.value = rndTitle;
            }

            if (inputSubitleSize.disabled == false) {
                contentSubtitle.style.fontSize = rndSubtitle + "pt";
                contentSubtitle.style.lineHeight = rndSubtitle + 10 + "pt";
                inputSubitleSize.value = rndSubtitle;
                inputLineHeightSubtitle.value = rndSubtitle + 10;
            }

            if (inputBodyTextSize.disabled == false) {
                contentBodyText.style.fontSize = rndBodyText + "pt";
                contentBodyText.style.lineHeight = rndBodyText + "pt";
                inputBodyTextSize.value = rndBodyText;
                inputLineHeightBodyText.value = rndBodyText;
            }
            break;
        case '1.25':
            if (inputBodyTextSize.disabled == false) {
                contentBodyText.style.fontSize = rndBodyText + "pt";
                contentBodyText.style.lineHeight = rndBodyText + 5 + "pt";
                inputBodyTextSize.value = rndBodyText;
                inputLineHeightBodyText.value = rndBodyText;
            }
            if (inputSubitleSize.disabled == false) {
                contentSubtitle.style.fontSize = rndBodyText * 1.25 + "pt";
                inputSubitleSize.value = rndBodyText * 1.25;
                contentSubtitle.style.lineHeight = rndBodyText * 1.25 + 10 + "pt";
                inputLineHeightSubtitle.value = rndBodyText * 1.25;
            }
            if (inputTitleSize.disabled == false) {
                contentTitle.style.fontSize = rndBodyText * 1.25 * 2 + "pt";
                inputTitleSize.value = rndBodyText * 1.25 * 2;
                inputLineHeightTitle.value = rndBodyText * 1.25 * 2;
                contentTitle.style.lineHeight = rndBodyText * 1.25 * 2 + "pt";

            }
            break;
        case '1.2':
            if (inputBodyTextSize.disabled == false) {
                contentBodyText.style.fontSize = rndBodyText + "pt";
                contentBodyText.style.lineHeight = rndBodyText + 5 + "pt";
                inputBodyTextSize.value = rndBodyText;
                inputLineHeightBodyText.value = rndBodyText;
            }
            if (inputSubitleSize.disabled == false) {
                contentSubtitle.style.fontSize = rndBodyText * 1.2 + "pt";
                inputSubitleSize.value = rndBodyText * 1.2;
                contentSubtitle.style.lineHeight = rndBodyText * 1.2 + 10 + "pt";
                inputLineHeightSubtitle.value = rndBodyText * 1.2;
            }
            if (inputTitleSize.disabled == false) {
                contentTitle.style.fontSize = rndBodyText * 1.2 * 2 + "pt";
                inputTitleSize.value = rndBodyText * 1.2 * 2;
                inputLineHeightTitle.value = rndBodyText * 1.2 * 2;
                contentTitle.style.lineHeight = rndBodyText * 1.2 * 2 + "pt";

            }
            break;
    }
}


document.body.onkeyup = function(e) {

    // ANCHOR --- Prevent space clicking on highlighted buttons
    if ($(document.activeElement).is('button') &&
        (e.keyCode === 13 || e.keyCode === 32)) {
        e.preventDefault();
    }

    // if (numero < 4) {
    //     numero += 1;
    // } else if (numero == 4) {
    //     numero = 0;
    // }

    // ANCHOR --- GENERATOR START

    if ($('textarea:focus').length == 0 && $('input:focus').length == 0) {
        if (e.keyCode == 32) {
            generatorStuff();
            changeInfoColorPalette();
            infoPanel();
        }
    }
}

let spaceClick = document.getElementById("spaceClick");

spaceClick.onclick = function() {
    generatorStuff();
    changeInfoColorPalette();
    infoPanel();
}

// ANCHOR SCROLLABLE

let allWheelableInputs = document.querySelectorAll("input.wheelable")
let allWheelableSelects = document.querySelectorAll("select.wheelable")


for (i = 0; i < allWheelableInputs.length; i++) {
    allWheelableInputs[i].addEventListener('mouseover', function() {
        this.focus();
    });
}

$("input.wheelable").scroll(function(e) {
    if (e.deltaY > 1) {
        $(this).value++;
    } else if (e.deltaY < -1) {
        $(this).value--;
    }
});


for (i = 0; i < allWheelableSelects.length; i++) {
    allWheelableSelects[i].addEventListener('wheel', function(e) {
        if (this.hasFocus) {
            return;
        }
        if (e.deltaY < 0) {
            this.selectedIndex = Math.max(this.selectedIndex - 1, 0);

        }
        if (e.deltaY > 0) {
            this.selectedIndex = Math.min(this.selectedIndex + 1, this.length - 1);
        }
    });
}


// TODO DOWNLOAD PDF




$('#downloadButton').click(function() {

    // html2canvas($('#canvasContainer'), {
    //     onrendered: function(canvas) {
    //         var a = document.createElement('a');
    //         // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
    //         a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
    //         a.download = 'astp_canvas.jpg';
    //         a.click();
    //     }
    // });
    let w = 1000;
    let h = 1000;
    let div = document.querySelector('#canvasContainer');
    let canvas = document.createElement('canvas');
    canvas.style.position = "absolute";
    canvas.left = 300 + "px";
    canvas.width = w * 3;
    canvas.height = h * 2;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    var context = canvas.getContext('2d');
    context.scale(2, 2);


    html2canvas(div, {
        canvas: canvas,
        onrendered: function(canvas) {
            saveAs(canvas.toDataURL(), 'canvas.png');
        }
    });



    let doc = new jsPDF('p', 'mm', [297, 210]);



    doc.addFont('Helvetica');


    let textPosition = 24;

    let titleH1 = function(text) {
        doc.setFontSize(20);
        doc.setTextColor(255, 0, 0);
        doc.setFont('Helvetica');
        doc.text(text, 24, textPosition, {
            'width': 170,
        });
        textPosition += 10;
    }
    doc.addFont('Helvetica');

    let dataText = function(i, e, f) {
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.setFont('Helvetica');
        doc.fromHTML("<b>" + i + "</b>" + " " + $(e).val() + ", " + $(f).text(), 24, textPosition, {
            'width': 170,
        });
        textPosition += 5;
    }

    titleH1("Fonts used:");

    dataText("Title:", "#titleFontChange", "#titleFontChangeWeight01 option:selected")
    dataText("Download link:", "#titleFontChange")
    dataText("Subtitle:", "#subtitleFontChange", "#titleFontChangeWeight02 option:selected")
    dataText("Body Text:", "#bodyTextFontChange", "#titleFontChangeWeight03 option:selected")

    dataText("Title Color:", "#inputColorTitle")
    dataText("Subtitle Color:", "#inputColorSubtitle")
    dataText("Body Text Color:", "#inputColorBodyText")
    dataText("Canvas Color:", "#inputColorCanvas")

    // File Name

    let fileName = 'astp_data' + '.pdf';

    doc.save(fileName);
});


function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}


// $('#downloadButton').click(function() {



//     // let titleH2 = function(text, tp) {
//     //     doc.setFontSize(14);
//     //     doc.setTextColor(0, 0, 0);
//     //     doc.setFont('Helvetica');
//     //     doc.text(text, 24, tp);
//     //     textPosition += 14;
//     // }

//     // titleH2("Title:", textPosition);

//     /*
//     https://github.com/MrRio/jsPDF
//     */


// });