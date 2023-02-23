const mongoose=require("mongoose")
module.exports=db=()=>{
    mongoose.connect(process.env.db).then(()=>{
        console.log("database is connected succesfully");
    }).catch((error)=>{
        console.log("database connection error :",error);
    })
}
