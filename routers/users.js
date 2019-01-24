const userControl = require('../controllers/users');
const express = require('express');
const router = express.Router();
const User = require('../models/users');

//7 resful routes
router.get('/', userControl.index);
router.get('/new', userControl.new);

// // //create, POSTing data to server
// router.post('/', userControl.create);

// // //EDIT, GETing a form to show to edits
// router.get('/:id/edit', userControl.edit);

// // //update PUTing data into the data
// router.put('/:id', userControl.update);
// //show which is //:id
// router.get('/:id', userControl.show);
// //delete
// router.delete('/:id', userControl.delete);




module.exports = router;