const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const NewsPostSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    url: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
});

module.exports = NewsPost = mongoose.model('item', NewsPostSchema);
