const mealDetails = require('../../models/user/mealDetails.model')  //import the mealDetails model

// Get all mealDetails
const getAllMealDetails = (req, res) => {
    mealDetails.find()   //find all mealDetails
    .then(mealDetails => res.status(200).json({ mealDetails }))   //send a response
    .catch(err => res.status(404).json({ message: err.message }))   //if there is an error send a response
}

// Get one mealDetails
const getOneMealDetail = (req, res) => {
    mealDetails.findById(req.params.id)   //find one mealDetails
    .then(mealDetail => res.status(200).json({ mealDetail }))   //send a response
    .catch(err => res.status(404).json({ message: err.message }))   //if there is an error send a response
}

// Create one mealDetails
const createOneMealDetail = (req, res) => {
    const newMealDetail = new mealDetails(req.body)   //create a new mealDetails
    newMealDetail.save()   //save the mealDetails
    .then(mealDetail => res.status(201).json({ mealDetail }))   //send a response
    .catch(err => res.status(400).json({ message: err.message }))   //if there is an error send a response
}

// Update one mealDetails
const updateOneMealDetail = (req, res) => {
    mealDetails.findByIdAndUpdate(req.params.id, req.body, { new: true })   //find one mealDetails
    .then(mealDetail => res.status(200).json({ mealDetail }))   //send a response
    .catch(err => res.status(404).json({ message: err.message }))   //if there is an error send a response
}

// Delete one mealDetails
const deleteOneMealDetail = (req, res) => {
    mealDetails.findByIdAndDelete(req.params.id)   //find one mealDetails
    .then(mealDetail => res.status(200).json({ message: 'MealDetail deleted' }))   //send a response
    .catch(err => res.status(404).json({ message: err.message }))   //if there is an error send a response
}

//export all the functions
module.exports = {
    getAllMealDetails,
    getOneMealDetail,
    createOneMealDetail,
    updateOneMealDetail,
    deleteOneMealDetail
};