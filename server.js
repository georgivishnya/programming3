// var os = require("os");
// var message = "The platform is ";
// function main(){
// console.log(message + os.platform());
// }
// main();

// var express = require("express");
// var app = express();

// app.use(express.static("../programming3"));

// app.get("/", function(req, res){
// res.send("programming3");
// });

// app.get("/google/:pix", function (req, res) {
//     var searchvalue = req.params.pix;
//     res.redirect("https://google.com/search?q="+searchvalue)
//     }); 

// app.listen(3000, function(){
// console.log("Example is running on port 3000");
// })




var express = require("express");

var app = express();

var server = require('http').Server(app);

var io = require('socket.io')(server);

app.use(express.static("."));

app.get("/", function (req, res) {

    res.redirect("index.html");

});

server.listen(3000, function () {

    console.log("App is running on port 3000");

});


let random = require('./random')
let Grass = require('./grass')
let GrassEater = require('./grassEater')
let Predator = require('./predator')
let Vampir = require('./vampir')
let Boom = require('./BOOM')


grassArr = [];
grassEaterArr = [];
predatorArr = [];
boomArr = [];
vampirArr = [];


matrix = []
var n = 10
var m = 18


function kerparner(qanak, kerpar) {
    var k = 0
    while (k <= qanak) {
        var y = Math.floor(random(n))
        var x = Math.floor(random(m))
        if (matrix[y][x] == 0) {
            matrix[y][x] = kerpar
        }
        k++;
    }
}



function createGame () {
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


function drawGame() {
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
     io.emit("matrix", matrix)
}


io.on('connection', function(socket){
    socket.emit("matrix", matrix)
    createGame()
    startGame()
})

let intervalID;

function startGame() {
    clearInterval(intervalID);
    intervalID = setInterval(() => {
        drawGame()
    }, 3000);
}






