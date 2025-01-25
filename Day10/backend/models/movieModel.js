const mongoose = require("mongoose");

const movieModel = new mongoose.Schema({
    movieName:String,
    hero:String,
    heroin:String,
    year:Number,
    rating:Number,
    genere:String,
    image:String,
});

module.exports = mongoose.model('moviedata',movieModel);