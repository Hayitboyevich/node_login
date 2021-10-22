const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    created:{
        type:Date,
        required:true,
        default:Date.now()
    },
})

const model  =mongoose.model('User', userSchema);

module.exports = model;