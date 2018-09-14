'use strict'

const express = require('express');
const router = express.Router();

let app = express();

//Criamos a Rota
const route = router.get('/', (req, res, next) =>{
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});
//Atribuimos a Rota no app
app.use('/', route);

//Exportando o app
module.exports = app;
