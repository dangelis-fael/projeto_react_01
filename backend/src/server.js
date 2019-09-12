const express = require('express');
const mongoose = require('mongoose');
const routes = require ('./routes.js');

const server = express();

mongoose.connect('mongodb+srv://rnogueira:rafael1205@cluster0-b7ytc.mongodb.net/projeto_react?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use (express.json());
server.use (routes);
server.listen(3333);

