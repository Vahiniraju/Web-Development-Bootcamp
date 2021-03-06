var express = require("express");
var app = express();


app.get("/",function(req,res)
{
   res.send("Hi there!"); 
});

app.get("/bye",function(req,res)
{
    res.send("Good Bye")
});

app.get("/dog",function(req,res)
{
    res.send("Meow!")
});

app.get("/dog/:dogname",function(req,res)
{
    console.log(req.params);
    res.send("Meow! Meow!")
});


app.get("*",function(req,res)
{
    res.sendç("You are a star!!");
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started!!")
});