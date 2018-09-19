'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) =>{
    Product
    .find({active: true}, 'title price slug')//busca tudo
    .then(data =>{//Tem resultado
        res.status(200).send(data);
    }).catch(e =>{//ou tem erro
        res.status(400).send(e);
    });
};

exports.getBySlug = (req, res, next) =>{
    Product
    .findOne({
        slug: req.params.slug,
        active: true
    }, 'title description price slug tags')//busca tudo
    .then(data =>{//Tem resultado
        res.status(200).send(data);
    }).catch(e =>{//ou tem erro
        res.status(400).send(e);
    });
};

exports.getById = (req, res, next) =>{
    Product
    .findById(req.params.id)
    .then(data =>{
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send(e);
    });
};

exports.getByTag = (req, res, next) =>{
    Product
    .find({
        tags:req.params.tag,
        active: true
    }, 'title description price slug tags')
    .then(data =>{
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send(e);
    });
};

exports.put = (req, res, next) =>{
    Product
    .findByIdAndUpdate(req.params.id,{
        $set:{
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        }
    }).then(x =>{
        res.status(200).send({
            message: 'Produto atualizado com sucesso!'
        });
    }).catch(e =>{
        res.status(400).send({
            message: 'Falha ao atualizar o produto',
            data: e
        });
    });
};

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

