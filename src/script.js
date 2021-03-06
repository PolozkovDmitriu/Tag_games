"use strict"

const numbersRandom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let numbers = [];
const button_p = [];



// random reference
for (let i = 0; (i < 16) && (i < numbersRandom.length); i++) {
	let r = Math.floor(Math.random() * (numbersRandom.length - i)) + i;
	let numbersTemporary = numbersRandom[r];
	numbersRandom[r] = numbersRandom[i];
	numbersRandom[i] = numbersTemporary;
	numbers.unshift(numbersTemporary);

	const key16 = null;

	if (i == 14) {
		numbers.push(key16);
	}
}

const parent = document.getElementById('keys');
const parentStep = document.getElementById('stepText');

numbers.forEach((number, index) => {
	button_p.push(createButton(parent, number, index));
});

//reference
let whiteKey = button_p[15];
whiteKey.classList.add('white-key');

function createButton(parent, number, index) {

	const div = document.createElement("div");
	parent.appendChild(div);
	div.classList.add('keys-ops');


	div.addEventListener("click", (event) => {
		onButtonClick(event, index);
		numberStep(event, index);
	});



	const p = document.createElement("p");
	p.classList.add('keys-p');
	div.appendChild(p);

	p.innerText = number;


	return (p, div);
}


let UndoStek = [];

function onButtonClick(event, index) {

	const undoBut = document.getElementById('undo');

	undoBut.addEventListener("click", (event) => {
		numbers = UndoStek[UndoStek.length - 1];
		onButtonClick(event, index);
	});


	let replaceIndex = null;

	if (!startTimer) {
		startTimers();
	}

	if (numbers[index - 1] === null) {//right
		replaceIndex = index - 1;
		stepNumber.push(++step);
	}
	if (numbers[index + 1] === null) {//left
		replaceIndex = index + 1;
		stepNumber.push(++step);
	}
	if (numbers[index - 4] === null) {//down
		replaceIndex = index - 4;
		stepNumber.push(++step);
	}
	if (numbers[index + 4] === null) {//up
		replaceIndex = index + 4;
		stepNumber.push(++step);
	}


	//============================================================
	if (replaceIndex != (null || undefined)) {

		let temp = numbers[replaceIndex];//num

		let textRemOffClic = button_p[index];//but
		textRemOffClic.classList.add('white-key');//style
		textRemOffClic.innerText = numbers[replaceIndex];//but

		numbers[replaceIndex] = numbers[index];//num

		let textRemOnClic = button_p[replaceIndex];//but
		textRemOnClic.innerText = numbers[index];//but
		textRemOnClic.classList.remove('white-key');//style

		numbers[index] = temp;//num
	}


	UndoStek[stepNumber.length] = numbers.slice();

}

//step and wath

let stepNumber = [0];
let step = stepNumber[0];

const stepText = document.createElement("p");
stepText.innerText = "0";
parentStep.appendChild(stepText);


function numberStep(index) {

	for (let i = -1; i < stepNumber.length; i++) {
		stepText.innerText = stepNumber[i];
	}
}

let time = 0;
const times = document.getElementById('times');


let startTimer = false;

function startTimers() {
	startTimer = true;
	setInterval(updateCountUp, 1000);
}

function updateCountUp() {
	let minutes = Math.floor(time / 60);
	minutes = minutes < 10 ? "0" + minutes : minutes;

	let seconds = time % 60;
	seconds = seconds < 10 ? "0" + seconds : seconds;

	times.innerHTML = `${minutes}:${seconds}`;
	time++;
}

//form

const reset = document.getElementById('reset');//reset

reset.addEventListener("click", () => {
	location.reload();
})


