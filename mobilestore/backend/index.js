const express = require("express");
const app = express();
const dbconnect = require("./database/dbconnect")
const MobileData = require("./models/mobilemodel")
const cors = require('cors')

app.use(cors());
app.listen(4000,()=>{
    console.log("server started");
});
dbconnect();
app.use(express.json());

app.get('/',(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"server started 200 response ok",
    });
});

app.post('/addmobiledata',async(req,res)=>{
    try{
        const newdata = new MobileData(req.body);
        await newdata.save(); 
        return res.status(200).json({
            success:true,
            message:"data save successfully",
        });
    }catch(error){
        console.log("data not saved")
    }
    
});

app.get('/getmobiledata',async(req,res)=>{
    try{
        const newdata = await MobileData.find({})
        return res.status(200).json({
            success:true,
            newdata,
            message:"data get successfully",
        });
    }catch(error){
        console.log("data not received")
    }
    
});