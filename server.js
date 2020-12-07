const express = require('express')
const app = express()
const ejs = require('ejs');
const path = require('path');
const expressLayout = require('express-ejs-layouts');

const PORT = process.env.PORT || 3000
const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/pizza";
mongoose.connect(url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:true
});
const connection = mongoose.connection;
connection.once('open',function(){
    console.log('Database connected');
}).catch(err=>{
    console.log('Connection Failed')
});

app.use(express.static('public'))

// Set template engine

app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'));
app.set('view engine', 'ejs')

require('./routes/web')(app)

app.get('/cart',function(req,res){
    res.render('/views/customers/cart')
})

app.get('/login',function(req,res){
    res.render('auth/login')
})

app.get('/register',function(res,res){
    res.render('auth/register')
})
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})