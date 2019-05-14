// Your code goes here

// 1. mouseover button effect
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(button) {
    button.addEventListener('mouseover', (event) => event.target.style.backgroundColor = 'black');
});

// buttons.addEventListener('mouseover', function(event){
//     event.target.style.backgroundColor = 'ffeacc';
// });

// 2. keydown to implement dark mode

// 3. wheel to zoom in bus picture

// 4. Drag either let's go image or adventure waits image over eachother

// 5. Congratulate user for successfully loading the page

// 6. focus on a heading paints a beach background

// 7. As window is resized, invert sizes

// 8. Scroll progressively changes the header background colour

// 9. Bold and italicise any text that has been selected

// 10. Increase size of any 3 images if double clicked