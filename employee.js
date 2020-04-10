var express =require('express');
var parser =require('body-parser');
var mongoose=require('mongoose');

var app=express();
app.use(parser.urlencoded({extended:false}));
const employeeSchema= new mongoose.Schema({
    empCode:String,
    empName:String,
    empCompany:String,
    empEmail:String,
    empPhone:Number,
    empPassword:String

}
);
const employeeModel= mongoose.model('Employees',employeeSchema);

mongoose.connect("mongodb+srv://7ananthan:godisgrea7@cluster0-fcx3v.mongodb.net/test?retryWrites=true&w=majority");

app.get('/',(req,res)=>{
    res.send("Hai...");
});
app.post('/register',async(req,res)=>{
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
app.post('/login',async(req,res)=>{
    try {
        var employeeCode = req.body.empCode;
        var employessPassword= req.body.empPassword;
        res.json({"status": "sucess" })
    } catch (error) {
        res.json({"status": "failed" });

             }
});
app.listen(process.env.PORT || 3000,()=>{
    console.log("server started");
})