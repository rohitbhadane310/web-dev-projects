
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

let cartItem = document.querySelector('.cart-item-container');

document.querySelector('#card-btn').onclick = () =>{
    cartItem.classList.toggle('active');
}