const router = require('express').Router();
const Books = require('../models/book_schema');

router.get('/books/filter', async (req, res) => {
    try {
        const { categories } = req.query;
        let querry = {};
        if (!categories) {
            res.status(405).json(
                {
                    success: false,
                    message: "You can't make a request with  queries which are are not allowed."
                }
            )

        }
        else {
            querry.categories = categories;
            const res_data = await Books.find(querry);
            res.status(200).json({
                success: true,
                Your_Querry: querry,
                count: res_data.length,
                res_data
            })
        }
    } catch (error) {
        console.error('Error fetching Book Name:', error);
        res.status(500).json({ error: 'Internal server error' });

    }
})
module.exports = router;