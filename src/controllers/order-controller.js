'use strict';

const repository = require('../repositories/order-repository');
const uuid = require('node-uuid');

exports.post = async (req, res, next) => {
    try {
        await repository.create({
            customer:req.body.customer,
            number:uuid.raw().substring(0,6),
            items:req.body.items
        });
        res.status(201).send({
            message: 'Pedido cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};