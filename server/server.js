const express = require('express');
const app = express();
const router = require('./router/auth-router'); 
app.use(express.json()); // to deliver json data ..............MIDDLEWARE

app.use("/api/auth",router);

const port = 3000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})