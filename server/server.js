require('dotenv').config();
const express = require('express');
const app = express();
const authRouter = require('./router/auth-router');
const contactRouter = require('./router/contact-router');
const serviceRouter = require('./router/service-router');
const connectDb = require('./utils/db');
const cors = require("cors");
const errorMiddleware = require('./middlewares/error-middleware');
const stripe = require('stripe')("sk_test_51N2tLuSCOYgnTAbAvvCZlx3Wj5emEgnMrQZsr06Zq1MUAcM63Coe8e9TJwenxuJNiHou4qGt94pXy0yWLUK7YANh0001gAwXkX");

const corsOptions = {
  "origin": "http://localhost:5173",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
}

app.use(cors(corsOptions));


app.use(express.json()); // to deliver json data ..............MIDDLEWARE

app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use('/api/data', serviceRouter);

app.post('/api/checkout', async (req, res) => {
  // const json = await req.json();
  const items = [{
    name: req.body.name,
    price: req.body.price,
    qnt: 1
  }]

  // console.log("request body : ", item);

  try {
    // const priceItem = (req.body.price);
    // const priceItem = 5000;
    // console.log(priceItem);
    // const price = await stripe.prices.create({
    //   currency: 'inr',
    //   unit_amount: (priceItem)*100,
    //   product_data: {
    //     name: req.body.name,
    //   },
    // });

    
    const lineItems = items.map((product)=>({
      price_data : {
        currency : "inr",
        product_data : {
          name : product.name,
        },
        unit_amount : (product.price)*100
      },
      quantity : product.qnt,
    }));


    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      // line_items : [{
      //   price : price.id,
      //   quantity : 1
      // }],
      line_items : lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ id: session.id });
    console.log(session.id);
  } catch (e) {
    console.log("checkout api error : ", e);
  }

})

app.use(errorMiddleware);
const port = 5000;
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  })
})
