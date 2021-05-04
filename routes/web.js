const homeController =  require('../app/http/controllers/homeController');
const authController = require('../app/http/controllers/authController');
const cartController = require('../app/http/controllers/customer/cartController');

function initRoute(app){

    
    app.get('/', homeController().index)
    
    app.get('/login',authController().login)
    app.post('/login',authController().postLogin)
    app.get('/register',authController().register)
    app.post('/register',authController().postRegister)

    app.get('/cart',cartController().cart)
    app.post('/update-cart',cartController().update)


}

module.exports = initRoute