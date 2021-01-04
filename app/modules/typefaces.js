let fontNameModern = ["Crimson Text", "Work Sans", "Oswald", "Cardo", "Quicksand", "Archivo Black", "Judson", "Abril Fatface", "Roboto", "Archivo", "Open Sans", "Montserrat", "Prata", "Lato", "Lora", "Playfair Display", "Chivo"];
let fontNameTraditional = ["Ibarra Real Nova", "Lora", "Merriweather", "Piazzolla", "Bitter", "Arvo"];


fontNameModern.sort(function(a, b) {
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
})

let modernFonts = {
    "kind": "webfonts#webfontList",
    "items": []
}

let traditionalFonts = {
    "kind": "webfonts#webfontList",
    "items": []
}



$.getJSON(googleApi, function(data) {
    for (i = 0; i < fontNameModern.length; i++) {
        for (o = 0; o < data.items.length; o++) {
            if (fontNameModern[i] == data.items[o].family) {
                modernFonts.items.push(data.items[o]);
            }
        }
    }
    for (i = 0; i < fontNameTraditional.length; i++) {
        for (o = 0; o < data.items.length; o++) {
            if (fontNameTraditional[i] == data.items[o].family) {
                traditionalFonts.items.push(data.items[o]);
            }
        }
    }

});