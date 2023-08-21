"use strict";

let burgerMenu = document.querySelector('.header__burger-wrap');
let burgerNav = document.querySelector('.header__navigation-wrap');
let burgerClose = document.querySelector('.header__navigation-burger');

burgerMenu.addEventListener('click', () =>{
    burgerNav.classList.add('_active');
})

burgerClose.addEventListener('click', () =>{
    burgerNav.classList.remove('_active');
})
