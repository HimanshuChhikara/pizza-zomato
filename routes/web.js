const homeController =  require('../app/http/controllers/homeController');
const authController = require('../app/http/controllers/authController');
const cartController = require('../app/http/controllers/customer/cartController');

function initRoute(app){

    
    app.get('/', homeController().index)
    app.get('/cart',cartController().cart)
    app.get('/login',authController().login)
    app.get('/register',authController().register)
}

module.exports = initRoute