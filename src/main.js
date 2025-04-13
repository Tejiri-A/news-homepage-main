'use strict'
import './sass/main.scss'

// NAV TOGGLE
const btnOpen = document.getElementById('nav__open')
const btnClose = document.getElementById('nav__close')
const navList = document.querySelector('.nav__list')

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

btnOpen.addEventListener('click', () => {
    navList.classList.add('show__nav');
    overlay.classList.add('show__overlay');
});

btnClose.addEventListener('click', () => {
    navList.classList.remove('show__nav');
    overlay.classList.remove('show__overlay');
});

// SMOOTH SCROLLING
navList.addEventListener('click', e => {
    e.preventDefault()
    if (e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href')
        console.log(document.querySelector(id));
        document.querySelector(id).scrollIntoView({behavior: 'smooth'})
    }
    
})