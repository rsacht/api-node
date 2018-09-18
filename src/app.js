'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();

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
