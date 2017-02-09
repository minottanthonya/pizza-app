var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var sequelize = require("./db.js");


var Order = sequelize.import("./models/order");
//a user model in sequelize
Order.sync();
//DANGER THIS DROPS THE TABLE COMPLETELY
//User.sync({force: true}); //drops the table completely

app.use(bodyParser.json());
app.use(require("./middleware/headers"));
app.use("/api/order", require("./routes/order"));


app.use("/api/test", function(req, res){
    res.send("Hello World");
});

app.listen(3000, function(){
    console.log("app is listening on 3000");
});