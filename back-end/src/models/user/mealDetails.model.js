const mongoose = require('mongoose') // import mongoose

// create a schema
const mealDetailsSchema = new mongoose.Schema({
    ingredient: {
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
    user: {type:mongoose.Schema.ObjectId, ref: 'user' },
    meals_id: {type:mongoose.Schema.ObjectId, ref: 'meals' }
})

// create a model
module.exports = mongoose.model('mealDetails', mealDetailsSchema)