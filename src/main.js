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