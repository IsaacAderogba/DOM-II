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
    if (body.classList.contains('darklightmode')) {
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
function zoom(event) {
    event.preventDefault();

    if (event.deltaY < 0) {
        // Zoom in
        scale *= event.deltaY * -0.1;
    }
    else {
        // Zoom out
        scale /= event.deltaY * 0.1;
    }

    // Restrict scale
    scale = Math.min(Math.max(.8, scale), 1.2);

    // Apply scale transform
    funBus.style.transform = `scale(${scale})`;
}

let scale = 1;
const funBus = document.querySelector('.container .intro img');
funBus.addEventListener('wheel', zoom);

// 4. Drag either let's go image or adventure waits image over eachother


// 5. Congratulate user for successfully loading the page
// window.addEventListener('load', () => {
//     alert("Congratulations, you've loaded the page!");
// });

// 6. change heading colour once clicked
const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

headings.forEach((heading) => {
    heading.addEventListener('click', (event) => {
        event.target.style.color = 'pink';
    });
})

// 7. As window is resized, invert sizes


// 8. Scroll progressively changes the header background colour

let ticking = false;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function changeHeader() {

    let randSelection = getRandomInt(6);
    switch (randSelection) {
        case 0:
            body.children[0].setAttribute('style', 'color: white; background: yellow;');
            break;
        case 1:
            body.children[0].setAttribute('style', 'color: white; background: orange;');
            break;
        case 2:
            body.children[0].setAttribute('style', 'color: white; background: green;');
            break;
        case 3:
            body.children[0].setAttribute('style', 'color: white; background: red;');
            break;
        case 4:
            body.children[0].setAttribute('style', 'color: white; background: blue;');
            break;
        case 5:
            body.children[0].setAttribute('style', 'color: white; background: violet;');
            break;

    }

}

window.addEventListener('scroll', function (e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function () {
            changeHeader();
            ticking = false;
        });

        ticking = true;
    }
});

// 9. Copy any paragraph text that has been selected
function editSelection() {
    let selection = window.getSelection();
    alert(selection);
}

const paragraph = document.querySelectorAll('p');

paragraph.forEach((p) => {
    p.addEventListener('select', editSelection);
});

// 10. Increase size of 2 main images if double clicked
let mainImages = document.querySelectorAll('.img-content img');

mainImages[0].addEventListener('dblclick', () => {
    mainImages[0].setAttribute('style', 'transform: scale(1.10);');
});

mainImages[1].addEventListener('dblclick', () => {
    mainImages[1].setAttribute('style', 'transform: scale(1.10);');
});