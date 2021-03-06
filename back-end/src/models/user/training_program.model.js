const mongoose = require('mongoose') // import mongoose

// create a schema
const trainingSchema = new mongoose.Schema({
    repetition: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    user: {type:mongoose.Schema.ObjectId, ref: 'user' },
})

// create a model
module.exports = mongoose.model('training', trainingSchema)