
let key1 = document.getElementById('key1');
let key2 = document.getElementById('key2');
let key3 = document.getElementById('key3');
let key4 = document.getElementById('key4');
let key5 = document.getElementById('key5');
let key6 = document.getElementById('key6');
let key7 = document.getElementById('key7');
let key8 = document.getElementById('key8');
let key9 = document.getElementById('key9');
let key10 = document.getElementById('key10');
let key11 = document.getElementById('key11');
let key12 = document.getElementById('key12');
let key13 = document.getElementById('key13');
let key14 = document.getElementById('key14');
let key15 = document.getElementById('key15');
let key0 = document.getElementById('key0');


key1.className = 'keys-ops';
key2.className = 'keys-ops';
key3.className = 'keys-ops';
key4.className = 'keys-ops';
key5.className = 'keys-ops';
key6.className = 'keys-ops';
key7.className = 'keys-ops';
key8.className = 'keys-ops';
key9.className = 'keys-ops';
key10.className = 'keys-ops';
key11.className = 'keys-ops';
key12.className = 'keys-ops';
key13.className = 'keys-ops';
key14.className = 'keys-ops';
key15.className = 'keys-ops';
key0.className = 'white-key';

let key1p = document.getElementById('key-1-p');
let key2p = document.getElementById('key-2-p');
let key3p = document.getElementById('key-3-p');
let key4p = document.getElementById('key-4-p');
let key5p = document.getElementById('key-5-p');
let key6p = document.getElementById('key-6-p');
let key7p = document.getElementById('key-7-p');
let key8p = document.getElementById('key-8-p');
let key9p = document.getElementById('key-9-p');
let key10p = document.getElementById('key-10-p');
let key11p = document.getElementById('key-11-p');
let key12p = document.getElementById('key-12-p');
let key13p = document.getElementById('key-13-p');
let key14p = document.getElementById('key-14-p');
let key15p = document.getElementById('key-15-p');
let key0p = document.getElementById('key-0-p');

key1p.className = 'keys-p';
key2p.className = 'keys-p';
key3p.className = 'keys-p';
key4p.className = 'keys-p';
key5p.className = 'keys-p';
key6p.className = 'keys-p';
key7p.className = 'keys-p';
key8p.className = 'keys-p';
key9p.className = 'keys-p';
key10p.className = 'keys-p';
key11p.className = 'keys-p';
key12p.className = 'keys-p';
key13p.className = 'keys-p';
key14p.className = 'keys-p';
key15p.className = 'keys-p';
key0p.className = 'keys-p';

TestOne = function () {

}
// 1 Сделать случайное выпадение чисел на поле
// 2 Создать функцию которая при клике:
// 2.1 Меняет число с Белым блоком
// 2.2 Меняет Цвет с белым блоком
// 3 Усключить клики по блокам не имеющим право меняться с белым блоком
// https://www.youtube.com/watch?v=lvsUEL8yqSs
// Подумать на счет невидимости https://www.cyberforum.ru/javascript/thread630123.html


//RandomNumbers



key12.onclick = function () {
	//Сначала удали прежний класс
	key12p.className = 'white-key';
	key0p.innerHTML = '12';
	key0p.className = 'keys-ops keys-p';
}
//Сделать блоки кликабельными 

let BLANK = [
	[key1, key2, key3, key4],
	[key5, key6, key7, key8],
	[key9, key10, key11, key12],
	[key13, key14, key15, key0]
];


let BLANK_P = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16]
];



function RandomNambers() {
	nam_a = JSON.stringify();
	nam_b = JSON.stringify();
	for (let i = 0; i < BLANK_P.length; i++) {
		for (let j = 0; j < BLANK_P[i].length; j++) {

			num = Math.floor(1 + Math.random() * (16 - 1));
			BLANK_P[i][j] = num;

		}
	}


	for (let a = 0; a < BLANK_P.length; a++) {
		if (a == 0) {
			for (d = 0; d < BLANK_P.length; d++) {
				for (s = 0; s < BLANK_P.length; s++) {
					num = Math.floor(1 + Math.random() * (16 - 1));
					if ((BLANK_P[a][d] == BLANK_P[d][s]) && (BLANK_P[a][d] !== num)) {
						BLANK_P[d][s] = num;
					}
				}
			}
		}
	}
	console.log(BLANK_P);
}


RandomNambers();


//цикл 
//Усовие при нажатии на BLANK[4][3](key12) удалить key12 и запонить его kye0 
//С Взаимной заменой их свойств  

