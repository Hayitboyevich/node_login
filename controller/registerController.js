const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('login/register', {
        title:"Register"
    })
})

router.post('/', (req, res)=>{
    console.log(req.body);
    res.send('leelo')
})

module.exports =  router;