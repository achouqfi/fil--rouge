const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
require('dotenv').config();
const morgane = require('morgan');
const fs = require('fs');
// const morgan = require('morgan');
const req = require('express/lib/request');

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/src`));

// Loges
morgane.token('body', (req) => JSON.stringify(req.body));
app.use(morgane(':status :method :url :body :response-time ms',{stream: fs.createWriteStream('./Logger.log', {flags: 'a'})}))

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Database Connected')
})

//importing route
const adminRoutes = require('./routes/admin/admin.routes')  //importing admin route
const userRoutes = require('./routes/user/user.routes')  //importing user route
const managerRoutes = require('./routes/manager/manager.routes')  //importing product route
const mealDetail = require('./routes/user/mealDetails.routes')  //importing mealDetails route
const meals = require('./routes/user/meals.routes')  //importing meals route
const photos = require('./routes/user/photos.routes')  //importing photos route
const sleep = require(  './routes/user/sleep.routes')  //importing sleep route
// const training = require('./routes/user/training_program.routes')  //importing training route
// const water = require('./routes/user/water.routes')  //importing water route

app.use('/api/admin', adminRoutes) // admin routes
app.use('/api/meals', meals) // meals routes
app.use('api/mealDetails', mealDetail) // mealDetails routes
app.use('/api/photos', photos) // photos routes
app.use('/api/sleep', sleep) // sleep routes
// app.use('/api/training', training) // training routes
// app.use('/api/water', water) // water routes
app.use('/api/user', userRoutes) // user routes
app.use('/api/manager', managerRoutes) // manager routes

app.listen(process.env.PORT, () => {
    console.log(`up and running at http://192.168.1.191:${process.env.PORT}`);
})