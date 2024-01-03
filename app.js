const colores = document.querySelectorAll('.color');
const body = document.querySelector('body');
let inputRojo = document.getElementById('rojo');
let inputVerde = document.getElementById('verde');
let inputAzul = document.getElementById('azul');
// Con esto le agrego a rojo, verde y azul su value por defecto que está en HTML -> Ese será el color por defecto
let rojo = inputRojo.value, verde = inputVerde.value, azul = inputAzul.value; 

body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;

const obtenerDatosColor = (evento) => {
    const rangeSeleccionado = evento.target;
    const valorRangeColor = rangeSeleccionado.value;
    const nombreColor = rangeSeleccionado.id;
    cambiarColor(valorRangeColor, nombreColor);
}

const cambiarColor = (valorColor, nombreColor) => {

    if(nombreColor === 'rojo') {
        rojo = valorColor;
        const textoRojo = document.getElementById('texto-rojo');
        textoRojo.innerText = valorColor;
    } else if(nombreColor === 'verde') {
        verde = valorColor
        const textoVerde = document.getElementById('texto-verde');
        textoVerde.innerText = valorColor;
    } else {
        azul = valorColor;
        const textoAzul = document.getElementById('texto-azul');
        textoAzul.innerText = valorColor;
    }
    body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`
}

colores.forEach(color => color.addEventListener('change', obtenerDatosColor));