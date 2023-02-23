const app=require("./app")
const dotenv=require("dotenv")
const db = require("./database/db")
dotenv.config({path:"config/config.env"})
const port=process.env.port 
db()
app.listen(port ,()=>{
    console.log(`server is working on http://localhost:${port}`);
})