let planets = document.querySelectorAll('.header__planet');
let main = document.querySelector('main');
let playBtn = document.querySelector('.main__buttom');
let description = document.querySelector('.main__description');
let descPlanet = document.querySelector('.main__planet-name');
let audio = new Audio('sounds/sun.mp3');
audio.loop = 'true';
let curBg = 'sun';

planets.forEach(planet => {
    planet.addEventListener('click', () => {
        curBg = planet.dataset.bg;
        main.classList = `${curBg}`; /*картинка */

        descPlanet.textContent = curBg; /* название */

        planets.forEach(planet => {
            if (planet.dataset.bg == curBg){
                planet.classList.add('active');
            } else {
                planet.classList.remove('active'); /*добавление класса active*/
            }
        })

        audio.src = `sounds/${curBg}.mp3`;
        if (playBtn.classList.contains('playing')) {
            audio.play(); /*проигрывание*/

        }

    })
})


playBtn.addEventListener('click', () => {
    if (playBtn.classList.contains('playing')) {
        audio.pause();
    } else {
        audio.play();
    }
    playBtn.classList.toggle('playing')
});
