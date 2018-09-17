'use strict'

const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const router = express.Router();



//Criamos a Rota
const route = router.get('/', (req, res, next) =>{
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

const create = router.post('/', (req, res, next) =>{
    res.status(200).send(req.body);
});
//Atribuimos a Rota no app
app.use('/', route);
app.use('/products', create);

//Exportando o app
module.exports = app;
