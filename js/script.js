var typed5 = new Typed('#typing', {
    strings: ['Effective Problem Solver', 'Passionate Blockchain Enthusiast', 'Full Stack Developer', 'Committed Open Source Contributor'],
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