const express=require("express")
const auth = require("../controllers/auth")
const User = require("../controllers/User")
const app=express.Router()


app.post("/create",auth.CreateUser)
app.post("/login",auth.LoginUser)
app.put("/user/:id",User.updateUser)
app.get("/:id",User.getOneUser)
app.get("/",User.getAllUser)
app.delete("/delete/:id",User.deleteUser)




module.exports=app