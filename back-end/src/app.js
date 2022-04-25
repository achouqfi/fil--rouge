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
  
// Client api
const clientRoutes = require('./routes/client/client.routes')
const commandeRoutes = require('./routes/client/commade.routes')
app.use('/api/clients', clientRoutes)
app.use('/api/commandes', commandeRoutes)


app.listen(process.env.PORT, () => {
    console.log(`up and running at http://localhost:${process.env.PORT}`);
})