const router = require('./route/router')
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const flash = require('connect-flash');
const passport = require('passport')
const session = require('express-session');
const app = express();
require('./model/db')
const {urlencoded} = require("express");
require('./config/passport')(passport);
//EJS
app.set('view engine', 'ejs')
//endEJS

//Body parser
app.use(express.urlencoded({extended:false}))
//end Body parser

//Session
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
//Flash
app.use(flash())
//Global vars
app.use((req, res, next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next()
})

//Route
app.use('', router);
//End Route

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log(`Connect to ${PORT}`)
})
