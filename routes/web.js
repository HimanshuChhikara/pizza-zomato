const homeController =  require('../app/http/controllers/homeController');
const authController = require('../app/http/controllers/authController');

function initRoute(app){

    
    app.get('/', homeController().index)

    app.get('/cart',function(req,res){
        res.render('/views/customers/cart')
    })
    
    app.get('/login',authController().login)
    
    app.get('/register',authController().register)
}

module.exports = initRoute