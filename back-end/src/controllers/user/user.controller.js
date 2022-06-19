const { comparePassword } = require('../../helpers/JwtValidation')  //get the comparePassword function from the helpers folder
const user = require("../../models/user/user.model")       //import the user model
const bcrypt = require('bcryptjs')

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body  //get the data from the body
    try {
        if (!email || !password) return res.status(404).json({ message: "Please fill all the fields" })  //if there is no data in the fields
        const existingUser = await user.findOne({ email })  //find the user by email
        if (!existingUser) return res.status(404).json({ message: "User not found"})    //if the email is not in the database
        comparePassword(password, existingUser)   //compare the password
    } catch (error) {
        res.status(404).json({ message: error.message })    //if there is an error send a response
    }
}

//add user
const addUser = async (req, res) => {
    const { email, password, firstName, lastName, phone, adress } = req.body //req.body is the data that we send from the front-end
    try {
        if (!email || !password || !firstName || !lastName || !phone || !adress) return res.status(404).json({ message: "Please fill all the fields" }) //if there is no data in the fields
        //check if the email is already in the database
        const existingUser = await user.findOne({ email })
        if (existingUser) return res.status(404).json({ message: "User already exists"}) //if the email is already in the database
        const hashedPassword = await bcrypt.hash(password, 10) //hashing password 
        //if the email is not in the database
        const newUser = new user({ //create a new user
            email,
            password: hashedPassword,
            firstName,
            lastName,
            phone,
            adress
        })
        await newUser.save() //save the new user
        res.status(200).json({ message: "User added successfully"})  //send a response
    } catch (error) {
        res.status(404).json({ message: error.message }) //if there is an error send a response
    }
}

//get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await user.find() //find all users
        res.status(200).json({ users }) //send a response
    } catch (error) {
        res.status(404).json({ message: error.message }) //if there is an error send a response
    }
}

//get user by id
const getUserById = async (req, res) => {
    const { id } = req.params //get the id from the params
    try {
        const user = await user.findById(id) //find the user by id
        if (!user) return res.status(404).json({ message: "User not found"}) //if the user is not in the database
        res.status(200).json({ user }) //send a response
    } catch (error) {
        res.status(404).json({ message: error.message }) //if there is an error send a response
    }
}

//update user
const updateUser = async (req, res) => {
    const { id } = req.params //get the id from the params
    const { email, password, firstName, lastName, phone, adress } = req.body //req.body is the data that we send from the front-end
    try {
        const user = await user.findById(id) //find the user by id
        if (!user) return res.status(404).json({ message: "User not found"}) //if the user is not in the database
        //if the email is already in the database
        const existingUser = await user.findOne({ email })
        if (existingUser && existingUser._id.toString() !== id) return res.status(404).json({ message: "User already exists"})
        //if the email is not in the database
        await user.updateOne({ _id: id }, { email, password, firstName, lastName, phone, adress }) //update the user
        res.status(200).json({ message: "User updated successfully"}) //send a response
    } catch (error) {
        res.status(404).json({ message: error.message }) //if there is an error send a response
    }
}

//delete user
const deleteUser = async (req, res) => {
    const { id } = req.params //get the id from the params
    try {
        const user = await user.findById(id) //find the user by id
        if (!user) return res.status(404).json({ message: "User not found"}) //if the user is not in the database
        await user.remove() //delete the user
        res.status(200).json({ message: "User deleted successfully"}) //send a response
    } catch (error) {
        res.status(404).json({ message: error.message }) //if there is an error send a response
    }
}

//export all the functions
module.exports = {
    loginUser,
    addUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}