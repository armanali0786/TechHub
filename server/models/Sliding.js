const mongoose = require('mongoose');

const slidingSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        required: true
    },

});

const Sliding = mongoose.model('Sliding', slidingSchema);

module.exports = Sliding;
