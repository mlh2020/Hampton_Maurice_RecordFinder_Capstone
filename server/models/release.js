const mongoose = require('mongoose');

const releaseSchema = new mongoose.Schema({
    title: String,
    artist: String,
    year: Number,
    genre: [String],
    style: [String],
    format: [String],
    label: [String],
    country: String,
    barcode: [String],
    cover_image: String,
});

const Release = mongoose.model('Release', releaseSchema);

module.exports = Release;