require('dotenv').config(); //Loading all environment variable
//Importing required modules
const express = require('express');
const bodyParser = require('body-parser');
const connectToDb = require('./models/db');
const readRoute = require('./routes/read');
const newRoute = require('./routes/new');
const UpdateRoute = require('./routes/update')
const deleteRoute = require('./routes/delete')
const filterRoute = require('./routes/filter')
const categoryRoute = require('./routes/category')
const nameRoute = require('./routes/name')
const port = process.env.PORT || 3000;
const app = express();

//Connecting to the  Mongodb Database 
connectToDb();

//Express Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1/', newRoute)
app.use('/api/v1/', UpdateRoute)
app.use('/api/v1/', readRoute)
app.use('/api/v1/', deleteRoute)
app.use('/api/v1/', filterRoute)
app.use('/api/v1/', categoryRoute)
app.use('/api/v1/', nameRoute)

app.listen(port, () => {
    console.log(`Server running on port http://127.0.0.1:${port}`)
})
