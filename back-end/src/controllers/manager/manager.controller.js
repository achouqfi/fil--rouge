const { comparePassword } = require('../../helpers/JwtValidation')  //get the comparePassword function from the helpers folder
const manager = require("../../models/manager/manager.model")       //import the manager model

//manager login
const loginManager = async (req, res) => {
    const { email, password } = req.body  //get the data from the body
    try {
        if (!email || !password) return res.status(404).json({ message: "Please fill all the fields" })  //if there is no data in the fields
        const existingAdmin = await manager.findOne({ email })  //find the manager by email
        if (!existingAdmin) return res.status(404).json({ message: "Manager not found"})    //if the email is not in the database
        comparePassword(password, existingAdmin, res)   //compare the password
    } catch (error) {
        res.status(404).json({ message: error.message })    //if there is an error send a response
    }
}

//add manager
const addManager = async (req, res) => {
    const { email, password, firstName, lastName, phone, adress } = req.body //req.body is the data that we send from the front-end
    try {
        if (!email || !password || !firstName || !lastName || !phone || !adress) return res.status(404).json({ message: "Please fill all the fields" }) //if there is no data in the fields
        //check if the email is already in the database
        const existingAdmin = await manager.findOne({ email })
        if (existingAdmin) return res.status(404).json({ message: "Manager already exists"}) //if the email is already in the database
        //if the email is not in the database
        const newManager = new manager({ //create a new manager
            email,
            password,
            firstName,
            lastName,
            phone,
            adress
        })
        await newManager.save() //save the new manager
        res.status(200).json({ message: "Manager added successfully"})  //send a response
    } catch (error) {
        res.status(404).json({ message: error.message }) //if there is an error send a response
    }
}

//get all managers
const getAllManagers = async (req, res) => {
    try {
        const managers = await manager.find() //find all managers
        res.status(200).json({ managers }) //send a response
    } catch (error) {
        res.status(404).json({ message: error.message }) //if there is an error send a response
    }
}

//get manager by id
const getManagerById = async (req, res) => {
    const { id } = req.params //get the id from the url
    try {
        const manager = await manager.findById(id)  //find the manager by id
        res.status(200).json({ manager }) //send a response
    } catch (error) {
        res.status(404).json({ message: error.message })  //if there is an error send a response
    }
}

//update manager
const updateManager = async (req, res) => {
    const { id } = req.params  //get the id from the url
    const { email, password, firstName, lastName, phone, adress } = req.body  //get the data from the body
    try {
        if (!email || !password || !firstName || !lastName || !phone || !adress) return res.status(404).json({ message: "Please fill all the fields" }) //if there is no data in the fields
        //check if the email is already in the database
        const existingAdmin = await manager.findOne({ email }) //find the manager by email
        if (existingAdmin) return res.status(404).json({ message: "Manager already exists"}) //if the email is already in the database
        //if the email is not in the database
        const manager = await manager.findByIdAndUpdate(
            id,
            { 
                email, 
                password, 
                firstName, 
                lastName, 
                phone, 
                adress 
            }, 
            { new: true }) //update the manager
        res.status(200).json({ manager }) //send a response
    } catch (error) {
        res.status(404).json({ message: error.message }) //if there is an error send a response
    }
}

//delete manager
const deleteManager = async (req, res) => {
    const { id } = req.params  //get the id from the url
    try {
        const manager = await manager.findByIdAndDelete(id)     //delete the manager
        res.status(200).json({ message: "Manager deleted" })    //send a response
    } catch (error) {
        res.status(404).json({ message: error.message })        //if there is an error send a response
    }
}

//export all the functions
module.exports = {
    loginManager,
    deleteManager,
    updateManager,
    getManagerById,
    getAllManagers,
    addManager
}