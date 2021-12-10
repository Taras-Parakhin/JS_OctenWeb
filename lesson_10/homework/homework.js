
// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let elem = document.getElementById('text');
let btn1 = document.getElementsByClassName('btn1')[0];
btn1.onclick = function () {
    elem.hidden = true;
}

    // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btn2 = document.getElementsByClassName('btn2')[0];
btn2.onclick = function () {
    btn2.style.display = 'none';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let btn3 = document.getElementsByClassName('btn3')[0];
btn3.onclick = function () {
    let age = document.getElementById('age').value;

    if (!age) {
        alert('введи свій вік');
    } else if (age < 18) {
        alert('недоріс, гімнюку');
    } else {
        alert('заходь');
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.getElementsByClassName('menu')[0];
menu.onclick = function () {
    let ul = document.getElementsByTagName('ul')[0];
    ul.classList.toggle('hide');
};

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let list = [
    {title: 'lorem one', body: 'lorem ipsum dolo sit ameti lorem ipsum dolo sit ameti one'},
    {title: 'lorem two', body: 'lorem ipsum dolo sit ameti lorem ipsum dolo sit ameti two'},
    {title: 'lorem three', body: 'lorem ipsum dolo sit ameti lorem ipsum dolo sit ameti three'},
    {title: 'lorem four', body: 'lorem ipsum dolo sit ameti lorem ipsum dolo sit ameti four'},
    {title: 'lorem five', body: 'lorem ipsum dolo sit ameti lorem ipsum dolo sit ameti five'}
];

let div = document.createElement('div');
document.body.append(div);

for (const item of list) {
    let divItem = document.createElement('div');
    let btn = document.createElement('button');
    btn.classList.add('btn4');
    divItem.innerHTML = `<h1>${item.title}</h1><p>${item.body}</p>`;
    btn.innerText = 'push';
    divItem.append(btn);
    div.append(divItem);
}

let btn4 = document.getElementsByClassName('btn4');
for (const item of btn4) {
    item.onclick = function () {
        item.previousElementSibling.classList.toggle('hide')
    };
}