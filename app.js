//HOVER EFFECT INSIDE THE <A> TAG

const links = document.querySelectorAll('.footer__icons-link')

links.forEach(links => {
    links.addEventListener('mouseover', () => {
        let path = links.querySelector('.svgIcon').contentDocument.querySelector('svg').querySelector('path');
        path.setAttribute('fill', '#fff')
    })
})


links.forEach(links => {
    links.addEventListener('mouseout', () => {
        let path = links.querySelector('.svgIcon').contentDocument.querySelector('svg').querySelector('path');
        path.setAttribute('fill', '#2C7566')
    })
})


const button = document.querySelector('.nav__toggle')

button.addEventListener('click', () => {
    const select = document.querySelector('.header__nav-bar--list')
    select.classList.toggle('menu-toggle');
}
)
