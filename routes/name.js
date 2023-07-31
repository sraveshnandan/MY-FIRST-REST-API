const router = require('express').Router();
const Books = require('../models/book_schema');
router.get('/books/name', async (req, res) => {
    try {
        const allTitles = await Books.distinct('title');
        res.json({ count: allTitles.length, Names: allTitles });
    } catch (error) {
        console.error('Error fetching Book Name:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
module.exports = router;