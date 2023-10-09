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

app.use(express.static("../programming3"));

app.get("/", function(req, res){

res.redirect("index.html");

});

app.listen(3000, function(){

console.log("Example is running on port 3000");

});