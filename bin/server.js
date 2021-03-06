'use strict'

const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');//nodestr é o nome do debug

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

//Servidor Ouvindo na Porta
server.listen(port);
//Servidor Retornando Erros
server.on('error', onError);
//Servidor ouvindo o listening do servidor HTTP
server.on('listening', onListening);

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

//Tratando Erros da Porta (express-generator)
function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Porta ' + port;

    switch(error.code){
        case 'EACCES':
            console.error(bind + 'requer privilégio mais elevado para acesso');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' já está em uso');
            process.exit(1);
            break;
        default:
        throw error;
    }
}

//Ouvindo eventos para o evento "listening" do servidor HTTP
function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'Pipe ' + addr
        : 'Porta' + addr.port;
    debug('Ouvindo na ' + bind);
}