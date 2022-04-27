const express = require('express');  //import express
const router = express.Router();     //importing express router
const fs = require('fs');            // file system
const morgan = require('morgan')     // import morgan
const {
    getAllPhotos,
    getOnePhoto,
    createOnePhoto,
    updateOnePhoto,
    deleteOnePhoto,
} = require('../../controllers/user/photos.controller'); // import the controller

router.get('/getAllPhotos', getAllPhotos); // get all photos
router.get('/getOnePhoto/:id', getOnePhoto); // get one photo
router.post('/createOnePhoto', createOnePhoto); // create one photo
router.put('/updateOnePhoto/:id', updateOnePhoto); // update one photo
router.delete('/deleteOnePhoto/:id', deleteOnePhoto); // delete one photo

module.exports = router; // export the router