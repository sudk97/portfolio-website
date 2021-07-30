
//All color palettes in use, will change on click or load
var colorPalettes = [
    {"--bg1": "#654062", "--txt1": "#FFD66B", "--txt2": "#F4F4F4"},
    {"--bg1": "#F3F4ED", "--txt1": "#C06014", "--txt2": "#536162"}
];

var prevColorIndex = 1;
var colorIndex = 1;

function randomizeColors(){
    while(colorIndex == prevColorIndex)
    {
        colorIndex = Math.floor(Math.random()*colorPalettes.length);
    }
    prevColorIndex = colorIndex;
    var colorDict = colorPalettes[colorIndex];
    for (var key in colorDict) {
        if (colorDict.hasOwnProperty(key)) {           
        document.querySelector(':root').style.setProperty(key, colorDict[key]);
        }
    }   
}

