"use strict"

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
key0.className = 'white-key , keys-ops';

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



//RandomNumbers


//Сделать блоки кликабельными 

let BLANK = [
	[key1, key2, key3, key4],
	[key5, key6, key7, key8],
	[key9, key10, key11, key12],
	[key13, key14, key15, null]
];



//BLANK[i][j-1] == null || BLANK[i][j+1] == null || BLANK[i-1][j]= null

let selectedDiv;

let Keys = document.getElementById('Keys');

let target;

Keys.onclick = function clk(event) {
	let target = event.target.closest('div');

	if (!'div') return;

	perebor(target);

	/* 	prisvoenie(target); */

};

function perebor(target) {
	for (let i = 0; i < BLANK.length; i++) {

		for (let j = 0; j < BLANK.length; j++) {

			if (BLANK[i][j] == target) {

				if (
					(BLANK[i][j - 1] == null && !undefined)
					|| (BLANK[i][j + 1] == null && !undefined)
					|| (BLANK[i - 1][j] == null && !undefined)
					|| (BLANK[i + 1][j] == null && !undefined)) {

					onHighlight(target);

				}
			}
		}
	}
}

/* function prisvoenie(target) {
	for (let i = 0; i < BLANK.length; i++) {

		for (let j = 0; j < BLANK.length; j++) {

			let rem = BLANK[i][j];
			if (!target == rem) {
				rem.classList.add('keys-ops');
			}
		}
	}
} */

function onHighlight(div) {

	selectedDiv = div;
	selectedDiv.classList.add('white-key');


}





