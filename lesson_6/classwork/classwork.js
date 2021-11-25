// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


const normalize = n => {
    let abc = 'abcdefghijklmnoprstuvwxyz';
    let fullname = '';

    for (let i = 0; i < n.length; i++) {
        if (abc.includes(n[i]) || abc.toUpperCase().includes(n[i])) {
            fullname += n[i];
        } else if (!abc.includes(n[i]) && abc.toUpperCase().includes(n[i + 1])) {
            fullname += ' ';
        }
    }

    return fullname;
};

// ==========================================================

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

const generateArr = () => {
    const arr = [];

    for (let i = 0; i < 10; i++) {
        arr.push(Math.round(Math.random() * 100));
    }

    return arr;
};

// ===========================================================

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

const sortArr = generateArr().sort((a, b) => a - b);

// ===========================================================

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

const filterArr = generateArr().filter(item => item % 2 === 0);

// ===========================================================

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

const mapArr = generateArr().map(item => item + '');

// ===========================================================

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

const sortNums = (direction, arr) => {
    if (direction === 'ascending') {
        return arr.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return arr.sort((a, b) => b - a);
    } else {
        return 0;
    }
};

// ==========================================================

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
const sortMonthDuration = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const filterMonthDuration = coursesAndDurationArray.filter((item) => item.monthDuration > 5);

// ==========================================================

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

const cutString = (str, n) => {
    const arr = [];

    for (let i = 0; i < str.length; i += n) {
        arr.push(str.slice(i, i + n));
    }

    return arr;
}

document.write(cutString('наслаждение',3));