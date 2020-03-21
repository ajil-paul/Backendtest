const mongoose = require('mongoose');
const Coordinate = require('./coordinate');
const Box = mongoose.model('box', {
    racket_id: [Coordinate],
    total_weight: { type: Number },
    rem_weight: { type: Number },
    no_of_items: { type: Number },
    status: { type: String }

});
module.exports = { Box };