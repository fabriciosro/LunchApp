const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://master:master1234@cluster0-qu4zl.mongodb.net/wherelunch?retryWrites=true&w=majority', {
    useNewUrlParser: true  
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);

