const router = require('express').Router();
const Books = require('../models/book_schema');
router.get('/books/categories', async (req, res) => {
    try {
        const allCategories = await Books.distinct('categories');
        res.json({ count: allCategories.length, categories: allCategories });
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
module.exports = router;