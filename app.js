const express=require("express")
const bodyparser=require("body-parser")
const cors=require("cors")
const admin=require("./routes/admin")

const app=express()

app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.json());
app.use("/api",admin)
module.exports=app