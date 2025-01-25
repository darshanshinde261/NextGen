const mongoose = require("mongoose");
require("dotenv").config();


console.log(process.env.DBURL)
const dbconnect = ()=>{mongoose.connect(process.env.DBURL) 
.then(() => {
    console.log('MongoDB connection successful!');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    
  });
}
module.exports = dbconnect;