const admin = require("../../models/admin/admin.model") //import the admin model

const loginAdmin = async (req, res) => {
    const { email, password } = req.body    //get the data from the body
    try {
        if (!email || !password) return res.status(404).json({ message: "Please fill all the fields" })    //if there is no data in the fields
        const existingAdmin = await admin.findOne({ email })    //find the admin by email
        if (!existingAdmin) return res.status(404).json({ message: "admin not found" }) //if the email is not in the database
        if (existingAdmin.password === password && existingAdmin.email === email) {     //if the password is correct
            return res.status(200).json({ message: "Login Successful", role:'admin'})   //send a response
        }
        res.status(400).json({message: "wrong creds"})      //if the password is not correct
    } catch (error) {
        res.status(404).json({ message: error.message })    //if there is an error send a response
    }
}

//export the function
module.exports = {
    loginAdmin
}