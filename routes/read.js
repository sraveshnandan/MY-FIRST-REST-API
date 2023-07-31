const router = require('express').Router();
const Books = require('../models/book_schema');

router.get('/books', async (req, res) => {
    try {
        const { count } = req.query;
        const res_data = await Books.find();
        const dv01 = [];
        for (let index = 0; index < count; index++) {
            const element = res_data[index];
            dv01.push(element)

        }
        if (!count) {
            res.json({
                success: true,
                message: `You can limit the responce data by count query \n as an example http://Api_Endpoint/?count='your value', otherwise it will take too long to responce because of loading whole data. `,
                res_data
            })
        }
        else {

            res.status(200).json({
                success: true,
                dv01

            })
        }

    } catch (error) {
        res.status(502).json({
            success: false,
            message: "Unable to fetch data."
        })

    }
})

module.exports = router;