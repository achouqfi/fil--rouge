const meals = require('../../models/user/meals.model')

// Get all meals
const getAllMeals = (req, res) => {
    meals.find()   //find all meals
    .then(meals => res.status(200).json({ meals }))   //send a response
    .catch(err => res.status(404).json({ message: err.message }))   //if there is an error send a response
}

// Get one meal
const getOneMeal = (req, res) => {
    meals.findById(req.params.id)   //find one meal
    .then(meal => res.status(200).json({ meal }))   //send a response
    .catch(err => res.status(404).json({ message: err.message }))   //if there is an error send a response
}

// Create one meal
const createOneMeal = (req, res) => {
    const newMeal = new meals(req.body)   //create a new meal
    newMeal.save()   //save the meal
    .then(meal => res.status(201).json({ meal }))   //send a response
    .catch(err => res.status(400).json({ message: err.message }))   //if there is an error send a response
}

// Update one meal
const updateOneMeal = (req, res) => {
    meals.findByIdAndUpdate(req.params.id, req.body, { new: true })   //find one meal
    .then(meal => res.status(200).json({ meal }))   //send a response
    .catch(err => res.status(404).json({ message: err.message }))   //if there is an error send a response
}

// Delete one meal
const deleteOneMeal = (req, res) => {
    meals.findByIdAndDelete(req.params.id)   //find one meal
    .then(meal => res.status(200).json({ message: 'Meal deleted' }))   //send a response
    .catch(err => res.status(404).json({ message: err.message }))   //if there is an error send a response
}

//export all the functions
module.exports = {
    getAllMeals,
    getOneMeal,
    createOneMeal,
    updateOneMeal,
    deleteOneMeal
};