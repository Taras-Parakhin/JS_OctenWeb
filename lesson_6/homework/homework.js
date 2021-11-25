// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.length, 'lorem ipsum'.length, 'javascript is cool'.length);

// ===================================================

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

'hello world'.toUpperCase();
'lorem ipsum'.toUpperCase();
'javascript is cool'.toUpperCase();

// ===================================================

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

'HELLO WORLD'.toLowerCase(), 'LOREM IPSUM'.toLowerCase(), 'JAVASCRIPT IS COOL'.toLowerCase();

// ===================================================

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
str.trim();

// ===================================================

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

const stringToarray = str => str.split(' ');

// ===================================================

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

const delete_characters = (str, length) => str.slice(0, length);

// ===================================================

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// let str1 = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

const insert_dash = str => str.split(' ').join('-').toUpperCase();

// ===================================================

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

const strFirstChartDoUpperCase = s => {
    let str = '';

    str += s[0].toUpperCase();

    for (let i = 1; i < s.length; i++) {
        str += s[i];
    }

    return str;
};

// ===================================================

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

const capitalize = str => {
    const arr = str.split(' ');
    const result = [];

    for (let item of arr) {
        let s = '';
        s += item[0].toUpperCase();

        for (let i = 1; i < item.length; i++) {
            s += item[i];
        }
        result.push(s);
    }

    return result.join(' ');
};
