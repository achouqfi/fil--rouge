const meals = require('../../models/user/meals.model')

// Get all meals
const getAllMeals = async (req, res) => {
    try {
        const Meals = await meals.find();
        const data = Meals.map(meal => {
            return {
                id: meal._id,
                description: meal.description,
                user: meal.user,
                title: meal.title,
                subject:meal.subject,
                start: meal.dateStart + "T" + meal.timeStart,
                end: meal.dateStart + "T" + meal.timeEnd,
            }
        })
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// Get meal by id
const getMealById = async (req, res) => {
    const { id } = req.params
    try {
        const meal = await meals.findById(id)
        if (!meal) return res.status(404).json({ message: "Meal not found" })
        res.status(200).json({ meal })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//add new meal
const addMeal = async (req, res) => {
    const { title, subject, dateStart, timeStart, timeEnd, description } = req.body;
    try {
        if (!title || !subject || !dateStart || !timeStart || !timeEnd || !description ) return res.status(404).json({ message: "Please fill all the fields" });
        const newMeal = new meals({
            title,
            subject,
            dateStart,
            timeStart,
            timeEnd,
            description,
            user:"628f94a4efcab29f77c69c98"
        })
        await newMeal.save()
        res.status(200).json({ message: "Meal added successfully" })
    } catch (error) {
        console.log(error.message);
        res.status(404).json({ message: error.message })
    }
}

//update meal
const updateMeal = async (req, res) => {
    const { id } = req.params
    const { title, subject, dateStart, timeStart, timeEnd, description } = req.body
    console.log(title, subject, dateStart, timeStart, timeEnd, description, id);
    try {
        if (!title || !subject || !dateStart || !timeStart || !timeEnd || !description ) return res.status(404).json({ message: "Please fill all the fields" }), console.log("kkll");
        const meal = await meals.updateOne(
            {_id: id}, 
            {$set :{
                title,
                subject,
                dateStart,
                timeStart,
                timeEnd,
                description,
                user:"628f94a4efcab29f77c69c98" 
            }}
        )
        if (!meal) return res.status(404).json({ message: "Meal not found" })
        res.status(200).json({ message: "Meal updated successfully" })
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//delete meal
const deleteMeal = async (req, res) => {
    const { id } = req.params
    try {
        const mealss = await meals.findByIdAndDelete(id);
        if (!mealss) return res.status(404).json({ message: "Meal not found" });
        res.status(200).json({ message: "Meal deleted successfully" })
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    } 
}

//export all the functions
module.exports = {
    getAllMeals,
    getMealById,
    addMeal,
    updateMeal,
    deleteMeal
}