'use strict'

const express = require('express');
const router = express.Router();

router.create = router.post('/', (req, res, next) =>{
    res.status(200).send(req.body);
});
router.put = router.put('/:id', (req, res, next) =>{
    const id = req.params.id;
    res.status(201).send({
        id:id,
        item: req.body
    });
});
router.del = router.delete('/:id', (req, res, next) =>{
    const id = req.params.id;
    res.status(200).send({
        id:id,
        item: req.body
    });
});

module.exports = router;