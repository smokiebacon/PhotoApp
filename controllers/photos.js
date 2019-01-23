const Photo = require('../models/photos');
module.exports = {
    index: (req, res) => {
        res.render('../views/photos/index');
    },
    new: (req, res) => {
        res.render('../views/photos/new.ejs');
    }
}