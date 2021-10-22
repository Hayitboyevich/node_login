const express = require('express');
const app = express();
const login = require('../controller/loginController')
const register = require('../controller/registerController')
const user = require('../controller/userController')


app.get('/', (req, res)=>{
    res.render('index', {
        title:"Home Page"
    })
})
app.use('/login', login);
app.use('/register', register);
app.use('/admin', user);

module.exports = app;
