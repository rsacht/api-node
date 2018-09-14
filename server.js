'use strict'

const http = require('http');
const debug = require('debug')('nodestr:server');//nodestr é o nome do debug
const express = require('express');

const app = express();
const port = 3000;
app.set('port', port);

const server = http.createServer(app);
const router = express.Router();

//Rotas

let route = router.get('/', (req, res, next) =>{
    res.status(200).send({
       title: "Node Store API",
       version: "0.0.1" 
    });
});
app.use('/', route);

//Servidor Ouvindo na Porta
server.listen(port);
console.log('API rodando na porta '+ port);