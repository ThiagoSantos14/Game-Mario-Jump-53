const background = document.querySelector('.click-background');
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

background.addEventListener('click', function(event) {
    event.preventDefault();

    mario.classList = 'mario-jump';

    setTimeout(() => {
        mario.classList = 'mario';
    }, 570);
});

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 100 && pipePosition > 60 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'game-over.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '30px';
        mario.style.bottom = '40px';
        
        clearInterval(loop);
    }

}, 10);