const mongoose = require('mongoose') // import mongoose

// create a schema
const photosSchema = new mongoose.Schema({
    path: {
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
module.exports = mongoose.model('photos', photosSchema)