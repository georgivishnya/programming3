let colorObj = {
    green : "green",
    yellow: "yellow",
    purple: "purple",
    black: "black",
    red: "red"
}

let socket = io();

var side = 70;

function setup() {
    createCanvas(side * side, side * side);
    background('#acacac');
}

function drawful(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill(colorObj.green);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill(colorObj.yellow)
            }
            else if (matrix[y][x] == 3) {
                fill(colorObj.purple)
            }

            else if (matrix[y][x] == 4) {
                fill(colorObj.black)
            }
            else if (matrix[y][x] == 5) {
                fill(colorObj.red)
            }
            rect(x * side, y * side, side, side);


            fill("blue")
            text(x + " " + y, x * side + side / 2, y * side + side / 2)
        }
    }
}
socket.on('matrix', drawful)




let spring = document.getElementById("spr")
let summer = document.getElementById("sum")
let winter = document.getElementById("wt")
let autmn = document.getElementById("at")

spring.addEventListener("click", season)
summer.addEventListener("click", season)
autmn.addEventListener("click", season)
winter.addEventListener("click", season)



function season() {
    if( spring.innerText === "Spring" ) {
        colorObj.green = "orange"
        colorObj.yellow = "blue"
        colorObj.purple = "brown"
        colorObj.black = "gray"
        colorObj.red = "violet"        
    } else if (winter.innerText === "Winter") {
        colorObj.green = "white"
        colorObj.yellow = "gold"
        colorObj.purple = "khaki"
        colorObj.black = "indigo"
        colorObj.red = "lavender"     
    } else if (summer.innerText === "Summer") {
        colorObj.green = "ivory"
        colorObj.yellow = "lime"
        colorObj.purple = "magenta"
        colorObj.black = "maroon"
        colorObj.red = "navy"     
    } else if (autmn.innerText === "Autmn") {
        colorObj.green = "olive"
        colorObj.yellow = "orchid"
        colorObj.purple = "plum"
        colorObj.black = "peru"
        colorObj.red = "pink"     
    }

}


