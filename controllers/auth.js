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
    },
    // login user 
    LoginUser:async(req,res)=>{
        try{
const user=await User.findOne({username:req.body.username})
const {password,isAdmin,...other}=user._doc
if(user){
    const pass=cryptojs.RC4.decrypt(user.password,secritkey).toString(cryptojs.enc.Utf8)
    if(pass===req.body.password){
        res.status(202).json({...other})
    }else{
        res.status(402).json("password does not match")
    }
}else{
    res.status(404).json("user not found")
}
        }catch(err){
            res.status(500).json("error is :",err)
        }
    }
}