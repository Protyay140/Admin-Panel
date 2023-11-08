const express = require('express');
const app = express();
const port = 3000;


app.get("/",(req,res)=>{
    res.status(200).send("this is home page of our website");
});

app.get("/about",(req,res)=>{
    res.status(200).send("this is about page of our website");
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})