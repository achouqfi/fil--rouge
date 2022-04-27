const express = require('express');  //import express
const router = express.Router();     //importing express router
const fs = require('fs');            // file system
const morgan = require('morgan')     // import morgan
const {
    getAllWater,
    getOneWater,
    createOneWater,
    updateOneWater,
    deleteOneWater,
} = require('../../controllers/user/water.controller'); // import the controller

router.get('/getAllWater', getAllWater); // get all water
router.get('/getOneWater/:id', getOneWater); // get one water
router.post('/createOneWater', createOneWater); // create one water
router.put('/updateOneWater/:id', updateOneWater); // update one water
router.delete('/deleteOneWater/:id', deleteOneWater); // delete one water

module.exports = router; // export the router