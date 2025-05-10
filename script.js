const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

anime({
    targets: '.logo',
    translateY: [
      { value: '-0.5rem', easing: 'easeOutQuad', duration: 400 },
      { value: '0rem', easing: 'easeOutBounce', duration: 600, delay: 50 }
    ],
    delay: (el, i) => i * 80,
    loop: true,
    loopDelay: 800
  });

  anime({
    targets: '.info-box h1',
    translateX: '17rem'
  });
  
  anime({
    targets: '.info-box h1',
    rotate: '1turn'
  });
  
  anime({
    targets: '.row:nth-child(3) .info-box h1',
    scale: [1, 0.5, 1]
  });

  anime({
    targets: '.info-box h3',
    translateX: '15rem'
  });
  
  anime({
    targets: '.info-box h3',
    rotate: '1turn'
  });
  
  anime({
    targets: '.row:nth-child(3) .info-box h3',
    scale: [1, 0.5, 1]
  });

  anime({
    targets: '.info-box h2',
    translateX: '15rem'
  });
  
  anime({
    targets: '.info-box h2',
    rotate: '1turn'
  });
  
  anime({
    targets: '.row:nth-child(3) .info-box h2',
    scale: [1, 0.5, 1]
  });

  anime({
    targets: '.h2 span',
    translateX: '15rem'
  });
  
  anime({
    targets: '.h2 span',
    rotate: '1turn'
  });
  
  anime({
    targets: '.row:nth-child(3) .h2 span',
    scale: [1, 0.5, 1]
  });
  
  