var express = require('express');
var {employeeModel}=require('../models/employeeModel');
const routers = express.Router();
routers.get('/',(req,res)=>{
    res.send("Hai...");
});
routers.post('/register',async(req,res)=>{
    try
    {
        var employeeData= new employeeModel(req.body);
        var result =await employeeData.save();
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
routers.post('/login',async(req,res)=>{
    try {
        var employeeCode = req.body.empCode;
        var employessPassword= req.body.empPassword;
        res.json({"status": "sucess" })
    } catch (error) {
        res.json({"status": "failed" });

             }
});
module.exports =routers;