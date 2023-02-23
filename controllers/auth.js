const User=require("../models/User")
const cryptojs=require("crypto-js")
const dotenv=require("dotenv")
dotenv.config({path:"config/config.env"})
const secritkey=process.env.sk
module.exports={
    // create user 
    CreateUser:async(req,res)=>{
const createUser=new User({
    username:req.body.username,
    email:req.body.email,
    country:req.body.country,
    img:req.body.img,
    city:req.body.city,
    phone:req.body.phone,
    password:cryptojs.RC4.encrypt(req.body.password,secritkey).toString(),
    isAdmin:req.body.isAdmin
})
try{
const saveUser=await createUser.save()
res.status(200).json(saveUser)
}catch(err){
res.status(500).json(err)
}
    }
}