'use strict'

const http = require('http');
const debug = require('debug')('nodestr:server');//nodestr é o nome do debug
const express = require('express');

const app = express();
const port = normalizePort(process.env.PORT || '3000');
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

//Normalizando a Porta (express-generator)
function normalizePort(val){
    const port = parseInt(val, 10);
    //Se o valor não for um número retorna o 10
    if(isNaN(port)){
        return val;
    }
    //Se a porta for maior ou igual a zer retorna a porta
    if (port >=0){
        return port;
    }
    //Não retorna valor nenhum valor
    return false;
}