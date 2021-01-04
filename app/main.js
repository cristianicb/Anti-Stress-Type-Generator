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

let mediaQueryMin1200 = window.matchMedia("(min-width: 1200px)");
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


/* FIXME Limite de los input hace que cuando un input tenga el
mínimo de varios dígitos no se pueda escribir el valor escogido.
Por eso hace la cosa rara.
DOS POSIBLES SOLUCIONES:
- onfocusout: dejar al usuario escribir el número pero cuando este
sea menor que el minVal se cambie automáticamente
- Almacenar el valor que ponga el usuario y pasarlo al input cuando salga
 */

// limitEdgesInputs(this);

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

contentTitle.style.fontWeight = titleFontChangeWeight.value;
contentSubtitle.style.fontWeight = subTitleFontChangeWeight.value;
contentBodyText.style.fontWeight = bodyTextFontChangeWeight.value;

// ------ ON INPUT CHANGE

titleFontChangeType.onchange = function() {
    contentTitle.style.fontFamily = this.value;
    console.log(titleFontChangeType.value)
}

subtitleFontChangeType.onchange = function() {
    contentSubtitle.style.fontFamily = this.value;
}

bodyTextFontChangeType.onchange = function() {
    contentBodyText.style.fontFamily = this.value;
}

// ANCHOR --- change font weight

for (i = 0; i < allFontChangeWeight.length; i++) {
    allFontChangeWeight[i].onchange = function() {
        if ($(this).attr("class").split(' ')[1] == "title") {
            contentTitle.style.fontWeight = this.value;
        } else if ($(this).attr("class").split(' ')[1] == "subtitle") {
            contentSubtitle.style.fontWeight = this.value;
        } else if ($(this).attr("class").split(' ')[1] == "bodyText") {
            contentBodyText.style.fontWeight = this.value;
        }
    }
}

// ANCHOR --- Change font size

// ------ ON WINDOW LOAD

contentTitle.style.fontSize = inputTitleSize.value + "pt";
contentSubtitle.style.fontSize = inputSubitleSize.value + "pt";
contentBodyText.style.fontSize = inputBodyTextSize.value + "pt";

// ------ ON INPUT CHANGE

inputChange(inputEditTitle[0], contentTitle, null, "fontSize", null, "pt", "", false);
inputChange(inputEditSubtitle[0], contentSubtitle, null, "fontSize", null, "pt", "", false);
inputChange(inputEditBodyText[0], contentBodyText, null, "fontSize", null, "pt", "", false);

// ANCHOR --- Change line height

// ------ ON WINDOW LOAD

contentTitle.style.lineHeight = inputLineHeightTitle.value + "pt";
contentSubtitle.style.lineHeight = inputLineHeightSubtitle.value + "pt";
contentBodyText.style.lineHeight = inputLineHeightBodyText.value + "pt";

// ------ ON INPUT CHANGE

inputChange(inputEditTitle[1], contentTitle, null, "lineHeight", null, "pt", "", false);
inputChange(inputEditSubtitle[1], contentSubtitle, null, "lineHeight", null, "pt", "", false);
inputChange(inputEditBodyText[1], contentBodyText, null, "lineHeight", null, "pt", "", false);

// inputEditTitle[1].oninput = function() {
//     if (inputEditTitle[1].value < 2) {
//         contentTitle.style.marginTop = "-" + inputEditTitle[1].value + "pt";
//         console.log("a")
//     }
// }

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
let canvasTranditionalColors = ["#F9F0E6", "#F4F5F7", "#F5F5E0", "f1f1f1"];


const colorizeCanvas = (textColor, canvasColor) => {
    inputColorTitle.value = textColor;
    canvasColor.value = canvasColor;

    contentTitle.style.color = textColor;
    contentSubtitle.style.color = textColor;
    contentBodyText.style.color = textColor;

    canvas.style.backgroundColor = canvasColor;
}

let colorPalette = document.getElementById("colorPalette");

const populateColors = () => {
    switch (savedItemColorStyle) {
        case '"bw"':
            colorizeCanvas("#000000", "#ffffff");
            for (i = 0; i < colorPalettes[0].canvas.length; i++) {
                optionFonts = document.createElement('option');
                optionFonts.text = textModernColors[i];
                optionFonts.value = textModernColors[i];
                colorPalette.add(optionFonts);
            }
            break;
        case '"modernColors"':
            colorizeCanvas(textModernColors[0], canvasModernColors[0]);
            colorPalette.length = 0;
            for (i = 0; i < colorPalettes[1].canvas.length; i++) {
                optionFonts = document.createElement('option');
                optionFonts.text = colorPalettes[1].text[i];
                optionFonts.value = colorPalettes[1].canvas[i];
                colorPalette.add(optionFonts);
            }
            break;
        case '"traditionalColors"':
            colorizeCanvas(textTraditionalColors[0], canvasTranditionalColors[0]);
            break;
        case '"rainbow"':
            colorizeCanvas("#ff0000", "#ffffff")
            break;
    }
}

