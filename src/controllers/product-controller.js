'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.post = (req, res, next) => {
    res.status(201).send(req.body);
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

