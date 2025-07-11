const { model } = require("mongoose");

const { HoldingSchema } = require("../schema/Holdingschema");

const HoldingModel = model("holding", HoldingSchema);

module.exports = { HoldingModel };