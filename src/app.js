'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();
const router = express.Router();

//Conexão com o Banco de Dados
mongoose.connect(config.connectionString,{useNewUrlParser:true});
mongoose.set('useCreateIndex', true);

//Carrega os Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

//Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:false}));

//Atribuimos a Rota no app
app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

//Exportando o app
module.exports = app;