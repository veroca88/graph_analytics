const express = require('express');
const router = express.Router();
const Company = require('../models/Company');

router.get('/', (req, res) => {

    Company.find().limit(30)
        .then(responseFromDB => {
            let eachInfoCompanies = [];
            for (const companies in responseFromDB) {
                eachInfoCompanies.push(responseFromDB[companies])
            }
            res.render('dataFromDB', {
                eachInfoCompanies,
            })
        }
        )
        .catch(error => console.log(error))
})


module.exports = router;
