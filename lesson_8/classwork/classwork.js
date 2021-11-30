// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
const h1 = document.getElementsByTagName('h1');
h1[0].removeAttribute('id');
h1[0].classList.add('sep-2021');
console.log(document.body)

// b) робить шириниу елементу ul 400px
const ul = document.getElementsByTagName('ul');
ul[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
const link = document.getElementsByClassName('linkList');
for (const item of link) {
    item.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
const textElem = document.getElementsByClassName('listElement2');
textElem[0].innerHTML;

// e) отримує всі елементи li та змінює ім колір фону на сірий
const li = document.getElementsByTagName('li');
for (const item of li) {
    item.style.backgroundColor = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
const a = document.getElementsByTagName('a');
for (const item of a) {
    item.classList.add('anchor');
}
console.log(a[0].classList)
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const item of a) {
    if (item.innerText === 'link3') {
        item.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const item of a) {
    item.classList.add(`element_${item.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
const subHeader = document.getElementsByClassName('sub-header');
let bgColor = prompt('input bg-color');
for (const item of subHeader) {
    item.style.backgroundColor = bgColor;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let color = prompt('input text-color');
for (const item of subHeader) {
    if (item.innerText === 'content 2 segment') {
        item.style.color = color;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
const elem = document.getElementsByClassName('content_1');
let text = prompt('input text');
for (const item of elem) {
    item.innerText = text;
}

// l) отримати елементи p та змінити їм padding на 20px
const p = document.getElementsByTagName('p');
for (const item of p) {
    item.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
const elem1 = document.getElementsByClassName('text2');
for (const item of elem1) {
    item.innerText = 'sep-2021';
}