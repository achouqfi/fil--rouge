const express = require('express');  //import express
const router = express.Router();     //importing express router
const fs = require('fs');            // file system
const morgan = require('morgan')     // import morgan
const {
    getAllSleep,
    getOneSleep,
    createOneSleep,
    updateOneSleep,
    deleteOneSleep,
} = require('../../controllers/user/sleep.controller'); // import the controller

router.get('/getAllSleep', getAllSleep); // get all sleep
router.get('/getOneSleep/:id', getOneSleep); // get one sleep
router.post('/createOneSleep', createOneSleep); // create one sleep
router.put('/updateOneSleep/:id', updateOneSleep); // update one sleep
router.delete('/deleteOneSleep/:id', deleteOneSleep); // delete one sleep

module.exports = router; // export the router