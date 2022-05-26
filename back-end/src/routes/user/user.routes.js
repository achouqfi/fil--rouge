const express = require('express');
const router = express.Router();
const fs = require('fs');            // file system
const morgan = require('morgan')     // import morgan
const {
    loginUser,
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
} = require('../../controllers/user/user.controller'); // import the controller

router.post('/loginUser', loginUser); // login user
router.get('/getAllUsers', getAllUsers); // get all users
router.get('/getUserById/:id', getUserById); // get user by id
router.post('/addUser', addUser); // add user
router.put('/updateUser/:id', updateUser); // update user
router.delete('/deleteUser/:id', deleteUser); // delete user

module.exports = router;