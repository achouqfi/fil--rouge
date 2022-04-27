const training = require('../../models/user/training_program.model')

//add training program
const addTraining = (req, res) => {
    const { title, description, time, date, repetition } = req.body     //get the data from the body
    const newTraining = new training({  //create a new training program
        title,
        description,
        time,
        date,
        repetition,
        user
    })
    newTraining.save()      //save the training program
    .then(() => res.status(200).json({ message: "Training program added successfully" }))   //send a response
    .catch(err => res.status(404).json({ message: err.message }))   //if there is an error send a response
}

//update training program
const updateTraining = (req, res) => {
    const { title, description, time, date, repetition } = req.body     //get the data from the body
    const { id } = req.params       //get the id from the params
    training.findByIdAndUpdate(id, {    //find the training program by id
        title,
        description,
        time,
        date,
        repetition,
        user
    })
    .then(() => res.status(200).json({ message: "Training program updated successfully" }))         //send a response
    .catch(err => res.status(404).json({ message: err.message }))       //if there is an error send a response
}

//delete training program
const deleteTraining = (req, res) => {
    const { id } = req.params           //get the id from the params
    training.findByIdAndDelete(id)      //find the training program by id
    .then(() => res.status(200).json({ message: "Training program deleted successfully" }))     //send a response
    .catch(err => res.status(404).json({ message: err.message }))       //if there is an error send a response
}

//get training program by id
const getTrainingById = (req, res) => {
    const { id } = req.params       //get the id from the params
    training.findById(id)           //find the training program by id
    .then(training => res.status(200).json({ training }))           //send a response
    .catch(err => res.status(404).json({ message: err.message }))   //if there is an error send a response
}

//get all training programs
const getAllTrainings = (req, res) => {
    training.find() //find all training programs
    .then(trainings => res.status(200).json({ trainings }))         //send a response
    .catch(err => res.status(404).json({ message: err.message }))   //if there is an error send a response
}

//export all functions
module.exports = {
    addTraining,
    updateTraining,
    deleteTraining,
    getTrainingById,
    getAllTrainings
};