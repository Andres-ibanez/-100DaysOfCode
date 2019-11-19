const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const contador = document.querySelector('.contador');
let timer;
let seconds = 0;

const criarHora = (seconds) => {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
};

const startWatch = () => {
    timer = setInterval(() => {
        seconds++;
        contador.innerHTML = criarHora(seconds);
    }, 1000);
};

document.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains('reset')) {
        seconds = 0;
        contador.innerHTML = criarHora(seconds);
        contador.classList.remove('stopColor');
    };
    if (element.classList.contains('start')) {
        clearInterval(timer);
        startWatch();
        contador.classList.remove('stopColor');
    };
    if (element.classList.contains('stop')) {
        clearInterval(timer);
        contador.classList.add('stopColor');
    };
})