const express = require('express');
const { NotExtended } = require('http-errors');
const router = express.Router();
const Company = require('../models/Company');

router.get('/', (req, res) => {
    Company.find().limit(20)
        .then(responseFromDB => {
            let eachInfoCompanies = [];
            for (const companies in responseFromDB) {
                eachInfoCompanies.push(responseFromDB[companies])
            }
            res.render('dataFromDB', {
                eachInfoCompanies,
            })
        })
        .catch(error => console.log(error))
})

router.get('/company/:id', (req, res, next) => {
    Company.findById(req.params.id)
        .then(companyFound => {
            let raisedAMount = [];
            let fundedYear = [];
            let raisedCurrencyCode = [];

            const { funding_rounds } = companyFound

            funding_rounds.map(eachFund => {
                raisedAMount.push(eachFund.raised_amount);
                fundedYear.push(eachFund.funded_year);
                raisedCurrencyCode.push(eachFund.raised_currency_code);
            })
            res.render('oneCompanyInfo', {
                companyFound
            })
        })
        .catch(error => next(error))
})

router.get(`/data/:id/json`, (req, res) => {
    Company.findById(req.params.id)
        .then(companyFound => {
            let raisedAmount = [];
            let fundedYear = [];
            let raisedCurrencyCode = [];

            const { funding_rounds } = companyFound
            funding_rounds.map(eachFund => {
                raisedAmount.push(eachFund.raised_amount);
                fundedYear.push(eachFund.funded_year);
                raisedCurrencyCode.push(eachFund.raised_currency_code);
            })
            res.json({ raisedAmount, fundedYear })
        })
        .catch(error => console.log(error))
})





module.exports = router;
