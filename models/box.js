const mongoose = require('mongoose');

var Box = mongoose.model('box', {
    racket_id: [
        { x_cord: { type: Number } },
        { y_cord: { type: Number } }
    ],
    total_weight: { type: Number },
    rem_weight: { type: Number },
    no_of_items: { type: Number },
    status: { type: String }

});
module.exports = { Box };