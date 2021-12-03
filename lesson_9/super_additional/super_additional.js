
let users = [
    {
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
    },

    {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
    },

    {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
    },

    {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
    },

    {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
    },

    {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
    },

    {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
    },

    {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
    },

    {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
    },

    {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
    },

    {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];


// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let arr = [];
for (const item of users) {
    arr.push(item.address);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement. Всі данні в одному блоці.
for (const item of users) {
    let divUser = document.createElement('div');
    let address = '';

    for (const key in item.address) {
        address += `${key}: ${item.address[key]} `;
    }

    divUser.innerHTML = `<h3>Name: ${item.name}</h3>
                        <h3>Age: ${item.age}</h3>
                        <h3>Status: ${item.status}</h3>
                        <p>${address}</p>`;

    document.body.appendChild(divUser);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
for (const item of users) {
    let divUser = document.createElement('div');

    let divName = document.createElement('div');
    divName.innerHTML = `<h3>Name: ${item.name}</h3>`;

    let divAge = document.createElement('div');
    divAge.innerHTML = `<h3>Age: ${item.age}</h3>`;

    let divStatus = document.createElement('div');
    divStatus.innerHTML = `<h3>Status: ${item.status}</h3>`;

    let divAddress = document.createElement('div');
    divAddress.innerHTML = `<p>city: ${item.address.city},
                            country: ${item.address.country},
                            street: ${item.address.street},
                            house number: ${item.address.houseNumber}</p>`;

    divUser.append(divName, divAge, divStatus, divAddress);
    document.body.appendChild(divUser);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
for (const item of users) {
    let divUser = document.createElement('div');
    document.body.appendChild(divUser);
    for (const key in item) {
        let divData = document.createElement('div');
        if (key !== 'address') {
            divData.innerText = `${item[key]}`;
            divUser.appendChild(divData);
        } else {
            let div = document.createElement('div');
            divUser.append(div);
            for (const elem in item.address) {
                let divElem = document.createElement('div');
                divElem.innerText = `${item.address[elem]}`;
                div.append(divElem);
            }
        }
    }
}

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
let content = document.getElementById('content');
function list(obj) {
    let ul = document.createElement('ul');
    content.append(ul);

    function gatherLi(obj) {
        if (obj.children.length) {
            console.log(obj.children)
            for (const item of obj.children) {
                console.log(item)
                if (item.localName === 'h2' && item.localName !== 'script') {
                    let li = document.createElement('li');
                    li.innerText = item.innerHTML;
                    ul.append(li)
                }
                gatherLi(item);
            }
        }
    }

    gatherLi(obj);

}

list(document.body);

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

let ul = document.createElement('ul');
document.body.insertBefore(ul, content);

rules.forEach(item => {
    let li = document.createElement('li');
    let title = document.createElement('div');
    title.innerHTML = `<h3>${item.title}</h3>`;
    let body = document.createElement('div');
    body.innerHTML = `<p>${item.body}`;
    li.append(title, body);
    ul.appendChild(li);
});