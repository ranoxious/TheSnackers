const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const snacksSchema = new Schema(
    {
        products: {type: String, required: true},
        description: {type: String, required: true},
        size: {type: String, required: true},
        price: {type: Integers, required: true},
        quanity: {type: Integers, required: true}
    }
);

const db = mongoose.model("Snacks", snacksSchema);

module.exports = db;

