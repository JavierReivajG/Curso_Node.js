const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors')
const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');

db('mongodb+srv://JavierReivajGomez:Palonitas111@cluster0.ps4fu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);

router(app);

app.use('/app', express.static('public'));

server.listen(3000, function() {
    console.log('La aplicación está escuchando en http://localhost:3000');
});

