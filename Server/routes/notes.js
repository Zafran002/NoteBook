const express = require ('express');
const router = express.Router();

router.get ( '/',(req,res) =>{

    obj = {
        a:'thish',
        number:394
    }
    res.json(obj)
})
module.exports =router