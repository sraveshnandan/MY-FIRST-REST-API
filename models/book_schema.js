const mongoose = require('mongoose');

// Define the Book schema and model
const bookSchema = new mongoose.Schema({
    id: Number,
    title: String,
    isbn: String,
    pageCount: Number,
    thumbnailUrl: String,
    shortDescription: String,
    longDescription: String,
    status: String,
    authors: [String],
    categories: [String],
});

const Books = mongoose.model('Books', bookSchema);
module.exports = Books;