const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/articles')
const Article = require('./models/article')
const DB = require('./config/conn')
const methodOverride =require('method-override')
const app = express()


app.set('view engine', 'ejs')


app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use('/articles',router)





app.get('/',async (req,res) => {
    const articles = await Article.find().sort({
        createdAt: 'desc'
    })
    res.render('articles/index' ,{ articles:articles})
})

PORT = process.env.PORT || 5000

app.listen(PORT,() => {
    console.log('server running')
})