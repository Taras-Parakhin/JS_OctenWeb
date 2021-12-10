
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

document.onclick = function (e) {
    let x = e.clientX;
    let y = e.clientY;
    let tegName = document.elementFromPoint(x, y).localName;
    let classList = document.elementFromPoint(x, y).classList;
    let list = '';
    for (const item of classList) {
        list += item + ' ';
    }
    let id = document.elementFromPoint(x, y).id;
    let height = document.elementFromPoint(x, y).clientHeight;
    let width = document.elementFromPoint(x, y).clientWidth;
    console.log(`teg: ${tegName}; class: ${list}; id: ${id}; size: ${height}x${width}`);
};

// =========================================================================================

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

let div = document.createElement('div');
document.addEventListener('click', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    let tegName = document.elementFromPoint(x, y).localName;
    let classList = document.elementFromPoint(x, y).classList;
    let list = ''.trim();
    for (const item of classList) {
        list += ' ' + item;
    }
    let id = document.elementFromPoint(x, y).id;
    let height = document.elementFromPoint(x, y).clientHeight;
    let width = document.elementFromPoint(x, y).clientWidth;
    div.innerHTML = `<div>teg: ${tegName}</div><div>class:${list}</div><div>id: ${id}</div><div>size: ${height}x${width}</div>`;
    div.style.cssText = `position: fixed; top: ${y}px; left: ${x}px; background: white; padding: 10px`;
    document.body.append(div);
});

document.addEventListener('click', (e) => {
    div.hidden = false;
});

// =========================================================================================

// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ


let inputStatus = document.createElement('input');

inputStatus.setAttribute('type', 'checkbox');
inputStatus.setAttribute('name', 'status');
inputStatus.setAttribute('value', '0');
inputStatus.style.cssText = 'width: 50px; height: 50px; margin: 50px';

let inputAge = document.createElement('input');
inputAge.setAttribute('type', 'checkbox');
inputAge.setAttribute('name', 'age');
inputAge.setAttribute('value', '0');
inputAge.style.cssText = 'width: 50px; height: 50px; margin: 50px';

let inputCity = document.createElement('input');
inputCity.setAttribute('type', 'checkbox');
inputCity.setAttribute('name', 'city');
inputCity.setAttribute('value', '0');
inputCity.style.cssText = 'width: 50px; height: 50px; margin: 50px';

document.body.append(inputStatus, inputAge, inputCity);

let divUsers = document.createElement('div');
divUsers.style.cssText = 'padding: 50px; font-size: 24px';
document.body.append(divUsers);

let divWrapUsers = document.createElement('div');
divUsers.append(divWrapUsers);

usersWithAddress.forEach(item => {
    let div = document.createElement('div');

    div.innerHTML = `${item.id} ${item.name} ${item.age} ${item.status} ${item.address.city} ${item.address.street} ${item.address.number}`;
    divWrapUsers.append(div);
});

