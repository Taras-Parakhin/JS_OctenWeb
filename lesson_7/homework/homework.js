
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}

const arr = [
    new User(1, 'vasia', 'pupkin', 'vp@mail.com', 24543646),
    new User(2, 'petia', 'ivanov', 'pi@mail.com', 98743589),
    new User(3, 'olia', 'petrova', 'op@mail.com', 98743598),
    new User(4, 'oleg', 'limonov', 'ol@mail.com', 98734557),
    new User(5, 'valia', 'voronova', 'vv@mail.com', 98734504),
    new User(6, 'sasha', 'volkov', 'sv@mail.com', 34598745),
    new User(7, 'ivan', 'fedorov', 'if@mail.com', 98435445),
    new User(8, 'vera', 'medvedeva', 'vm@mail.com', 97434756),
    new User(9, 'vitia', 'kovalev', 'vk@mail.com', 97345678),
    new User(10, 'sveta', 'bela', 'sb@mail.com', 45682340)
];

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const filterArr = arr.filter(item => item.id % 2 === 0);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sortArr = arr.sort((a, b) => a.id - b.id);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client extends User {
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;
    }
}

// const client = [
//     new Client(1, 'vasia', 'pupkin', 'vp@mail.com', 24543646, ['abrikos', 'banan', 'tomato']),
//     new Client(2, 'petia', 'ivanov', 'pi@mail.com', 98743589, ['caherry', 'watermello']),
//     new Client(3, 'olia', 'petrova', 'op@mail.com', 98743598, ['potato', 'strawberry', 'apple', 'fish']),
//     new Client(4, 'oleg', 'limonov', 'ol@mail.com', 98734557, ['meat']),
//     new Client(5, 'valia', 'voronova', 'vv@mail.com', 98734504, ['milk', 'water', 'ice-cream', 'nuts', 'mello']),
//     new Client(6, 'sasha', 'volkov', 'sv@mail.com', 34598745, ['oranges', 'kendy']),
//     new Client(7, 'ivan', 'fedorov', 'if@mail.com', 98435445, ['chocolate', 'onion', 'garlic']),
//     new Client(8, 'vera', 'medvedeva', 'vm@mail.com', 97434756, ['banan', 'potato', 'pizza']),
//     new Client(9, 'vitia', 'kovalev', 'vk@mail.com', 97345678, ['mushroom', 'salt']),
//     new Client(10, 'sveta', 'bela', 'sb@mail.com', 45682340, ['oil', 'bread', 'butter', 'carrot', 'tea'])
// ];


const products = [
    ['abrikos', 'banan', 'tomato'],
    ['caherry', 'watermello'],
    ['potato', 'strawberry', 'apple', 'fish'],
    ['meat'],
    ['milk', 'water', 'ice-cream', 'nuts', 'mello'],
    ['oranges', 'kendy'],
    ['chocolate', 'onion', 'garlic'],
    ['banan', 'potato', 'pizza'],
    ['mushroom', 'salt'],
    ['oil', 'bread', 'butter', 'carrot', 'tea']
];

const client = arr.map((item, i) => {
    item.order = products[i];
    return item;
});

console.log(client);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const sortClient = client.sort((a, b) => a.order.length - b.order.length);
console.log(sortClient);
