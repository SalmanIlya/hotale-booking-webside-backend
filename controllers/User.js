const User=require("../models/User")
const cryptojs=require("crypto-js")
const dotenv=require("dotenv")
dotenv.config({path:"config/config.env"})
const secritkey=process.env.sk
module.exports={
    // update user 
    updateUser:async(req,res,next)=>{
try{
    const user=await User.findById(req.params.id)
    if(user){
        const update={
            username:req.body.username,
            email:req.body.email,
            country:req.body.country,
            img:req.body.img,
            city:req.body.city,
            phone:req.body.phone,
            password:cryptojs.RC4.encrypt(req.body.password,secritkey).toString(),
            isAdmin:req.body.isAdmin
        }
const useritem=await User.findByIdAndUpdate(
    req.params.id,
    {$set:update},
    {new:true}
)
res.status(202).json(useritem)
    }else{
        res.status(404).json("user not found")
    }
}catch(err){
   next(err)
}
    },
    // delete user 
    deleteUser:async(req,res,next)=>{
        try{
            const user=await User.findById(req.params.id)
            if(user){
            user.remove()
            res.status(200).json("user delete succesfully")
            }else{
                res.status(404).json("user not found")
            }
        }catch(err){
next(err)

        }
    },
    // get one user 
    getOneUser:async(req,res,next)=>{
        try{
const user=await User.findById(req.params.id)
if(user){
    res.status(202).json(user)

}else{
    res.status(404).json("user not found")
}
        }catch(err){
  next(err)

        }
    },
    // get all user 
    getAllUser:async(req,res,next)=>{
        try{
            const user=await User.find()
            res.send(user)
        }catch(err){
   next(err)

        }
    },
    
}