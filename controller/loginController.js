const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('login/login', {
        title:"Login"
    })
})

module.exports =  router;