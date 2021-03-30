import axios from 'axios'
var addToCart = document.querySelectorAll('.add-to-cart')

function updateCart(pizza){
    axios.post('/update-cart',pizza).then(res => {
        console.log(res);
    })
}

addToCart.forEach((btn) => {
    btn.addEventListener('click',(e)=>{
        // console.log(e)
        let pizza = JSON.parse(btn.dataset.pizza);

        updateCart(pizza)
        console.log(pizza)
    })
})

