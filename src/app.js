'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();

//Conexão com o Banco de Dados
mongoose.connect('mongodb://nodebr-user:node123456@ds261302.mlab.com:61302/nodedb',{useNewUrlParser:true});


//Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Atribuimos a Rota no app
app.use('/', indexRoute);
app.use('/products', productRoute);

//Exportando o app
module.exports = app;
