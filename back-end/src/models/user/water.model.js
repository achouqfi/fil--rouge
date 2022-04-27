const mongoose = require('mongoose') // import mongoose

// create a schema
const weterSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    user: {type:mongoose.Schema.ObjectId, ref: 'user' },
})

// create a model
module.exports = mongoose.model('water', weterSchema)