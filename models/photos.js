const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    location: String,
    date: Date,
    image: [String]
})


const Photo = mongoose.model('Photo', photoSchema);
module.exports = Photo;