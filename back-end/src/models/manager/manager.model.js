const mongoose = require('mongoose')

const managerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('manager', managerSchema)