function initRoute(app){

    app.get('/', function(req,res){ 
        res.render('home');
    })

    app.get('/cart',function(req,res){
        res.render('/views/customers/cart')
    })
    
    app.get('/login',function(req,res){
        res.render('auth/login')
    })
    
    app.get('/register',function(res,res){
        res.render('auth/register')
    })
}

module.exports = initRoute