const express=require("express")
const auth = require("../controllers/auth")
const app=express.Router()


app.post("/create",auth.CreateUser)
app.post("/login",auth.LoginUser)




module.exports=app