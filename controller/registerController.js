const express = require('express');
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
const router = express.Router();
const User = require('../model/User')


router.get('/', (req, res)=>{
    res.render('login/register', {
        title:"Register"
    })
})

router.post('/', (req, res)=>{
    const {name, email, password, password2} = req.body;
    let errors =[];

    if (!name || !email || !password || !password2)
    {
        errors.push({msg: "Please fill all the field"})
    }
    if (password !== password2)
    {
        errors.push({msg:"Passwords do not match"})
    }
    if(password.length<6){
        errors.push({msg:"Password should be least 6 characters"})
    }

    if (errors.length>0)
    {
        res.render('login/register', {
            title:"Register",
            errors,
            name,
            email,
            password,
            password2
        })
    }
    else {
    User.findOne({email, email})
        .then(user=>{
            if(user){
                errors.push({msg:"User already taken"})
                res.render('layout/register', {
                    errors,
                    name,
                    email,
                    password,
                    password2
                })
            }else{
                const newUser = new User({
                    name, email, password
                })
                bcrypt.genSalt(10, (err, salt)=>{
                    bcrypt.hash(newUser.password, salt, (err, hash)=>{
                        if(err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user=>{
                                req.flash('success_msg', "You are registered Successfully")
                                res.redirect('/login')
                            })
                            .catch(err=>console.log(err))
                    })
                })
            }
        })
    }
})

module.exports =  router;