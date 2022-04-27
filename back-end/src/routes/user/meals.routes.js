const express = require('express');  //import express
const router = express.Router();     //importing express router
const fs = require('fs');            // file system
const morgan = require('morgan')     // import morgan
const {
    getAllMeals,
    getOneMeal,
    createOneMeal,
    updateOneMeal,
    deleteOneMeal,
} = require('../../controllers/user/meals.controller'); // import the controller

router.get('/getAllMeals', getAllMeals); // get all meals
router.get('/getOneMeal/:id', getOneMeal); // get one meal
router.post('/createOneMeal', createOneMeal); // create one meal
router.put('/updateOneMeal/:id', updateOneMeal); // update one meal
router.delete('/deleteOneMeal/:id', deleteOneMeal); // delete one meal

module.exports = router; // export the router