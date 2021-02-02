


let Key = document.getElementById('Keys').childNodes;
// С помощью let Key = document.getElementById('Keys').childNodes.length;
// отфильтровать блоки с текстом через цикл for
// Полученным div применить класс css


for (i = 0; i < 32; i++) {
	if (i % Key.length === 0) {
		//Применить Key.length[n]; Стиль css .keys-ops
	}
	if (i % Key.length !== 0) {
		//Добовить тег <p>N</p> 
	}
}




//РАсскидать блоки по полю 

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
let key0 = document.getElementById('key0');


//Сделать блоки кликабельными 

let BLANK = [
	[key1, key2, key3, key4],
	[key5, key6, key7, key8],
	[key9, key10, key11, key12],
	[key13, key14, key15, key0]
];



//children – коллекция детей, которые являются элементами.
//firstElementChild, lastElementChild – первый и последний дочерний элемент.
//previousElementSibling, nextElementSibling – соседи-элементы.
//parentElement – родитель-элемент.
//alert(document.body.childNodes.filter); // undefined (у коллекции нет метода filter!)


//querySelector	CSS-selector	✔	-
//querySelectorAll	CSS-selector	✔	-
//getElementById	id	-	-
//getElementsByName	name	-	✔
//getElementsByTagName	tag or '*'	✔	✔
//getElementsByClassName	class	✔	✔


