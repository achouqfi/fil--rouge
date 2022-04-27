const express = require('express');  //import express
const router = express.Router();     //importing express router
const fs = require('fs');            // file system
const morgan = require('morgan')     // import morgan
const {
    getAllTrainingProgram,
    getOneTrainingProgram,
    createOneTrainingProgram,
    updateOneTrainingProgram,
    deleteOneTrainingProgram,
} = require('../../controllers/user/training_program.controller'); // import the controller

router.get('/getAllTrainingProgram', getAllTrainingProgram); // get all training program
router.get('/getOneTrainingProgram/:id', getOneTrainingProgram); // get one training program
router.post('/createOneTrainingProgram', createOneTrainingProgram); // create one training program
router.put('/updateOneTrainingProgram/:id', updateOneTrainingProgram); // update one training program
router.delete('/deleteOneTrainingProgram/:id', deleteOneTrainingProgram); // delete one training program

module.exports = router; // export the router