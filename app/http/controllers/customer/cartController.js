function cartController(){
    return {
        cart(req,res){
            res.render('customers/cart')
        },
        update(req,res){

            // if(!req.session.cart){
            //     req.session.cart = {
            //         items : {},
            //         totalQty : 0,
            //         totalPrice : 0 
            //     }
            //     let cart = req.session.cart
            //     console.log(req.body)
                    // if(cart.items[req.body._id]){

                    // }
            // }
             return res.json({data:'All ok'})
        }
    }
}

module.exports = cartController