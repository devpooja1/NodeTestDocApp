const express=require("express")
const app=express();
require("dotenv").config();
const mongoose =require("mongoose")
const bodyParser=require("body-parser")
const cors=require("cors")
app.use(cors())
const port=process.env.PORT
const dbcon=process.env.DBCON

mongoose.connect(dbcon).then((res)=>{ console.log("DB connected")})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const DoctorRoute=require("./routes/adminRoute")

app.use("/doctor", DoctorRoute)


app.listen(port , ()=>{
    console.log(`server Run on ${port}`)
})