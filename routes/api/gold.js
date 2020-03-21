const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Customer } = require('../../models/customer');
var { Box } = require('../../models/box');

// => localhost:5000/gold/
router.get('/', (req, res) => {
    Customer.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Customer.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {


    var customer = new Customer({
        customer_id: req.body.goldid,
        ownerName: req.body.ownerName,
        weight: req.body.weight,
    });
    Box.findOneAndUpdate({
        rem_weight: { $gt: req.body.weight }
    },
        { $set: { rem_weight: rem_weight - req.body.weight, no_of_items: no_of_items + 1 } },
        (err, doc) => {
            customer.racketid.x = doc.racketid.x;
            customer.racketid.y = doc.racketid.y;
        })
    customer.save((err, doc) => {
        if (!err) { res.send(doc); }
        else {
            console.log('Error :' + JSON.stringify(err, undefined, 2));
            res.status(400).send(err);
        }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var goldentry = {
        weight: req.body.weight,
        ownerName: req.body.ownerName,
        goldid: req.body.goldid

    };
    Customer.findByIdAndUpdate(req.params.id, { $set: goldentry }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Customer.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;