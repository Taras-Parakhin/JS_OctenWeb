// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

users.forEach(item => {
    let div = document.createElement('div');
    div.innerHTML = `${item.name} ${item.age} ${item.status}`;
    div.style.cssText = 'display: flex; column-gap: 20px; padding: 50px; font-size: 24px';
    let btn = document.createElement('button');
    btn.innerText = 'add favorite';
    btn.style.fontSize = '24px';
    document.body.append(div, btn);
    btn.onclick = function () {
        let favUsers = JSON.parse(localStorage.getItem('favUsers')) || [];
        favUsers.push(item);
        localStorage.setItem('favUsers', JSON.stringify(favUsers));
    };
});
