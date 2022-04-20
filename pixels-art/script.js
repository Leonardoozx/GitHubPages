const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');
const colors = document.querySelectorAll('.color');
const selectedPixel = document.getElementsByClassName('selected');
const pixel = document.getElementsByClassName('pixel');
const btnClear = document.getElementById('clear-board');
const generateBoardBtn = document.getElementById('generate-board');
const inputBoardSize = document.getElementById('board-size');
const spanPixel = document.getElementsByTagName('span');
const sections = document.getElementsByTagName('section');

function giveColors() {
    colors[0].style.backgroundColor = 'black';
    colors[1].style.backgroundColor = 'green';
    colors[2].style.backgroundColor = 'pink';
    colors[3].style.backgroundColor = 'blue';
}
giveColors();

function createPixelBoard(size) {
    for (let i = 0; i < size; i += 1) {
        let pixel = document.createElement('span');
        pixel.classList.add('pixel');
        pixelBoard.appendChild(pixel);
    }
}
createPixelBoard(25);

// Mudei minha lógica aqui, ao invés de adicionar a classe 'selected' no elemento clicado, e depois remover dos outros, primeiro eu estou removendo a classe de todos os elementos, e depois adicionando no elemento que cliquei.
function passAwaySelected(event) {
    colors[0].classList.remove('selected');
    colors[1].classList.remove('selected');
    colors[2].classList.remove('selected');
    colors[3].classList.remove('selected');
    event.target.classList.add('selected');
}
colorPalette.addEventListener('click', passAwaySelected);

function paintThePixels(event) {
    const cssObj = window.getComputedStyle(selectedPixel[0]).backgroundColor;
    event.target.style.backgroundColor = cssObj;
}
pixelBoard.addEventListener('click', paintThePixels);

function clearTheBoard() {
    for (let i = 0; i < pixel.length; i += 1) {
        pixel[i].style.backgroundColor = 'white';
    }
}
btnClear.addEventListener('click', clearTheBoard);

function resizeTheBoard(n) {
    n = inputBoardSize.value;
    for (let i = 0; i < pixel.length; i += 0) {
        pixel[i].remove()
    }
    for (let i = 0; i < n * n; i += 1) {
        let pixel = document.createElement('span');
        pixel.classList.add('pixel');
        pixelBoard.appendChild(pixel);
    }
    if (n <= 5) {
        for (let i = 0; i < pixel.length; i += 0) {
            pixel[i].remove()
        }
        createPixelBoard(25);
    }
    if (n >= 50) {
        for (let i = 0; i < pixel.length; i += 0) {
            pixel[i].remove()
        }
        createPixelBoard(50);
    }
    if (inputBoardSize.value <= 0) {
        alert('Board inválido!');
        createPixelBoard(25);
    }
    for (let index = 0; index < sections.length; index += 0) {
        sections[index].remove();
    }
    pixelBoard.style.maxHeight = '50';
    inputBoardSize.value = '';
}
generateBoardBtn.addEventListener('click', resizeTheBoard);

window.onload = function () {
    colors[0].classList.add('selected');


    // Antes eu estava salvando os valores em variantes, e vi que estava gerando cores iguais para todos os pixels, então coloquei o mathFloor(MathRandom) dentro do 'colors[].style.backgroundColor='
    // let r = Math.floor(Math.random() * 255);
    // let g = Math.floor(Math.random() * 255);
    // let b = Math.floor(Math.random() * 255);

    colors[1].style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
    colors[2].style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
    colors[3].style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
}