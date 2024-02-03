const express = require('express');
const detailRouter = express.Router();
const Parks = require('../model/park')

detailRouter.get("/details", (req, res) => { 
    const parkParam = req.query.park;

    if (!parkParam) {
        return res.status(400).send('Park parameter is missing.');
    }

    try {
        const park = JSON.parse(decodeURIComponent(parkParam));
        res.render("../../frontend/index2", { park });
    } catch (error) {
        console.error('Error parsing park parameter:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = detailRouter;