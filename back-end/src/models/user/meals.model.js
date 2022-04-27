const mongoose = require('mongoose') // import mongoose

// create a schema
const mealSchema = new mongoose.Schema({
    mealTitle: {
        type: String,
        required: true
    },
    calorie: {
        type: String,
        required: true
    },
    Protein: {
        type: String,
        required: true
    },
    carb: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    mealNumber: {
        type: String,
        required: true
    },
    user: {type:mongoose.Schema.ObjectId, ref: 'user' },
    mealDetails: {type:mongoose.Schema.ObjectId, ref: 'meals' }
})

// create a model
module.exports = mongoose.model('meal', mealSchema)