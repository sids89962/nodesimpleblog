const express= require('express')
const mongoose = require('mongoose')

const DB =  'MONGO_URI'

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology:true
  
}).then(() => {
    console.log('Connection Successful')
}).catch((err) => console.log(err)) 

