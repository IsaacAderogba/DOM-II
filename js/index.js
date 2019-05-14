// Your code goes here

// 1. mouseover button effect
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('mouseover', (event) => event.target.style.backgroundColor = 'black');
});
// 2. keydown to implement dark mode
const body = document.body;
const navLinks = document.querySelectorAll('.main-navigation .nav-link')

document.addEventListener('keydown', () => {
    body.classList.toggle('darklightmode');
    if(body.classList.contains('darklightmode')) {
        body.setAttribute('style', 'color: white; background: #2d2d2d;');
        body.children[0].setAttribute('style', 'color: white; background: #2d2d2d;');
        navLinks.forEach(navLink => navLink.setAttribute('style', 'color: white'));
    } else {
        body.removeAttribute('style');
        body.children[0].removeAttribute('style');
        navLinks.forEach(navLink => navLink.removeAttribute('style'));
    }
});

// 3. wheel to zoom in bus picture

// 4. Drag either let's go image or adventure waits image over eachother

// 5. Congratulate user for successfully loading the page

// 6. focus on a heading paints a beach background

// 7. As window is resized, invert sizes

// 8. Scroll progressively changes the header background colour

// 9. Bold and italicise any text that has been selected

// 10. Increase size of any 3 images if double clicked