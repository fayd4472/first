
const scrollbtn = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollbtn.style.transform = "scale(1)"
    } else {
        scrollbtn.style.transform = "scale(0)"
    }
})

const navbtn = document.querySelector('#navbtn')

const nav = document.querySelector('nav')

document.querySelector('#navbtn').addEventListener('click', () => {
    if (navbtn.dataset.state == 'hidden') {
        nav.style.transform = 'translate(0)'
        navbtn.dataset.state = 'visible'
        navbtn.innerHTML = '<i class="ri-close-large-fill"></i>'
        return;
    }
    nav.style.transform = 'translate(200%)'
    navbtn.innerHTML = ''
    navbtn.dataset.state = 'hidden'

})