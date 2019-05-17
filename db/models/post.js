const mongoose = require('mongoose');

module.exports = mongoose.model('Post', new mongoose.Schema({
    title: String,
    image: String,
    text: String,
    likes: Number,
    date_added: Number 
}));