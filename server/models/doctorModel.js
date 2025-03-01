const mongoose=require("mongoose")
const DoctorSchema=new mongoose.Schema({
    name:String,
    email:String,
    city:String,
    specilization:String,
    password:String
})
module.exports=mongoose.model("doctor" , DoctorSchema)