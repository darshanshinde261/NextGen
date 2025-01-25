const mongoose = require("mongoose");

const mobileDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    caption:{
        type:String,
        require:true,
    },
    price: {
        type: Number,
        required: true
    },
    ram: {
        type: String,  
        required: true,
    },
    rom: {
        type: String,  
        required: true,
    },
    image: {
        type: String,  
        required: true,
    }
});

module.exports = mongoose.model('MobileData', mobileDataSchema);
