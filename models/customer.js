const mongoose = require('mongoose');

var Customer = mongoose.model('customer', {

    customer_id: { type: Number },
    weight: { type: Number },
    ownerName: { type: String },
    racket_id: [
        { x: { type: Number } },
        { y: { type: Number } }
    ]

});
module.exports = { Customer };