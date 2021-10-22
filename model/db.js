const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/login')
.then(()=>{
    console.log('Bazaga Ulandi')
})
.catch((err)=>{
    console.log(err)
})