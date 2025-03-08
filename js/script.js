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

anime({
    targets: '.square',
    translateX: anime.stagger(15, {grid: [5, 4], from: 'center', axis: 'x'}),
    translateY: anime.stagger(15, {grid: [5, 4], from: 'center', axis: 'y'}),
    rotateZ: anime.stagger([0, 90], {grid: [5, 4], from: 'center', axis: 'x'}),
    delay: anime.stagger(300, {grid: [5, 4], from: 'center'}),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutQuad'
});

AOS.init();