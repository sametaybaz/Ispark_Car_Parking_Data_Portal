
const moongoose = require("mongoose")

const parkSchema = new moongoose.Schema({
    district: String,
    parkName: String,
    capacity: Number,
    latitude: Number,
    longitude: Number,
})

const Parks = moongoose.model("Isparks",parkSchema);

module.exports = Parks;