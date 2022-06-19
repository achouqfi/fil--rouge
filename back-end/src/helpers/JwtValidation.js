const bcrypt = require('bcryptjs')  //import bcrypt
const jwt = require('jsonwebtoken') //import jwt

// compare this snippet from back-end\src\routes\manager\manager.routes.js:
const comparePassword = async (password, user,res) => {
    // compare the password
    bcrypt.compare(password,user.password) 
        .then((isCorrect) => {
            if (isCorrect) { // if the password is correct
                const data = {
                    id: user._id,
                    email: user.email,
                }
                // create a token
                jwt.sign(data, `${process.env.JWT_SECRET_KEY}`, { expiresIn: '1h' }, (err, token) => {
                    if (err) return res.json( 'message: err.message' ) // if there is an error
                    // if there is no error
                    return res.status(200).json(token)
                })
            } else {
                console.log("kkkk");
                res.status(404).json({ message: "Invalid email or password" })  // if the password is incorrect
            }
        })
}

// export the comparePassword function
module.exports = { comparePassword }