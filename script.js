// Obtener elementos del DOM
let inputNumber = document.querySelector('#numeroEntrada');
let message = document.querySelector('#mensaje');
let button = document.querySelector('#button');
let hearts = document.querySelectorAll('.icon-tabler-heart');
let replay = document.querySelector('.replay');

// Generar un numero aleatorio
let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

// Función para comprobar el número ingresado
function chequearResultado() {
	const enteredNumber = parseInt(document.querySelector('#numeroEntrada').value);
	let found = false;

	if (enteredNumber > 100 || enteredNumber < 1) {
		inputNumber.value = '';
		setTimeout(function () {
			message.style.color = 'var(--red)';
			message.innerHTML = `¡Valor invalido!`;
			message.style.opacity = 1;
		}, 100);
		return false;
	} else {
		if (enteredNumber === randomNumber) {
			message.style.color = 'var(--green)';
			message.innerHTML = `¡Correcto! El numero es <span>${enteredNumber}</span>`;
			message.style.opacity = 1;
			setTimeout(() => {
				replay.style.visibility = 'visible';
				replay.style.opacity = 1;
			}, 1000);

			return true;
		} else if (enteredNumber < randomNumber) {
			message.style.color = 'var(--red)';
			message.innerHTML = `¡Incorrecto! El numero es <span>mayor</span>`;
			message.style.opacity = 1;

			return false;
		} else {
			message.style.color = 'var(--red)';
			message.innerHTML = `¡Incorrecto! El numero es <span>menor</span>`;
			message.style.opacity = 1;
			return false;
		}
	}
}

// Sistema de vida
let heartCount = hearts.length;

document.addEventListener('DOMContentLoaded', () => {
	button.addEventListener('click', () => {
		if (!chequearResultado()) {
			heartCount--;
			hearts[heartCount].style.fill = 'grey';
		}

		if (heartCount === 0) {
			setTimeout(() => {
				replay.style.visibility = 'visible';
				replay.style.opacity = 1;
			}, 1000);
		}
	});
});

// Jugar de nuevo

replay.addEventListener('click', () => {
	location.reload();
});
