const express = require('express');
const districtRouter = express.Router();
const axios = require('axios');
const Parks = require('../model/park')

districtRouter.get("/parks", async function(req, res) {
    try {
        const district = req.query.district;

        const parksInDistrict = await Parks.find({district: district})

        res.render("../../frontend/index",{parks: parksInDistrict , district: district,})

    } catch (error) { 
        console.log(error.response.data);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


/* 
districtRouter.get("/",(req,res) => {
    res.render("../../frontend/index");
})
*/



/* 
districtRouter.post("/parks", async function(req,res) {
    try {
        const {district,parkName,capacity} = req.body;
        
    } catch (error) { 
        console.log(error.response.data);
        res.status(500).json({error:"Internal Server Error"});
    }
});
*/

/* 
// router 
districtRouter.get("/parks/:district", async function(req,res) {
    try {
       const district = req.params.district;
       res.json({ district: district });
    }
    catch(error) { 
        console.log(error.response.data);
        res.status(500).json({error:'Internal Server Error'});
    }
});
*/ 

/* 
districtRouter.get("/",(req,res) => {
    res.render("../../frontend/index");
})
*/

/* 
districtRouter.get("/parks", async function(req,res) {
    try {
        const response = await axios.get(url, {});
        res.json(response.data);
    } 
    catch(error) { 
        console.log(error.response.data);
        res.status(500).json({error:'Internal Server Error'});
    }
});
*/

module.exports = districtRouter;




