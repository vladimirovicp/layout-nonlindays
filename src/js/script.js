"use strict";

let burgerMenu = document.querySelector('.header__burger-wrap');
let burgerNav = document.querySelector('.header__navigation-wrap');
let burgerClose = document.querySelector('.header__navigation-burger');
let navigationList = document.querySelector('.header__navigation-list');

burgerMenu.addEventListener('click', () =>{
    burgerNav.classList.add('_active');
})

let navItem = navigationList.children;
for (let i = 0; i < navItem.length; i++){
    navItem[i].addEventListener('click', ()=>{
        burgerNav.classList.remove('_active');
    })
}

burgerClose.addEventListener('click', () =>{
    burgerNav.classList.remove('_active');
})
