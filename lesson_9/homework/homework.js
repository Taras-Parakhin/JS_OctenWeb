// Все робити за допомоги js.
// - створити блок,
let div = document.createElement('div');

// - додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.cssText = 'background-color: silver; color: blue; font-size: 32px;';

// - додати цей блок в body.
document.body.append(div);

// - клонувати його повністю, та додати клон в body.
document.body.append(div.cloneNode(true));

// - Є масив:

let arr = ['Main','Products','About us','Contacts'];

// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let menu = document.getElementsByClassName('menu')[0];

for (let i = 0; i < arr.length; i++) {
    menu.append(document.createElement('li'));
    menu.getElementsByTagName('li')[i].innerText = `${arr[i]}`;
}

// - Є масив

let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const item of coursesAndDurationArray1) {
    let divArr1 = document.createElement('div');
    divArr1.innerText = `${item.title}, ${item.monthDuration}`;
    document.body.append(divArr1);
}


// - Є масив

let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


for (const elem of coursesAndDurationArray2) {
    let divArr2 = document.createElement('div');
    divArr2.classList.add('item');
    divArr2.innerHTML = `<h1 class="heading">${elem.title}</h1>
                        <p class="description">${elem.monthDuration}</p>`;
    document.body.append(divArr2);
}