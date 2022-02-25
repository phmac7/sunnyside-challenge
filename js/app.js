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





// HOVER EFFECT WITHOUT THE LINK HOVER

// const svg = document.querySelectorAll('.svgIcon');
// svg.forEach(svg => {
//     svg.addEventListener('mouseover', () => {
//         path = svg.contentDocument.querySelector('svg').querySelector('path');
//         path.setAttribute('fill', '#fff')
//     })
// })

// svg.forEach(svg => {
//     svg.addEventListener('mouseout', () => {
//         path = svg.contentDocument.querySelector('svg').querySelector('path');
//         path.setAttribute('fill', '#2C7566')
//     })
// })



// #2C7566
//path = svg[i].contentDocument.querySelector('svg').querySelector('path');
//path.setAttribute('fill', '#2C7566')