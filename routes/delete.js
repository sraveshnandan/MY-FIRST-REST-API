const router = require('express').Router();
const Books = require('../models/book_schema');
router.delete('/books/', async (req, res) => {
    try {
        const u_id = req.query;
        const res_data = await Books.findByIdAndDelete(u_id);
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
module.exports = router;