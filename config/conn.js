const express= require('express')
const mongoose = require('mongoose')

const DB =  'mongodb+srv://user:user@cluster0.ntvby.mongodb.net/Blog?retryWrites=true&w=majority'

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology:true
  
}).then(() => {
    console.log('Connection Successful')
}).catch((err) => console.log(err)) 

