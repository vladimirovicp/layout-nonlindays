"use strict";

let burgerMenu = document.querySelector('.header__burger-wrap');
let burgerNav = document.querySelector('.header__navigation-wrap');

burgerMenu.addEventListener('click', () =>{
    burgerMenu.classList.toggle('_burger');
    let burgerIcon = burgerMenu.childNodes[1].classList.toggle('_burger-icon');
    
    burgerNav.classList.toggle('_active');
})