const router = require('./route/router')
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
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

//Route
app.use('', router);
//End Route

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log(`Connect to ${PORT}`)
})
