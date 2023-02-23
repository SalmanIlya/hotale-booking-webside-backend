const express=require("express")
const auth = require("../controllers/auth")
const app=express.Router()


app.post("/create",auth.CreateUser)





module.exports=app