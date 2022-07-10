/* Cuando hago CLICK .button .nav TOOGLE 'activo */ 

const button = document.querySelector('.button');
const nav    = document.querySelector('.nav');

button.addEventListener('click',() =>{
  nav.classList.toggle('activo');
});

/* una vez pulsamos el #id, volvemos al estado inicial */ 
function toggleMenu() {
  const menuToggle = document.querySelector('.svg');
  const menu       = document.querySelector('.nav');
  menuToggle.classList.toggle('activo');
  menu.classList.toggle('activo');
}

/* Header Sticky */ 
window.addEventListener('scroll',() => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});


/* bucle cambiar palabras */ 
const likes = [
  "resolver problemas",
  "diseñar",
  "aprender",
  "programar",
  "trabajar en equipo",
];
let i = 0;

const like = () => {
  if (i === likes.length - 1) {
    i = 0;
  } else {
    i++;
  }
  document.getElementById("likes").innerHTML = likes[i];
};
like();

setInterval(() => {
  like();
}, 1500);



/* Animación de entrada seccion proyectos */ 
const boxes = document.querySelectorAll('.box');

const checkBoxes = () => {
  const triggerBotton = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBotton) box.classList.add('show');
    else box.classList.remove('show'); 
  });
};

window.addEventListener('scroll', checkBoxes);
checkBoxes();


/* Animacion GSAP */
gsap.from('.logo', {opacity:0, duration:2, delay:.5, x:50, ease:'expo.out', stragger:.2})
gsap.from('.svg', {opacity:0, duration:2, delay:.5, x:50, ease:'expo.out', stragger:.2})
gsap.from('.intro__titulo', {opacity:0, duration:1, delay:.75, x:50, ease:'expo.out', stragger:.2})
gsap.from('.intro__titulo2', {opacity:0, duration:2, delay:1, x:50, ease:'expo.out', stragger:.2})
gsap.from('.intro__titulo3', {opacity:0, duration:2, delay:1.2, x:50, ease:'expo.out', stragger:.2})
gsap.from('.boton__contactame', {opacity:0, duration:2, delay:1.5, y:-50, ease:'expo.out', stragger:.2})
gsap.from('.contenedor__contactame', {opacity:0, duration:2, delay:1.75, y:50, ease:'expo.out', stragger:.2})

