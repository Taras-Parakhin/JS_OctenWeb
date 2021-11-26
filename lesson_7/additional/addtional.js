//
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }

class Geo {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}

class Address {
    constructor(street, suit, city, zipcode, geo) {
        this.street = street;
        this.suit = suit;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}

class Company {
    constructor(name, catchPhrase, bs) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}

class User {
    constructor(id, name, username, email, address, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}

new User (1, 'vasia', 'vas', 'vas@mail.com', new Address('highway.str', 67, 'Lviv', 234, new Geo(2343, 234243)), 23-42-34-53, 'www.werwer.com', new Company('okten', 'web', 234));

// =============================================================================

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// - назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class Attribute {
    constructor(name, descr) {
        this.name = name;
        this.descr = descr;
    }
}

class Teg {
    constructor(name, descr, attributes) {
        this.name = name;
        this.descr = descr;
        this.attributes = attributes;
    }
}

const attrA = new Teg('a', 'предназначен для создания ссылок', [new Attribute('href', 'Задает адрес документа, на который следует перейти'), new Attribute('target', 'Имя окна или фрейма, куда браузер будет загружать документ')]);

const attrDiv = new Teg('div', 'предназначен для выделения фрагмента документа с целью изменения вида содержимого', [new Attribute('align', 'Задает выравнивание содержимого тега'), new Attribute('title', 'Добавляет всплывающую подсказку к содержимому')]);

const attrH1 = new Teg('h1', 'представляет собой наиболее важный заголовок первого уровня', [new Attribute('align', 'Определяет выравнивание заголовка'), new Attribute('title', 'Описывает содержимое элемента в виде всплывающей подсказки')]);

const attrSpan = new Teg('span', 'предназначен для определения строчных элементов документа', [new Attribute('style', 'Применяется для определения стиля элемента с помощью правил CSS'), new Attribute('lang', 'Браузер использует значение параметра для правильного отображения некоторых национальных символов')]);

const attrInput = new Teg('input', 'предназначен для создания текстовых полей', [new Attribute('checked', 'Предварительно активированный переключатель или флажок'), new Attribute('form', 'Связывает поле с формой по её идентификатору')]);

const attrForm = new Teg('form', 'предназначен для обмена данными между пользователем и сервером', [new Attribute('action', 'Адрес программы или документа, который обрабатывает данные формы'), new Attribute('name', 'Имя формы')]);

const attrOption = new Teg('option', 'определяет отдельные пункты списка', [new Attribute('label', 'Указание метки пункта списка'), new Attribute('value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов')]);

const attrSelect = new Teg('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка', [new Attribute('accesskey', 'Позволяет перейти к списку с помощью некоторого сочетания клавиш'), new Attribute('disabled', 'Блокирует доступ и изменение элемента')]);
