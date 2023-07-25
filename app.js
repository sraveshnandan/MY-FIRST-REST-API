//Importing required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Loading environment variables from dotenv file
require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Connecting to the  Mongodb Database 
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected to the Database.")
}).catch((err) => {
    console.log(err);

})

// Define the Book schema and model
const bookSchema = new mongoose.Schema({
    id: Number,
    title: String,
    isbn: String,
    pageCount: Number,
    thumbnailUrl: String,
    shortDescription: String,
    longDescription: String,
    status: String,
    authors: [String],
    categories: [String],
});

const Books = mongoose.model('Books', bookSchema);

app.post('/api/v1/books/new', async (req, res) => {
    try {
        const res_data = await Books.create(req.body);
        res.status(201).json({
            success: true,
            res_data
        })

    } catch (error) {
        res.status(502).json({
            success: false,
            message: "Unable to create an entrie."
        })
    }
})
//Read Records 

app.get('/api/v1/books/', async (req, res) => {
    try {
        const res_data = await Books.find();
        res.status(200).json({
            success: true,
            res_data
        })

    } catch (error) {
        res.status(502).json({
            success: false,
            message: "Unable to fetch data."
        })

    }
})

//Delete Record
app.delete('/api/v1/books/', async (req, res) => {
    try {
        const res_data = await Books.findByIdAndDelete(req.query);
        if (!res_data) {
            return res.status(404).send("Record not found");
        }
        else {
            return res.status(200).json({ "success": true, "message": "record deleted successfully" })
        }

    } catch (error) {
        res.status(502).json({
            success: false,
            message: "Unable to delete the Record."
        })

    }
})

//Update Record
app.put('/api/v1/books/', async(req, res)=>{
    try {
        const res_data = await Books.findByIdAndUpdate(req.query, req.body, {new: true,
            useFindAndModify: false,
            runValidators: true});
        res.status(200).json({
            success:true,
            res_data
        })


        
    } catch (error) {
        res.status(502).json({
            success: false,
            message: "Unable to find the Record."
        })
        
    }
})

//Custom routes for operation

// A new route to get a list of all categories
app.get('/api/v1/books/categories/', async (req, res) => {
    try {
      const allCategories = await Books.distinct('categories');
      res.json({ count: allCategories.length, categories: allCategories });
    } catch (error) {
      console.error('Error fetching categories:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // A new route to get a list of all Books name
app.get('/api/v1/books/name/', async (req, res) => {
    try {
      const allTitles = await Books.distinct('title');
      res.json({ count: allTitles.length, Names: allTitles });
    } catch (error) {
      console.error('Error fetching Book Name:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  //routes to  filter data by queries

  app.get('/api/v1/books/filter/', async(req, res)=>{
    try {
        const {categories, title, id, status, authors} = req.query;
        let querry = {};
        if(!categories){
            res.status(405).json(
                {
                    success:false,
                    message:"You can't make a request with empty queries."
                }
            )
            
        }
        else{
        querry.categories = categories;
        const res_data = await Books.find(querry);
        res.status(200).json({
            success:true,
            Your_Querry:querry,
            count:res_data.length,
            res_data
        })
    }
    } catch (error) {
        console.error('Error fetching Book Name:', error);
      res.status(500).json({ error: 'Internal server error' });
        
    }
  })

app.listen(port, () => {
    console.log(`Server running on port http://127.0.0.1:${port}`)
})
