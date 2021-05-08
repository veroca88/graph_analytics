const express = require('express');
const { response } = require('../app');
const router = express.Router();

const Company = require('../models/Company')


router.get('/', (req, res) => {
    Company.find().limit(2)
        .then(response => {
            // console.log("==============", response)
            // let name = response[0]["name"]
            let eachCompany = response.map(obj => obj.name)
            console.log("=======", eachCompany);
            // res.render('dataFromDB', {
            // })
        }
        )
        .catch(error => console.log(error))

})



module.exports = router;
