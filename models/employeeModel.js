var mongoose = require('mongoose');

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
module.exports ={employeeModel}