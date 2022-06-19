const express = require('express');  //import express
const router = express.Router();  //create a router
const fs = require('fs');            // file system
const morgan = require('morgan')     // import morgan
const {
    getAllMeals,
    getMealById,
    addMeal,
    updateMeal,
    deleteMeal,
} = require('../../controllers/user/meals.controller'); // import the controller

// Get all meals
router.get('/get', getAllMeals);
// Get meal by id
router.get('/:id', getMealById);
//add new meal
router.post('/add', addMeal);
//update meal
router.put('/:id', updateMeal);
//delete meal
router.delete('/:id', deleteMeal);

// export the router
module.exports = router;