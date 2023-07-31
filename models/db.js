const mongoose = require('mongoose'); // Importing required module
// A set of required header in a form of json object
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
//Function which connects the server to the database
const connectToDb = () => {
    try {
        mongoose.connect(process.env.DB_URL, connectionParams)
        console.log(`Connected to the database`);

    } catch (error) {
        console.log(`Error encountered while connecting to the database. \n ${error}`)
    }
}
module.exports = connectToDb;