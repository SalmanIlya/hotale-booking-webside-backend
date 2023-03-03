const express=require("express")
const bodyparser=require("body-parser")
const cors=require("cors")
const admin=require("./routes/admin")
const cookieparser=require("cookie-parser")
const app=express()
app.use(cookieparser())
app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.json());
app.use("/api",admin)

app.use((error,req,res,next)=>{
    const errorstatus=error.status || 500
    const errormassage=error.massage||"not found"
    return res.status(errorstatus).json({
        success:"false",
        status:errorstatus,
        massage:errormassage,
        stack:error.stack
    })
})
module.exports=app