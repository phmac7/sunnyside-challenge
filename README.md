# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

Desktop: 1440px <br>
Mobile: 375px

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](/images/desktop-print-done.png)


### Links

- Solution URL: https://www.frontendmentor.io/solutions/landing-page-created-with-sass-and-js-YLXIFwgAC
- Live Site URL: https://phmac7-sunnyside-challenge.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript

### What I learned

Learned how to style and add effects (like hover) on svg images nested inside an object tag(and inside a link in this case) with javascript!

```js
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

```


### Useful resources

- [Filter svg image](https://codepen.io/sosuke/pen/Pjoqqp) - This tool helped me changing colors of a svg file inside an 'img' tag

## Author


- Frontend Mentor - [@phmac7](https://www.frontendmentor.io/profile/phmac7)


