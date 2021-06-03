const express = require("express");
const bodyParser = require("body-parser");

const db = require('./db');

const router = require("./network/routes")

db('mongodb://JavierReivajGomez:Palonitas111@cluster0-shard-00-00.ps4fu.mongodb.net:27017,cluster0-shard-00-01.ps4fu.mongodb.net:27017,cluster0-shard-00-02.ps4fu.mongodb.net:27017/Telegrom?ssl=true&replicaSet=atlas-117l5p-shard-0&authSource=admin&retryWrites=true&w=majority');

var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

router(app)

app.use("/app", express.static("public"))

app.listen(3000)
console.log("la app esta escuchando en http://localhost:3000")