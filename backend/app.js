
const express = require('express');
const districtRouter = require('./routes/get_district');
const detailRouter = require('./routes/park_detail');
const mongoose = require('mongoose');
const fetchAndSave = require("./routes/post_data");

const app = express();
const PORT = 3000;

app.locals.district = '';
app.set("view engine","ejs");

const DB = "mongodb+srv://aaybaz:Samet.city24@cluster0.wbliftd.mongodb.net/?retryWrites=true&w=majority";

mongoose
    .connect(DB)
    .then(() => {
    console.log("Connection Successful");
    fetchAndSave();
}) 
.catch((e) => {
    console.log(e);e
})

app.use("/",districtRouter);
app.use("/",detailRouter);

app.listen(PORT, () => {
    console.log("Server started");
});




/* 
app.get("/stations", async function(req,res) {
    try {
        const response = await axios.get(url + "GetStations", {});

        const AllData = response.data;

        const kadikoyData = AllData.Data.filter(station => station.Name === "KADIKOY");

        res.json({
            Data: kadikoyData,
            Success: true,
            Error: null,
        });
    } 
    catch(error) { 
        console.log(error.response.data);
        res.status(500).json({error:'Internal Server Error'});
    }
});


*/

/* app.get('/api/metro/lines', async (req, res) => {
    try {
        const response = await axios.get('https://www.metro.istanbul/Hatlarimiz', {
            params: {
                hatturu: 'metro'
            }
        });

        // İstediğiniz şekilde response'ı işleyebilirsiniz
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}); */
