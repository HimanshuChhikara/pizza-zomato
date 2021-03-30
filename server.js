require('dotenv').config()
const express = require('express')
const app = express()
const ejs = require('ejs');
const path = require('path');
const expressLayout = require('express-ejs-layouts');
// const session = require('express-session');
// const flash = require('express-flash');
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose');
// const MongoDbStore = require('connect-mongo')(session);


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

// session.config
// var mongoStore = new MongoDbStore({
//         mongooseConnection: connection,
//         collection: 'sessions'
// })

// app.use(session({
//     secret : process.env.COOKIE_SECRET,
//     resave : false,
//     // store : mongoStore,
//     saveUninitialized : false,
//     cookie : { maxAge: 1000 * 60 * 60 * 24} // 24 hours
// }))


// app.use(flash())
//Assets

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