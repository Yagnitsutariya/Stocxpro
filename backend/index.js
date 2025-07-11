require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors =  require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const { HoldingModel } = require("./model/HoldingModel");
const { PositionModel } = require("./model/PositionModel");
const { OrderModel } = require("./model/OrderModel");

const PORT = process.env.PORT || 3002;

const uri = process.env.MONGO_URL

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser()); 

app.use("/", authRoute);

app.get("/allHolding", async (req,res)=>{
  let allHolding = await HoldingModel.find({});
  res.json(allHolding);
});

app.get("/allPosition", async (req,res)=>{
  let allPosition = await PositionModel.find({});
  res.json(allPosition);
});

app.get("/order", async (req,res)=>{
  let order = await OrderModel.find({});
  res.json(order);
});

app.post("/newOrder", async (req, res) => {
  // console.log("Received new order:", req.body);

  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    type: req.body.type,
    status: req.body.status,
  });
  await newOrder.save();

  res.send("Order saved!");
});


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.listen(PORT, ()=>{
    console.log("start");
});