const User = require('../models/users');
module.exports = {
    index: (req, res) => {
        User.find( {}, (err, allUser) => {
            err ? res.send(err) : res.render('../views/users/index', {
                photos: allUser
            });
        })
    },
    new: (req, res) => {
        res.render('../views/users/new');
    }

    // create: (req, res) => {
    //     Photo.create(req.body, (err, createdPhoto) => {
    //         err ? res.send(err) : res.redirect('/photos')
    //     })
    // },

    // show: (req, res) => {
    //     Photo.findById(req.params.id, (err, showedPhoto) => {
    //         err ? res.send(err) : res.render('../views/photos/show', {
    //             photo: showedPhoto
    //         })
    //     })
    // },

    // edit: (req, res) => {
    //     Photo.findById(req.params.id, (err, editPhoto) => {
    //         err ? res.send(err) : res.render('../views/photos/edit', {
    //             photo: editPhoto
    //         })
    //     })
    // },

    // update: (req, res) => {
    //     Photo.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPhoto) => {
    //         err ? res.send(err) : res.redirect('/photos')
    //     })
    // },

    // delete: (req, res) => {
    //     Photo.findByIdAndDelete(req.params.id, (err, deletedPhoto) => {
    //         err ? res.send(err) : res.redirect('/photos')
    //     })
    // } 
}