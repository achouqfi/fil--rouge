const mongoose = require('mongoose') // import mongoose

// create a schema
const sleepSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    time: {
        type: Date,
        required: true
    },    
    duration: {
        type: Number,
        required: true
    },    
    notes: {
        type: String,
        required: true
    },
    user: {type:mongoose.Schema.ObjectId, ref: 'user' },
})

// create a model
module.exports = mongoose.model('sleep', sleepSchema)