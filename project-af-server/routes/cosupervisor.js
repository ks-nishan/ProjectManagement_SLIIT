const router = require('express').Router();
const cosupervisor=require('../models/cosupervisor')

router.route('/').get((req, res) => {
    cosupervisor.find()
    .exec()
    .then(result=>{
        console.log(result);
        res.status(200).send(result);
    })
    .catch(err=>{
        res.status(500).send(err);
    })
})
module.exports = router;