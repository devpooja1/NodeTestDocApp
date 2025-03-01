const express=require("express")
const route=express.Router()
const DoctorController=require("../controllers/adminController")

route.post("/signin",DoctorController.Signin)
 route.post("/login",DoctorController.Login)
 route.get("/displaydoctor",DoctorController.DisplayData)
 route.post("/patient",DoctorController.patientSave)
 route.get("/displaydata", DoctorController.patientDisplay)

module.exports=route