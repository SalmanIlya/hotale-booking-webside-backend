const express=require("express")
const hotal = require("../controllers/hotal")
const app=express.Router()

app.post("/hotale.create",hotal.createHotale)
app.put("/:id",hotal.updateUser)
app.get("/",hotal.getAll)
app.get("/hotal/:id",hotal.getSingle)
app.delete("/delete",hotal.deleteHotale)






module.exports=app