const { model } = require("mongoose");
const { OrderSchema } = require("../schema/OrderSchema");

const OrderModel = model("order", OrderSchema);

module.exports = { OrderModel };