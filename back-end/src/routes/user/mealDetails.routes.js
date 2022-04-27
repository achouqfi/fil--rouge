const express = require('express');  //import express
const router = express.Router();     //importing express router
const fs = require('fs');            // file system
const morgan = require('morgan')     // import morgan
const {
    getAllMealDetails,
    getOneMealDetail,
    createOneMealDetail,
    updateOneMealDetail,
    deleteOneMealDetail,
} = require('../../controllers/user/mealDetails.controller'); // import the controller

router.get('/getAllMealDetails', getAllMealDetails); // get all meal details
router.get('/getOneMealDetails/:id', getOneMealDetail); // get one meal details
router.post('/createOneMealDetails', createOneMealDetail); // create one meal details
router.put('/updateOneMealDetails/:id', updateOneMealDetail); // update one meal details
router.delete('/deleteOneMealDetails/:id', deleteOneMealDetail); // delete one meal details

module.exports = router; // export the router