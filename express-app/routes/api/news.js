const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const NewsPostSchema = new Schema({
    source: {
        id: {
            type: String,
        },
        name: {
            type: String,
        }
    },
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: String,
    content: String,
});

module.exports = NewsPost = mongoose.model('item', NewsPostSchema);