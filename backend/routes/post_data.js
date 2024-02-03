
const Parks = require("../model/park.js");
const  axios = require("axios");

const apiUrl = "https://api.ibb.gov.tr/ispark/Park";

const fetchAndSave = async () => { 
    const response = await axios.get(apiUrl);
    const parksData = response.data;

    const simplifiedData = parksData.map(park =>( { 
        parkName: park.parkName,
        capacity: park.capacity,
        district: park.district,
        latitude: parseFloat(park.lat),
        longitude: parseFloat(park.lng),
    }))

    await Parks.insertMany(simplifiedData);

}


module.exports = fetchAndSave;
