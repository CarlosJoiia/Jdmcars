window.addEventListener('load', iniciarTemporizador);
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('voltar-button');
const btnNext = document.getElementById('proximo-button');

let slideatual = 0;
let timer;

function esconderslide() {
  slider.forEach(item => item.classList.remove('on'))
}

function mostrarslide() {
  slider[slideatual].classList.add('on')
}

function proximoslide() {
  esconderslide()
  if (slideatual === slider.length - 1) {
    slideatual = 0
  } else {
    slideatual++
  }
  mostrarslide()
}

function voltarslide() {
  esconderslide()
  if (slideatual === 0) {
    slideatual = slider.length - 1
  } else {
    slideatual--
  }
  mostrarslide()
}

function iniciarTemporizador() {
  timer = setInterval(proximoslide, 10000); // 5000 milissegundos = 5 segundos
}

function pararTemporizador() {
  clearInterval(timer);
}

btnNext.addEventListener('click', function () {
  pararTemporizador();
  proximoslide();
  iniciarTemporizador();
});

btnPrev.addEventListener('click', function () {
  pararTemporizador();
  voltarslide();
  iniciarTemporizador();
});


const links = document.querySelectorAll('.scroll-link');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

