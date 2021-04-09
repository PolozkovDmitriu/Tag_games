"use strict"

const numbersRandom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const numbers = [];
const button_p = [];


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

numbers.forEach((number, index) => {
	button_p.push(createButton(parent, number, index));
});

let whiteKey = button_p[15];
whiteKey.classList.add('white-key');

function createButton(parent, number, index) {
	const div = document.createElement("div");
	parent.appendChild(div);
	div.classList.add('keys-ops');

	div.addEventListener("click", (event) => {
		onButtonClick(event, index);
	});

	const p = document.createElement("p");
	p.classList.add('keys-p');
	div.appendChild(p);

	p.innerText = number;

	return (p, div);
}

function onButtonClick(event, index) {

	let replaceIndex = null;

	if (numbers[index - 1] == null) {
		replaceIndex = index - 1;
	}

	if (numbers[index + 1] == null) {
		replaceIndex = index + 1;
	}

	if (numbers[index - 4] == null) {
		replaceIndex = index - 4;
	}

	if (numbers[index + 4] == null) {
		replaceIndex = index + 4;
	}
	//============================================================
	if (replaceIndex != (null || undefined)) {

		let temp = numbers[replaceIndex];//num

		let textRemOffClic = button_p[index];//but
		textRemOffClic.classList.add('white-key');
		textRemOffClic.innerText = numbers[replaceIndex];//but

		numbers[replaceIndex] = numbers[index];//num

		let textRemOnClic = button_p[replaceIndex];//but
		textRemOnClic.innerText = numbers[index];//but
		textRemOnClic.classList.remove('white-key');

		numbers[index] = temp;//num

	}

}
