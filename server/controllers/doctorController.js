const DoctorModel=require("../models/adminModel")
const PatientModel=require("../models/patientModel")
const bcrypt=require("bcryptjs")

const Signin=async(req,res)=>{
  const  {name,specilist,email,city,password}=req.body
 
    try {
      const hashedPassword = await bcrypt.hash(password, 8);
        const User=await DoctorModel.create({
            name:name,
            email:email,
            city:city,
            specilization:specilist,
            password:hashedPassword
        })
        res.status(200).send("ok")
    } catch (error) {
      console.log(error)  
    }
}

const Login=async(req,res)=>{
 const { email, password }=req.body
  try {
    const User=await DoctorModel.findOne({email:email})
    console.log(User)
  if(!User)
  {
    res.status(400).send({msg:"Invalid Email"})
  }
  const isPasswordValid = await bcrypt.compare(password, User.password);
  
  if(!isPasswordValid)
  {
    res.status(400).send({msg:"Invalid Password"})
  }
  res.status(200).send( User)
  } catch (error) {
    console.log(error)  
  }
}

const DisplayData=async(req,res)=>{
 const User= await DoctorModel.find()
 res.send(User)
}

const patientSave=async(req,res)=>{
 const {name,illness,email,city}=req.body
 try {
  const patient=await PatientModel.create({
      name:name,
      email:email,
      city:city,
      illness:illness,
     
    })
    res.status(200).send("ok")
} catch (error) {
  console.log(error)  
}
}

const patientDisplay=async(req,res)=>{
  const User= await PatientModel.find()
  res.send(User)
 }







module.exports={
  Signin,
  Login,
  DisplayData,
  patientSave,
  patientDisplay
   
}