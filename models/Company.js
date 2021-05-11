
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const companySchema = new Schema({
    company_id: {
        type: Number
    },
    name: {
        type: String
    },
    homepage_url: {
        type: String
    },
    twitter_username: {
        type: String
    },
    category_code: {
        type: String
    },
    number_of_employees: {
        type: Number,
    },
    founded_year: {
        type: Number
    },
    description: {
        type: String
    },
    total_money_raised: {
        type: String
    },
    funding_rounds: {
        type: Array
    }
},
    { timestamps: true }
)

const company = model("company", companySchema);
module.exports = company;