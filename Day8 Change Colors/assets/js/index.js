const container = document.querySelector('.container');
const paragraph = container.querySelectorAll('p');
const estilos = getComputedStyle(document.body);
const colorBackground = estilos.backgroundColor;
const boton = document.querySelector('.boton');
const colours = ["#c2d076", "#155b00", "#77add1", "#724855e", "#6f51e8", "#5b1600"];

for (let p of paragraph) {
    p.style.backgroundColor = colorBackground;
    p.style.color = '#fff';
}

boton.addEventListener('click', (e) => {
    const color = colours[Math.floor(Math.random() * colours.length)];
    for (let p of paragraph) {
        p.style.backgroundColor = color;
    }
})

