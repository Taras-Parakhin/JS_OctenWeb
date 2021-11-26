//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function User(model, producer, year, maxSpeed, engineVal) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVal = engineVal;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        for (const key in this) {
            console.log(`${key} - ${this[key]}`)
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, producer, year, maxSpeed, engineVal) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVal = engineVal;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        for (const key in this) {
            console.log(`${key} - ${this[key]}`)
        }
    }

    increaseMaxSpeed (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }

    changeYear (newValue) {
        this.year = newValue;
    }

    addDriver (driver) {
        this.driver = driver;

    }
}

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(cinderellaName, age, footSize) {
        this.cinderellaName = cinderellaName;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderellas = [
    new Cinderella('olia', '20', 36),
    new Cinderella('valia', '30', 35),
    new Cinderella('lida', '24', 40),
    new Cinderella('vera', '18', 37),
    new Cinderella('polia', '27', 42),
    new Cinderella('sonia', '23', 38),
    new Cinderella('vika', '19', 34),
    new Cinderella('masha', '25', 37),
    new Cinderella('dasha', '21', 41),
    new Cinderella('ulia', '17', 36),
]
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(princeName, age, shooSize) {
        this.princeName = princeName;
        this.age = age;
        this.shooSize = shooSize;
    }
}

const prince = new Prince('vasia', 25, 37);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

const princesse = (cinderellas, prince) => {
    for (const item of cinderellas) {
        if (item.footSize === prince.shooSize) {
            return item.cinderellaName;
        }
    }
};

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const princess = cinderellas.find(cinderella => cinderella.footSize === prince.shooSize);