function check() {
    if (divUsers.children.length) {
        divUsers.firstChild.remove();
    }

    let divWrapUsers = document.createElement('div');
    divUsers.append(divWrapUsers);

    if (inputStatus.value === '1' && inputAge.value === '0' && inputCity.value === '0') {
        usersWithAddress.filter(item => {
            if (item.status === false) {
                let div = document.createElement('div');

                div.innerHTML = `${item.id} ${item.name} ${item.age} ${item.status} ${item.address.city} ${item.address.street} ${item.address.number}`;
                divWrapUsers.append(div);
            }
        });

    } else if (inputStatus.value === '0' && inputAge.value === '1' && inputCity.value === '0') {
        usersWithAddress.filter(item => {
            if (item.age > 29) {
                let div = document.createElement('div');

                div.innerHTML = `${item.id} ${item.name} ${item.age} ${item.status} ${item.address.city} ${item.address.street} ${item.address.number}`;
                divWrapUsers.append(div);
            }
        });

    } else if (inputStatus.value === '0' && inputAge.value === '0' && inputCity.value === '1') {
        usersWithAddress.filter(item => {
            if (item.address.city === 'Kyiv') {
                let div = document.createElement('div');

                div.innerHTML = `${item.id} ${item.name} ${item.age} ${item.status} ${item.address.city} ${item.address.street} ${item.address.number}`;
                divWrapUsers.append(div);
            }
        });

    } else if (inputStatus.value === '1' && inputAge.value === '1' && inputCity.value === '0') {
        usersWithAddress.filter(item => {
            if (item.status === false && item.age > 29) {
                let div = document.createElement('div');

                div.innerHTML = `${item.id} ${item.name} ${item.age} ${item.status} ${item.address.city} ${item.address.street} ${item.address.number}`;
                divWrapUsers.append(div);
            }
        });

    } else if (inputStatus.value === '1' && inputAge.value === '0' && inputCity.value === '1') {
        usersWithAddress.filter(item => {
            if (item.status === false && item.address.city === 'Kyiv') {
                let div = document.createElement('div');

                div.innerHTML = `${item.id} ${item.name} ${item.age} ${item.status} ${item.address.city} ${item.address.street} ${item.address.number}`;
                divWrapUsers.append(div);
            }
        });

    } else if (inputStatus.value === '0' && inputAge.value === '1' && inputCity.value === '1') {
        usersWithAddress.filter(item => {
            if (item.age > 29 && item.address.city === 'Kyiv') {
                let div = document.createElement('div');

                div.innerHTML = `${item.id} ${item.name} ${item.age} ${item.status} ${item.address.city} ${item.address.street} ${item.address.number}`;
                divWrapUsers.append(div);
            }
        });

    } else if (inputStatus.value === '1' && inputAge.value === '1' && inputCity.value === '1') {
        usersWithAddress.filter(item => {
            if (item.status === false && item.age > 29 && item.address.city === 'Kyiv') {
                let div = document.createElement('div');

                div.innerHTML = `${item.id} ${item.name} ${item.age} ${item.status} ${item.address.city} ${item.address.street} ${item.address.number}`;
                divWrapUsers.append(div);
            }
        });

    } else {
        usersWithAddress.forEach(item => {
            let div = document.createElement('div');

            div.innerHTML = `${item.id} ${item.name} ${item.age} ${item.status} ${item.address.city} ${item.address.street} ${item.address.number}`;
            divWrapUsers.append(div);
        });
    }
}


inputStatus.onclick = function () {
    if (this.value === '0') {
        this.value = '1';
    } else {
        this.value = '0';
    }
    check();
};

inputAge.onclick = function () {
    if (this.value === '0') {
        this.value = '1';
    } else {
        this.value = '0';
    }
    check();
};

inputCity.onclick = function () {
    if (this.value === '0') {
        this.value = '1';
    } else {
        this.value = '0';
    }
    check();
};

// ==================================================================================

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

// let obj = document.getElementsByClassName('promo');
// let btn = document.createElement('button');
// btn.innerText = 'Вперед';
// btn.style.fontSize = '24px'
// document.body.append(btn);


// =====================================================================================

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let left = document.getElementsByClassName('btn-left')[0];
let right = document.getElementsByClassName('btn-right')[0];
let carousel = document.getElementsByClassName('carousel')[0];
let images = document.getElementsByClassName('carousel_img');

let count = 0;

right.addEventListener('click', () => {
    if (count >= images.length - 1) {
        count = -1;
    }
    count++;
    carousel.style.transform = `translateX(${-500 * count}px`;
});

left.addEventListener('click', () => {
    if (count <= 0) {
        count = images.length;
    }
    count--;
    carousel.style.transform = `translateX(${-500 * count}px`;
});

// ==================================================================================

//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

document.onmousemove = () => {
    let text = document.getSelection().getRangeAt(0);
    let selectionText = text.extractContents();
    let span = document.createElement("span");
    span.style.fontFamily = 'cursive';
    span.appendChild(selectionText);
    text.insertNode(span);
};