populateColors();

colorPalette.onchange = function() {
    inputColorTitle.value = this.value;
    contentTitle.style.color = this.value;
}


// contentTitle.style.color = textModernColors[1];
// canvas.style.backgroundColor = canvasModernColors[1];






// ------ Text color

inputColorTitle.oninput = function() {
    contentTitle.style.color = this.value;
}

inputColorSubtitle.oninput = function() {
    contentSubtitle.style.color = this.value;
}

inputColorBodyText.oninput = function() {
    contentBodyText.style.color = this.value;
}

// ------ Canvas color

inputColorCanvas.oninput = function() {
    canvas.style.backgroundColor = this.value;
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



changeFontsType.value = parsedItemFontType;

// if (savedItemFontType == '"all"') {
//     for (i = 0; i < allFontChange.length; i++) {
//         allFontChange[i].length = 0;
//         for (o = 0; o < jsonData.items.length; o++) {
//             optionFonts = document.createElement('option');
//             optionFonts.text = jsonData.items[o].family;
//             optionFonts.value = jsonData.items[o].family;
//             allFontChange[i].add(optionFonts);
//         }
//     }
// } else {
//     for (i = 0; i < allFontChange.length; i++) {
//         allFontChange[i].length = 0;
//         for (o = 0; o < jsonData.items.length; o++) {
//             if (jsonData.items[o].category == changeFontsType.value) {
//                 optionFonts = document.createElement('option');
//                 optionFonts.text = jsonData.items[o].family;
//                 optionFonts.value = jsonData.items[o].family;
//                 allFontChange[i].add(optionFonts);
//             }
//         };
//     };
// }


$.getJSON(googleApi, function(data) {
    const loopFontSelect = (jsonData, type) => {
        if (type == "all") {
            for (i = 0; i < allFontChange.length; i++) {
                allFontChange[i].length = 0;
                for (o = 0; o < jsonData.items.length; o++) {
                    optionFonts = document.createElement('option');
                    optionFonts.text = jsonData.items[o].family;
                    optionFonts.value = jsonData.items[o].family;
                    // if (jsonData.items[o].family == titleFontChangeType.value) {
                    //     for (u = 0; u < jsonData.items[o].variants.length; u++) {
                    //         optionFonts02 = document.createElement('option');
                    //         optionFonts02.text = jsonData.items[o].variants[u];
                    //         optionFonts02.value = jsonData.items[o].variants[u];
                    //         titleFontChangeWeight.add(optionFonts02);
                    //     }
                    // }
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
                        // if (jsonData.items[o].family == titleFontChangeType.value) {
                        //     for (u = 0; u < jsonData.items[o].variants.length; u++) {
                        //         optionFonts02 = document.createElement('option');
                        //         optionFonts02.text = jsonData.items[o].variants[u];
                        //         optionFonts02.value = jsonData.items[o].variants[u];
                        //         titleFontChangeWeight.add(optionFonts02);
                        //     }
                        // }
                        allFontChange[i].add(optionFonts);
                    }
                }
            }
        }


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
                break;
            case "modernfonts":
                dataBase = modernFonts;
                break;
            case "traditionalfonts":
                dataBase = traditionalFonts;
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

    // FIXME Dirty Code

    if (savedItemFontStyle == '"modern"') {
        changeDocStyle.value = "modernfonts";
    } else if (savedItemFontStyle == '"traditional"') {
        changeDocStyle.value = "traditionalfonts";
    }

});

// ANCHOR MENU
// ANCHOR --- Show menu

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
    if (mediaQueryMin1200.matches) {
        menu.style.display = "block";
    }
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

document.body.onkeyup = function(e) {

    // ANCHOR --- Prevent space clicking on highlighted buttons

    if ($(document.activeElement).is('button') &&
        (e.keyCode === 13 || e.keyCode === 32)) {
        e.preventDefault();
    }

    if (numero < 4) {
        numero += 1;
    } else if (numero == 4) {
        numero = 0;
    }




    // ANCHOR --- GENERATOR START



    if ($('textarea:focus').length == 0 && $('input:focus').length == 0) {
        if (e.keyCode == 32) {

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

            colorPalette.value = inputColorTitle.value.toUpperCase();





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
            let rndtitle = Math.floor(Math.random() * 20) + 40;
            let rndsbtitle = Math.floor(Math.random() * 1) + 20;

            if (inputMargin.disabled == false) {
                inputMargin.value = rndmarg;
                canvas.style.padding = inputMargin.value + "px";
                guides.style.padding = inputMargin.value + "px";
            } else {}


            if (inputHeight.disabled == false) {
                inputHeight.value = rnd;
                canvas.style.height = rnd / 10 + "%";
            } else {}
            if (inputWidth.disabled == false) {
                inputWidth.value = rnd02;
                canvas.style.width = rnd02 / 10 + "%";
            } else {}

            contentTitle.style.fontSize = rndtitle + "pt";
            contentSubtitle.style.fontSize = rndsbtitle + "pt";


        }
    }
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


// $('.downloadButton').click(function() {

//     /*
//     https://github.com/MrRio/jsPDF
//     */

//     let doc = new jsPDF('p', 'pt', 'letter');
//     source = canvas;

//     specialElementHandlers = {
//         '#bypassme': function(element, renderer) {
//             return true
//         }
//     };
//     margins = {
//         top: 80,
//         bottom: 60,
//         left: 40,
//         width: 522
//     };

//     doc.fromHTML(
//         source,
//         margins.left, // x coord
//         margins.top, { // y coord
//             'width': margins.width,
//             'elementHandlers': specialElementHandlers
//         },

//         function(dispose) {
//             doc.save('Prueba.pdf');
//         }, margins
//     );
// });




// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────


// ANCHOR *** DEVELOPMENT ***
/*

for (i = 0; i < allFontChange.length; i++) {
    allFontChange[i].onchange = function() {
        if ($(this).attr("class").split(' ')[1] == "title") {
            contentTitle.style.fontFamily = this.value;
        } else if ($(this).attr("class").split(' ')[1] == "subtitle") {
            contentSubtitle.style.fontFamily = this.value;
        } else if ($(this).attr("class").split(' ')[1] == "bodyText") {
            contentBodyText.style.fontFamily = this.value;
        }
    }
}

    $(document).ready(function() { });

    window.onresize = function maneja() {
        if (mediaQueryA.matches) {
            canvasContainer.style.height = canvasContainer.offsetWidth + "px";
        } else {
            canvasContainer.style.width = canvasContainer.offsetHeight + "px";
        }
    };

    let mediaQueryA = window.matchMedia("(max-width: 885px)");

    mediaQueryA.addListener(maneja);




    RULER IDEA TO NORMALIZE NUMBERS

    vvv This goes in the html vvv 
    <div id="anchoDinA4" class="anchoDinA4"></div>


    let rulerAnchoDina4 = document.getElementById("anchoDinA4");

    const normalizarMilimetros = rulerAnchoDina4.offsetWidth / (canvas.offsetWidth - canvas.marginLeft * 2);

    console.log(canvas.style.marginRight);
    console.log(rulerAnchoDina4.offsetWidth);
    console.log(canvas.clientWidth);
    console.log(normalizarMilimetros);

    let anchoactual = rulerAnchoDina4.offsetWidth;

 rulerAnchoDina4.style.width = anchoactual / normalizarMilimetros + "px"



 // --- Block Height or Width separately

// ----- Height

blockInputTitle.onclick = function() {
    blockAnything(inputTitleSize)
};

// blockInputSubtitle.onclick = function() {
//     blockAnything(inputTitleSize)
// };

// blockInputTitle.onclick = function() {
//     blockAnything(inputTitleSize)
// };


// ----- Height


for (var i = 0; i < allBlockButtons.length; i++) {

    allBlockButtons[i].addEventListener('click', function() {
        // blockAnything(this.value);
        console.log(this.className.substring(11, 16));
    });
}

// ----- Width

// blockWidth.onclick = function() {
//     blockAnything(inputWidth);
// }



// const blockAnything = (whatToBlock) => {
//     if (whatToBlock.disabled == true) {
//         whatToBlock.disabled = false;
//     } else {
//         whatToBlock.disabled = true;
//     }
// }



// ---  Populate select with JSON Data from typefaces.js

// for (i = 0; i < allFontChange.length; i++) {
//     allFontChange[i].length = 0;
//     if (savedItemFontType == '"any"') {
//         changeFontsType.selectedIndex = 0;
//         for (e = 0; e < fonts.length; e++) {
//             optGroupFonts = document.createElement('optgroup');
//             optGroupFonts.label = fonts[e].label;
//             allFontChange[i].add(optGroupFonts);
//             for (o = 0; o < fonts[e].content.length; o++) {
//                 optionFonts = document.createElement('option');
//                 optionFonts.text = fonts[e].content[o].name;
//                 optionFonts.value = fonts[e].content[o].value;
//                 allFontChange[i].add(optionFonts);
//             }
//         };

//     } else {
//         changeFontsType.selectedIndex = parsedItemFontType + 1;
//         optGroupFonts = document.createElement('optgroup');
//         optGroupFonts.label = fonts[parsedItemFontType].label;
//         allFontChange[i].add(optGroupFonts);
//         for (o = 0; o < fonts[parsedItemFontType].content.length; o++) {
//             optionFonts = document.createElement('option');
//             optionFonts.text = fonts[parsedItemFontType].content[o].name;
//             optionFonts.value = fonts[parsedItemFontType].content[o].value;
//             allFontChange[i].add(optionFonts);
//         }
//     }
// }




// AN IDEA TO POPULATE SELECT


    // if (savedItemFontType == '"any"') {
    //     for (i = 0; i < allFontChange.length; i++) {
    //         allFontChange[i].length = 0;
    //         for (o = 0; o < data.items.length; o++) {
    //             if (data.items[o].category == "serif") {
    //                 optionFonts = document.createElement('option');
    //                 optionFonts.text = data.items[o].family;
    //                 optionFonts.value = data.items[o].family;
    //                 allFontChange[i].add(optionFonts);
    //                 googleFontsLenght += 1;
    //             }
    //         };
    //     };
    // } else if (savedItemFontType == '"0"') {
    //     for (i = 0; i < allFontChange.length; i++) {
    //         allFontChange[i].length = 0;
    //         for (o = 0; o < data.items.length; o++) {
    //             if (data.items[o].category == "serif") {
    //                 optionFonts = document.createElement('option');
    //                 optionFonts.text = data.items[o].family;
    //                 optionFonts.value = data.items[o].family;
    //                 allFontChange[i].add(optionFonts);
    //                 googleFontsLenght += 1;
    //             }
    //         }
    //     }
    // } else if (savedItemFontType == '"1"') {
    //     for (i = 0; i < allFontChange.length; i++) {
    //         allFontChange[i].length = 0;
    //         for (o = 0; o < data.items.length; o++) {
    //             if (data.items[o].category == "sans-serif") {
    //                 optionFonts = document.createElement('option');
    //                 optionFonts.text = data.items[o].family;
    //                 optionFonts.value = data.items[o].family;
    //                 allFontChange[i].add(optionFonts);
    //                 googleFontsLenght += 1;
    //             }
    //         }
    //     };
    // } else if (savedItemFontType == '"2"') {
    //     for (i = 0; i < allFontChange.length; i++) {
    //         allFontChange[i].length = 0;
    //         for (o = 0; o < data.items.length; o++) {
    //             if (data.items[o].category == "display") {
    //                 optionFonts = document.createElement('option');
    //                 optionFonts.text = data.items[o].family;
    //                 optionFonts.value = data.items[o].family;
    //                 allFontChange[i].add(optionFonts);
    //                 googleFontsLenght += 1;
    //             }
    //         }
    //     };
    // } else if (savedItemFontType == '"3"') {
    //     for (i = 0; i < allFontChange.length; i++) {
    //         allFontChange[i].length = 0;
    //         for (o = 0; o < data.items.length; o++) {
    //             if (data.items[o].category == "handwriting") {
    //                 optionFonts = document.createElement('option');
    //                 optionFonts.text = data.items[o].family;
    //                 optionFonts.value = data.items[o].family;
    //                 allFontChange[i].add(optionFonts);
    //                 googleFontsLenght += 1;
    //             }
    //         }
    //     };
    // } else {
    //     for (i = 0; i < allFontChange.length; i++) {
    //         allFontChange[i].length = 0;
    //         for (o = 0; o < data.items.length; o++) {
    //             if (data.items[o].category == "monospace") {
    //                 optionFonts = document.createElement('option');
    //                 optionFonts.text = data.items[o].family;
    //                 optionFonts.value = data.items[o].family;
    //                 allFontChange[i].add(optionFonts);
    //                 googleFontsLenght += 1;
    //             }
    //         }
    //     };
    // }

    // INPUT OLD HEIGHT

    // inputHeight.oninput = function() {
//     limitMaxVal(this, canvas.style, 'height');
//     selectCanvasSizePresets.value = "personalized";
// };

// inputHeight.focusout = function() {
//     limitMinVal(this);
// };

// inputWidth.oninput = function() {
//     limitMaxVal(this, canvas.style, 'width');
//     selectCanvasSizePresets.value = "personalized";
// };

// inputWidth.focusout = function() {
//     limitMinVal(this);
// };


 */