require('dotenv').config();
const express = require('express');
const app = express();
const authRouter = require('./router/auth-router');
const contactRouter = require('./router/contact-router');
const connectDb = require('./utils/db');
const cors = require("cors");
const errorMiddleware = require('./middlewares/error-middleware');

const corsOptions = {
  "origin": "http://localhost:5173",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

app.use(cors(corsOptions));


app.use(express.json()); // to deliver json data ..............MIDDLEWARE

app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);


app.use(errorMiddleware);
const port = 5000;
connectDb().then(() => {
    app.listen(port, () => {
        console.log(`server is running on port ${port}`);
    })
})
