'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product-repository');

exports.get = (req, res, next) =>{
    repository
    .get()
    .then(data =>{//Tem resultado
        res.status(200).send(data);
    }).catch(e =>{//ou tem erro
        res.status(400).send(e);
    });
};

exports.getBySlug = (req, res, next) =>{
    repository
    .getBySlug(req.params.slug)
    .then(data =>{//Tem resultado
        res.status(200).send(data);
    }).catch(e =>{//ou tem erro
        res.status(400).send(e);
    });
};

exports.getById = (req, res, next) =>{
    repository
    .getById(req.params.id)
    .then(data =>{
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send(e);
    });
};

exports.getByTag = (req, res, next) =>{
    repository
    .getByTag(req.params.tag)
    .then(data =>{
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send(e);
    });
};

exports.post = (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, 'O título deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.slug, 3, 'O slug deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.description, 3, 'A descrição deve conter pelo menos 3 caracteres');
  

    //Se os dados forem inválidos
    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }

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
    Product
    .findByIdAndUpdate(req.params.id,{
        $set:{
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            slug: req.body.slug
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

exports.delete = (req, res, next) =>{
    Product
    .findOneAndRemove(req.body.id).then(x =>{
        res.status(200).send({
            message: 'Produto removido com sucesso!'
        });
    }).catch(e =>{
        res.status(400).send({
            message: 'Falha ao remover o produto',
            data: e
        });
    });
};

