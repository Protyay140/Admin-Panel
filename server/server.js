require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router/auth-router'); 
const connectDb = require('./utils/db');
app.use(express.json()); // to deliver json data ..............MIDDLEWARE

app.use("/api/auth",router);

const port = 3000;
connectDb().then(()=>{
    app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    })
})
