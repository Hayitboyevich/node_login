const router = require('./route/router')
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session');
const app = express();
require('./model/db')
const {urlencoded} = require("express");

//EJS
// app.use(expressLayouts)
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

//Flash
app.use(flash())
//Global vars
app.use((req, res, next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next()
})

//Route
app.use('', router);
//End Route

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log(`Connect to ${PORT}`)
})
