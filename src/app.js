const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')


const newsfile = require('../news/news')
const sportsnews = require('../news/sports')
const healthnews = require('../news/health')
const sciencenews = require('../news/science')


app.set('view engine','hbs')
const dic = path.join(__dirname, '../views')
app.set('views' , dic)


//index page
app.get('/',(req,res)=>{
    newsfile((error, data) => {
    if(error){
            res.render('index',error);
        }
        else{
            res.send('index', data.articles)
        }
    })
})


// sports page
app.get('/sports',(req,res)=>{
    sportsnews((error, data) => {
    if(error){
            res.render('sports',error);
        }
        else{
            res.send('sports', data.articles)
        }
    })
})


// health page
app.get('/health',(req,res)=>{
    healthnews((error, data) => {
    if(error){
            res.render('health',error);
        }
        else{
            res.send('health', data.articles)
        }
    })
})


//science page
app.get('/science',(req,res)=>{
    sciencenews((error, data) => {
    if(error){
            res.render('science',error);
        }
        else{
            res.send('science', data.articles)
        }
    })
})


app.listen(port , ()=>{
    console.log('Server is running now ' + ' ' + port)
})

