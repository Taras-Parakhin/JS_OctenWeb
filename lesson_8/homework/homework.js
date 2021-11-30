
// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// -- отримує текст з параграфа з id "content"
const text1 = document.getElementById('content');

// -- отримує текст з блоку з id "rules"
const text2 = document.getElementById('rules');

// -- замініть текст параграфа з id 'content' на будь-який інший
text1.innerText = 'qwert';

// -- замініть текст параграфа з id 'rules' на будь-який інший
text2.innerText = 'asdf';

// -- змініть кожному елементу колір фону на червоний
const bg = document.body.getElementsByTagName('*');
for (const item of bg) {
        item.style.backgroundColor = 'red';
}
// -- змініть кожному елементу колір тексту на синій
for (const item of bg) {
    item.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(text2.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
const list = document.getElementsByClassName('fc_rules');
for (const item of list) {
    item.style.color = 'red';
}