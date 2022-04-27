const sleep = require('../../models/user/sleep.model'); // import models sleep

// Get all sleep
const getAllSleep = (req, res) => {
    sleep.find()   //find all sleep
    .then(sleeps => res.status(200).json({ sleeps }))   //send a response
    .catch(err => res.status(404).json({ message: err.message }))   //if there is an error send a response
}

// Get one sleep
const getOneSleep = (req, res) => {
    const { id } = req.params   //get the id from the params
    sleep.findById(id)   //find the sleep by id
    .then(sleep => res.status(200).json({ sleep }))   //send a response
    .catch(err => res.status(404).json({ message: err.message }))   //if there is an error send a response
}

// Create one sleep
const createOneSleep = (req, res) => {
    const { date, time, duration, notes } = req.body   //get the data from the body
    const newSleep = new sleep({  //create a new sleep
        date,
        time,
        duration,
        notes,
        user
    })
    newSleep.save()      //save the sleep
    .then(() => res.status(200).json({ message: "Sleep added successfully" }))   //send a response
    .catch(err => res.status(404).json({ message: err.message }))   //if there is an error send a response   
}

// Update one sleep
const updateOneSleep = (req, res) => {
    const { date, time, duration, notes } = req.body   //get the data from the body
    const { id } = req.params       //get the id from the params
    sleep.findByIdAndUpdate(id, {    //find the sleep by id
        date,
        time,
        duration,
        notes
    })
    .then(() => res.status(200).json({ message: "Sleep updated successfully" }))         //send a response
    .catch(err => res.status(404).json({ message: err.message }))       //if there is an error send a response
}

// Delete one sleep
const deleteOneSleep = (req, res) => {
    const { id } = req.params           //get the id from the params
    sleep.findByIdAndDelete(id)      //find the sleep by id
    .then(() => res.status(200).json({ message: "Sleep deleted successfully" }))     //send a response
    .catch(err => res.status(404).json({ message: err.message }))       //if there is an error send a response
}

//export all the functions
module.exports = {
    getAllSleep,
    getOneSleep,
    createOneSleep,
    updateOneSleep,
    deleteOneSleep
};
