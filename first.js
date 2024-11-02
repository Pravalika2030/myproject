const express = require("express");
const app = express();
const port= 3000;
const path = require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))
app.get("/",(req,res)=>{
    res.render("index.ejs");
})
app.get("/home",(req,res)=>{
    res.send("your in home page");
})

app.get("/roll",(req,res)=>{
    let num = Math.floor( Math.random()*6)+1;    
    res.render("rool.ejs",{num});
})
app.get("/ig/:username",(req,res)=>{
   let {username} = req.params;
   const instadata = require("./data.json");
   let data = instadata[username]
   res.render("insta.ejs",{data});
})
app.listen(port,()=>{
    console.log("im listening Pravalika");
})