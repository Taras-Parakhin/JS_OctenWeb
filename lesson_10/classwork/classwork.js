// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let f1 = document.forms.f1;
let f2 = document.forms.f2;
let btn = document.getElementsByClassName('btn')[0];
btn.onclick = function () {
    console.log(f1.user.value, f1.age.value);
    console.log(f2.user.value, f2.age.value);
};

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let input1 = document.createElement('input');
let input2 = document.createElement('input');
let input3 = document.createElement('input');

let btn1 = document.createElement('button');
btn1.innerHTML = 'button';
document.body.append(input1, input2, input3, btn1);


btn1.onclick = function () {
    let tr = input1.value;
    let td = input2.value;
    let text = input3.value;

    let table = document.createElement('table');
    document.body.append(table);

    function tab(tr, td, text) {
        for (let i = 0; i < tr; i++) {
            let tr = document.createElement('tr');
            table.append(tr);
            for (let j = 0; j < td; j++) {
                let td = document.createElement('td');
                td.style.border = '1px solid black';
                td.innerText = `${text}`;
                tr.append(td);
            }
        }
    }
    tab(tr, td, text);
};



// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let words = ['ass', 'bullshit', 'shit'];

let inp = document.createElement('input');
let check = document.createElement('button');
check.innerText = 'check';
document.body.append(inp, check);

check.onclick = function () {
    let word = inp.value;

    for (const item of words) {
        if (item === word) {
            alert('what the fuck you input');
            inp.value = '';
            break;
        }
    }
};



// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let inp1 = document.createElement('input');
inp1.setAttribute('type', 'text');
let check1 = document.createElement('button');
check1.innerText = 'check';
document.body.append(inp1, check1);

check1.onclick = function () {
    let text = inp1.value.split(' ');

    for (const item of words) {
        for (const elem of text) {
            if (item === elem) {
                alert('what the fuck you input');
                inp1.value = '';
                break;
            }
        }
    }
};