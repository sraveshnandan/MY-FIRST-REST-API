const router = require('express').Router();
const Books = require('../models/book_schema');

router.post('/books/new', async (req, res) => {
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
module.exports = router;