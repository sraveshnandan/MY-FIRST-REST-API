const router = require('express').Router();
const Books = require('../models/book_schema');

router.put('/books/', async (req, res) => {
    try {
        const u_id = req.query;
        const res_data = await Books.findByIdAndUpdate(u_id, req.body, {
            new: true,
            useFindAndModify: false,
            runValidators: true
        });
        res.status(200).json({
            success: true,
            res_data
        })



    } catch (error) {
        res.status(502).json({
            success: false,
            message: "Unable to find the Record."
        })

    }
})
module.exports = router;