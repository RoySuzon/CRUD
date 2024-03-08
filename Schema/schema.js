const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String, // String is shorthand for {type: String}
    author: String,
    body: String,
    date: { type: Date, default: Date.now },
    hidden: Boolean,
});

exports.Person = mongoose.model('Person', blogSchema);