const express = require('express');
const mongoose = require("mongoose");
const passport = require('passport');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('login/login', {
        title:"Login"
    })
})

router.post('/', (req, res, next)=>{
    passport.authenticate('local', {
        successRedirect:"/admin",
        failureRedirect:"/login",
        failureFlash:true
    })(req, res, next);
})

router.get('/logout', (req, res)=>{
    req.logout();
    req.flash('success_msg', "You are logged out");
    res.redirect('/');
})
module.exports =  router;