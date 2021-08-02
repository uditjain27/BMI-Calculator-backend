const router = require('express').Router();
let BMIData = require('../Models/bmi-model');
let data;
router.route('/').get((req, res) => {
    BMIData.find()
        .then(users => {
            res.json(JSON.stringify(users));
            finaldata = users;
            console.log(finaldata[0]);
            console.log(finaldata[0].height);
            console.log(finaldata[0].weight);
            console.log(finaldata[0].bmi);
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const height = Number(req.body.height);
    const weight = Number(req.body.weight);
    const bmi = Number(req.body.bmi);

    const newData = new BMIData({
        height,
        weight,
        bmi,
    });

    newData.save()
        .then(() => res.json('Data added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;