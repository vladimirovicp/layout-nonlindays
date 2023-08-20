"use strict";

let burgerMenu = document.querySelector('.header__burger-wrap');
let burgerNav = document.querySelector('.header__navigation-wrap');

burgerMenu.addEventListener('click', () =>{
    burgerNav.classList.add('_active');
})