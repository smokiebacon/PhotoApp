const Photo = require('../models/photos');
module.exports = {
    index: (req, res) => {
        Photo.find( {}, (err, allPhoto) => {
            err ? res.send(err) : res.render('../views/photos/index', {
                photos: allPhoto
            });
        })
    },
    new: (req, res) => {
        res.render('../views/photos/new');
    },

    create: (req, res) => {
        Photo.create(req.body, (err, createdPhoto) => {
            err ? res.send(err) : res.redirect('/photos')
        })
    },

    show: (req, res) => {
        Photo.findById(req.params.id, (err, showedPhoto) => {
            err ? res.send(err) : res.render('../views/photos/show', {
                photo: showedPhoto
            })
        })
    },

    edit: (req, res) => {
        Photo.findById(req.params.id, (err, editPhoto) => {
            err ? res.send(err) : res.render('../views/photos/edit', {
                photo: editPhoto
            })
        })
    },

    update: (req, res) => {
        Photo.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPhoto) => {
            err ? res.send(err) : res.redirect('/photos')
        })
    },

    delete: (req, res) => {
        Photo.findByIdAndDelete(req.params.id, (err, deletedPhoto) => {
            err ? res.send(err) : res.redirect('/photos')
        })
    } 
}