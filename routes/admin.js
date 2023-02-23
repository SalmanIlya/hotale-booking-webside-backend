const express=require("express")
const user=require("./user")
const hotal=require("./hotal")
const rooms=require("./rooms")

const app=express.Router()

app.use("/user",user)
app.use("/hotal",hotal)
app.use("/rooms",rooms)








module.exports=app