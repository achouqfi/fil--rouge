const express = require('express');  //import express
const router = express.Router();     //importing express router
const fs = require('fs');            // file system
const morgan = require('morgan')     // import morgan
const {
    loginManager,
    getAllManagers,
    getManagerById,
    addManager,
    updateManager,
    deleteManager,
} = require('../../controllers/manager/manager.controller'); // import the controller

router.post('/loginManager', loginManager); // login manager
router.get('/getAllManagers', getAllManagers); // get all managers
router.get('/getManagerById/:id', getManagerById); // get manager by id
router.post('/addManager', addManager); // add manager
router.put('/updateManager/:id', updateManager); // update manager
router.delete('/deleteManager/:id', deleteManager); // delete manager

module.exports = router; // export the router