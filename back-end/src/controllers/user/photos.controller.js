const photo = require('../../models/user/photos.model')   //import the photo model'

// Get all photos
const getAllPhotos = (req, res) => {
    photo.find()   //find all photos
    .then(photos => res.status(200).json({ photos }))   //send a response
    .catch(err => res.status(404).json({ message: err.message }))   //if there is an error send a response
}

// Get one photo
const getOnePhoto = (req, res) => {
    photo.findById(req.params.id)   //find one photo
    .then(photo => res.status(200).json({ photo }))   //send a response
    .catch(err => res.status(404).json({ message: err.message }))   //if there is an error send a response
}

// Create one photo
const createOnePhoto = (req, res) => {
    const newPhoto = new photo(req.body)   //create a new photo
    newPhoto.save()   //save the photo
    .then(photo => res.status(201).json({ photo }))   //send a response
    .catch(err => res.status(400).json({ message: err.message }))   //if there is an error send a response
}

// Update one photo
const updateOnePhoto = (req, res) => {
    photo.findByIdAndUpdate(req.params.id, req.body, { new: true })   //find one photo
    .then(photo => res.status(200).json({ photo }))   //send a response
    .catch(err => res.status(404).json({ message: err.message }))   //if there is an error send a response
}

// Delete one photo
const deleteOnePhoto = (req, res) => {
    photo.findByIdAndDelete(req.params.id)   //find one photo
    .then(photo => res.status(200).json({ message: 'Photo deleted' }))   //send a response
    .catch(err => res.status(404).json({ message: err.message }))   //if there is an error send a response
}

//export all the functions
module.exports = {
    getAllPhotos,
    getOnePhoto,
    createOnePhoto,
    updateOnePhoto,
    deleteOnePhoto
};