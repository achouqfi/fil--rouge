const mongoose = require('mongoose') // import mongoose

// create a schema
const mealSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    dateStart: {
        type: String,
        required: true
    },
    timeStart: {
        type: String,
        required: true
    },
    timeEnd: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    user: {type:mongoose.Schema.ObjectId, ref: 'user' },
})

// create a model
module.exports = mongoose.model('meal', mealSchema)