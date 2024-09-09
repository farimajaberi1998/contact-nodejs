const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.get("/api/contact", (res,req)=>{
    res.status(200).json({message:"Get All Contact"})
})
app.listen(port, ()=>{
    console.log(`server: ${port}`);
});