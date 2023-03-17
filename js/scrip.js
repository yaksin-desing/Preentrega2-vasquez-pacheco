document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}

var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0

gsap.to({}, 0.050, {
    repeat: -1,

    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY
});

cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if(link.classList.contains('small')){
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
    });
});

let imgp = document.getElementById('imgp');
let menu = document.getElementById('menu');
let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let item4 = document.getElementById('item4');

window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    imgp.style.marginBottom = value * 0.4 + 'px';
    if (imgp.style.marginBottom <'1px'){
        menu.style.position = 'fixed';
        menu.style.zIndex='100';
        menu.style.paddingTop='1em';
        menu.style.top='0px';
    };
    if (imgp.style.marginBottom =='0px'){
        menu.style.paddingTop='0em';
        menu.style.position = 'relative';
    };
});


function girar(giro,color,colorline,trans,transTiming){
    document.getElementById('flecha').style.transform = giro;
    document.getElementById('flecha').style.transition = trans;
    document.getElementById('flecha').style.transitionTimingFunction = transTiming;
    document.getElementById('flecha').style.background = color;
    document.getElementById('flechaline').style.filter = colorline;
}
function girar1(giro,color,colorline,trans,transTiming){
    document.getElementById('flecha1').style.transform = giro;
    document.getElementById('flecha1').style.transition = trans;
    document.getElementById('flecha1').style.transitionTimingFunction = transTiming;
    document.getElementById('flecha1').style.background = color;
    document.getElementById('flechaline1').style.filter = colorline;
}
function girar2(giro,color,colorline,trans,transTiming){
    document.getElementById('flecha2').style.transform = giro;
    document.getElementById('flecha2').style.transition = trans;
    document.getElementById('flecha2').style.transitionTimingFunction = transTiming;
    document.getElementById('flecha2').style.background = color;
    document.getElementById('flechaline2').style.filter = colorline;
}
function girar3(giro,color,colorline,trans,transTiming){
    document.getElementById('flecha3').style.transform = giro;
    document.getElementById('flecha3').style.transition = trans;
    document.getElementById('flecha3').style.transitionTimingFunction = transTiming;
    document.getElementById('flecha3').style.background = color;
    document.getElementById('flechaline3').style.filter = colorline;
}

let titulo = document.getElementById('titulo');
let titulo1 = document.getElementById('titulo1'); 
const cargarImagen = (entradas, observador) => {

	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
            console.log('visible');
			entrada.target.classList.add('visible');
		}else {
            console.log('no visible');
            entrada.target.classList.remove('visible');
		}
	});
}

const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	rootMargin: '0px',
	threshold: 1.0
});

observador.observe(titulo);
observador.observe(titulo1);
observador.observe(item1);
observador.observe(item2);
observador.observe(item3);
observador.observe(item4);


