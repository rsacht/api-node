'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) =>{
    Product
    .find({})//busca tudo
    .then(data =>{//Tem resultado
        res.status(200).send(data);
    }).catch(e =>{//ou tem erro
        res.status(400).send(e);
    });
}

exports.post = (req, res, next) => {
    var product = new Product(req.body);

    product
        .save()
        .then(x =>{
            res.status(201).send({
                message: 'Produto Cadastrado com Sucesso!'
            });
        }).catch(e =>{
            res.status(400).send({
                message: 'Falha ao Cadastrar o Produto',
                data: e
            });
        });
};

exports.put = (req, res, next) =>{
    const id = req.params.id;
    res.status(201).send({
        id:id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(201).send(req.body);
};

