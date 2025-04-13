'use strict'
import './sass/main.scss'

// NAV TOGGLE
const btnOpen = document.getElementById('nav__open')
const btnClose = document.getElementById('nav__close')
const navList = document.querySelector('.nav__list')

btnOpen.addEventListener('click', () => {
    navList.classList.add('show__nav')
})

btnClose.addEventListener('click', () => {
    navList.classList.remove('show__nav')
})

// SMOOTH SCROLLING
navList.addEventListener('click', e => {
    e.preventDefault()
    if (e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href')
        console.log(document.querySelector(id));
        document.querySelector(id).scrollIntoView({behavior: 'smooth'})
    }
    
})