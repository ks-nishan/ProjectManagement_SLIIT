const router = require('express').Router();
const supervisor=require('../models/supervisor')

router.route('/').get((req, res) => {
    supervisor.find()
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