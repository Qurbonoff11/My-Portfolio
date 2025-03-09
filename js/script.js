var typed5 = new Typed('#typing', {
    strings: ['Effective Problem Solver', 'Passionate Blockchain Enthusiast', 'Full Stack Developer', 'Committed Open Source Contributor', 'Graphic Designer'],
    typeSpeed: 60,
    backSpeed: 25,
    cursorChar: '|',
    shuffle: true,
    smartBackspace: false,
    loop: true
});


anime({
    targets: '#demo-svg #path_1, #demo-svg #path_2',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 5000,
    // delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});

// anime({
//     targets: '#demo-svg-mobile-xxl #path_1, #demo-svg-mobile-xxl #path_2',
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: 'easeInOutSine',
//     duration: 5000,
//     // delay: function(el, i) { return i * 250 },
//     direction: 'alternate',
//     loop: true
// });

// anime({
//     targets: '#demo-svg-mobile-xl #path_1, #demo-svg-mobile-xl #path_2',
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: 'easeInOutSine',
//     duration: 5000,
//     // delay: function(el, i) { return i * 250 },
//     direction: 'alternate',
//     loop: true
// });

// anime({
//     targets: '.square',
//     translateX: anime.stagger(15, {grid: [5, 4], from: 'center', axis: 'x'}),
//     translateY: anime.stagger(15, {grid: [5, 4], from: 'center', axis: 'y'}),
//     rotateZ: anime.stagger([0, 90], {grid: [5, 4], from: 'center', axis: 'x'}),
//     delay: anime.stagger(300, {grid: [5, 4], from: 'center'}),
//     loop: true,
//     direction: 'alternate',
//     easing: 'easeInOutQuad'
// });

anime({
    targets: '.square',
    scale: [
        {value: 1.3, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1500}
    ],
    loop: true,
    delay: anime.stagger(300, {grid: [5, 4], from: 'center'})
});


var roundLogEl = document.querySelector('.region_code');
anime({
    targets: roundLogEl,
    innerHTML: [0, 998],
    easing: 'linear',
    round: 10
});
var roundLogEl = document.querySelector('.code');
anime({
    targets: roundLogEl,
    innerHTML: [0, 94],
    easing: 'linear',
    round: 10
});
var roundLogEl = document.querySelector('.number1');
anime({
    targets: roundLogEl,
    innerHTML: [0, 333],
    easing: 'linear',
    round: 10
});
var roundLogEl = document.querySelector('.number2');
anime({
    targets: roundLogEl,
    innerHTML: [0, 200],
    easing: 'linear',
    round: 10
});
var roundLogEl = document.querySelector('.number3');
anime({
    targets: roundLogEl,
    innerHTML: [0, 6],
    easing: 'linear',
    round: 10
});


AOS.init();



// Navbar

function showSidebar() {
    const sidebar = document.querySelector(".nav_menu")
    sidebar.style.display = "flex"
}
function closeSidebar() {
    const sidebar = document.querySelector(".nav_menu")
    sidebar.style.display = "none"
}