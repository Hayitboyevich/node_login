const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();
const {ensureAuthenticated} = require('../config/auth')

router.get('/', ensureAuthenticated, (req, res)=>{
    res.render('admin', {
        title:"Admin"
    })
})

module.exports =  router;