const { Schema } = require("mongoose");

const OrderSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  type: String,
  status: String,
});

module.exports = { OrderSchema };
