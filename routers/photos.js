const photoControl = require('../controllers/photos');
const express = require('express');
const router = express.Router();
const Photo = require('../models/photos');

//7 resful routes
router.get('/', photoControl.index);
router.get('/new', photoControl.new);

// //create, POSTing data to server
// router.post('/', houseControl.create);

// //EDIT, GETing a form to show to edits
// router.get('/:id/edit', houseControl.edit);

// //update PUTing data into the data
// router.put('/:id/', houseControl.update);


// //show which is //:id
// router.get('/:id', houseControl.show);
// //delete
// router.delete('/:id', houseControl.delete);




module.exports = router;