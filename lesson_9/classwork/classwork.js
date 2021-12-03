// - є масив

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

// Проітерувати його, створиши для кожного елементу масиву <div class='member'>.


// - взяти попередній масив з сімпсонами.
//     Проітерувати його, створиши для кожного елементу масиву <div class='member'>. Для кожної властивості елементу створити окремий блок, та помістити його у div.member
let divSimpsons = document.createElement('div');
document.body.appendChild(divSimpsons);
divSimpsons.style.cssText = 'display: flex; column-gap: 20px';

for (const item of simpsons) {
    let divSimpson = document.createElement('div');
    divSimpson.classList.add('member');

    let divFullName = document.createElement('div');

    let divName = document.createElement('div');
    divName.innerText = `${item.name}`;

    let divSurname = document.createElement('div');
    divSurname.innerText = `${item.surname}`;

    divFullName.append(divName, divSurname);

    let divAge = document.createElement('div');
    divAge.innerText = `Age: ${item.age}`;

    let divInfo = document.createElement('div');
    divInfo.innerText = `${item.info}`;

    let divPhoto = document.createElement('div');
    divPhoto.innerHTML = `<img src="${item.photo}" alt="photo">`;

    divSimpson.append(divFullName, divAge, divInfo, divPhoto);
    divSimpsons.appendChild(divSimpson);

    divFullName.style.cssText = 'display: flex; column-gap: 10px';
}

let member = document.getElementsByClassName('member');
for (const item of member) {
    item.style.cssText = 'display: flex; ' +
        'flex-direction: column; ' +
        'align-items: center;';
}


// - Є масив

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
let divBox = document.createElement('div');
document.body.appendChild(divBox);
divBox.style.cssText = 'display: flex; flex-wrap: wrap; gap: 10px';

for (const item of coursesArray) {
    let divCourse = document.createElement('div');

    let h1Title = document.createElement('h1');
    h1Title.innerText = `${item.title}`;

    let divWrap = document.createElement('div');
    let divMonthDuration = document.createElement('div');
    divMonthDuration.innerText = `Months: ${item.monthDuration}`;

    let divHourDuration = document.createElement('div');
    divHourDuration.innerText = `Hours: ${item.hourDuration}`;

    divWrap.append(divMonthDuration, divHourDuration);

    let divModules = document.createElement('ul');

    for (const elem of item.modules) {
        let liModule = document.createElement('li');

        liModule.innerText = `${elem}`;
        divModules.appendChild(liModule);
        liModule.style.cssText = 'border: 1px solid black; padding: 5px';

    }
    divCourse.append(h1Title, divWrap, divModules);

    divBox.appendChild(divCourse);
    divModules.style.cssText = 'list-style: none; border: 1px solid black; padding: 5px; width: 100%';
    divHourDuration.style.cssText = 'border: 1px solid black; padding: 5px';
    divMonthDuration.style.cssText = 'border: 1px solid black; padding: 5px';
    h1Title.style.cssText = 'border: 1px solid black; padding: 5px';
    divCourse.style.cssText = 'display: flex; ' +
        'flex-direction: column; ' +
        'align-items: center; ' +
        'border: 1px solid black; '+
        'padding: 5px';
    divWrap.style.cssText = 'display: flex; column-gap: 5px';
}