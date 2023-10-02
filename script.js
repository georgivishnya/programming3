var matrix = []
var n = 10
var m = 18
function kerparner(qanak, kerpar) {
    var k = 0
    while (k <= qanak) {
        var y = Math.floor(random(0, n))
        var x = Math.floor(random(0, m))
        if (matrix[y][x] == 0) {
            matrix[y][x] = kerpar
        }
        k++;
    }
}





var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var boomArr = [];
var vampirArr = [];
var side = 70;

function setup() {

    for (let i = 0; i < n; i++) {
        matrix.push([])
        for (let j = 0; j < m; j++) {
            matrix[i].push(0)

        }
    }

    kerparner(100, 1)
    kerparner(50, 2)
    kerparner(30, 3)
    kerparner(10, 4)
    kerparner(20, 5)
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                const gr = new Grass(j, i, 1);
                grassArr.push(gr);
            }
            else if (matrix[i][j] === 2) {
                const gr = new GrassEater(j, i, 2)
                grassEaterArr.push(gr)
            }
            else if (matrix[i][j] === 3) {
                const gr = new Predator(j, i, 3)
                predatorArr.push(gr)
            }
            else if (matrix[i][j] === 5) {
                const vr = new Vampir(j, i, 5)
                vampirArr.push(vr)
            }
            else if (matrix[i][j] === 4) {
                const bm = new Boom(j, i, 4)
                boomArr.push(bm)
            }
        }
    }
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("purple")
            }

            else if (matrix[y][x] == 4) {
                fill("black")
            }
            else if (matrix[y][x] == 5) {
                fill("red")
            }
            rect(x * side, y * side, side, side);


            fill("blue")
            text(x + " " + y, x * side + side / 2, y * side + side / 2)
        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].mul();
    }
    for (var i in predatorArr) {
        predatorArr[i].eat();
    }
    for (var i in predatorArr) {
        predatorArr[i].mul();
    }
    for (var i in vampirArr) {
        vampirArr[i].mul();
    }
    for (var i in vampirArr) {
        vampirArr[i].eat();
    }
     for (var i in boomArr) {
         boomArr[i].explode();
     }
}