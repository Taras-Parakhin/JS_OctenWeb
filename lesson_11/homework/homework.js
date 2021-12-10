// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let formUser = document.createElement('form');
formUser.setAttribute('action', '/action');
formUser.style.cssText = 'display: flex; column-gap: 20px'
let inputName = document.createElement('input');
inputName.setAttribute('type', 'text');
inputName.setAttribute('name', 'name');
inputName.style.cssText = 'width: 400px; height: 50px; font-size: 24px;'
let inputAge = document.createElement('input');
inputAge.setAttribute('type', 'number');
inputAge.setAttribute('name', 'age');
inputAge.style.cssText = 'width: 200px; height: 50px; font-size: 24px;'
let inputSubmitUser = document.createElement('input');
inputSubmitUser.setAttribute('type', 'submit');
inputSubmitUser.setAttribute('value', 'save');
inputSubmitUser.style.cssText = 'width: 100px; height: 56px; font-size: 24px;'
formUser.append(inputName, inputAge, inputSubmitUser);
document.body.append(formUser);

function changeUser(name, age) {
    let user = {name: name, age: age};

    localStorage.setItem('value', JSON.stringify(user));
}

formUser.onsubmit = function (e) {
    e.preventDefault();
    changeUser(inputName.value, inputAge.value);
    inputName.value = '';
    inputAge.value = '';
};

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let formCar = document.createElement('form');
formCar.setAttribute('action', '/action');
formCar.style.cssText = 'margin-top: 100px; display: flex; column-gap: 20px'
let inputModel = document.createElement('input');
inputModel.setAttribute('type', 'text');
inputModel.setAttribute('name', 'model');
inputModel.style.cssText = 'width: 400px; height: 50px; font-size: 24px;'
let inputType = document.createElement('input');
inputType.setAttribute('type', 'text');
inputType.setAttribute('name', 'type');
inputType.style.cssText = 'width: 200px; height: 50px; font-size: 24px;'
let inputVolume = document.createElement('input');
inputVolume.setAttribute('type', 'number');
inputVolume.setAttribute('name', 'volume');
inputVolume.style.cssText = 'width: 100px; height: 50px; font-size: 24px;'
let inputSubmitCar = document.createElement('input');
inputSubmitCar.setAttribute('type', 'submit');
inputSubmitCar.setAttribute('value', 'save');
inputSubmitCar.style.cssText = 'width: 100px; height: 56px; font-size: 24px;'
formCar.append(inputModel, inputType, inputVolume, inputSubmitCar);
document.body.append(formCar);

function changeCar(model, type, volume) {
    let cars = JSON.parse(localStorage.getItem('car')) || [];
    cars.push({model: model, type: type, volume: volume});
    localStorage.setItem('car', JSON.stringify(cars));
}

formCar.onsubmit = function (e) {
    e.preventDefault();
    changeCar(inputModel.value, inputType.value, inputVolume.value);
    inputModel.value = '';
    inputType.value = '';
    inputVolume.value = '';
};

const arr = [
                {
                childs: [{age:25,firstName:"Marta"},
                        {childs: [{age:10,firstName:"Arnold"},{age:12,firstName:"Nick"}],
                        age:32,firstName:"Peter"}],
                age:60,firstName:"Alina"
                },
                {age:35,firstName:"Barbara"},
                {age:43,firstName:"Jack"},
                {age:52,firstName:"Tom"},
                {childs:[{age:15,firstName:"Mike"},{age:16,firstName:"Joshua"}],
                age:44,firstName:"Michael"}
];

const inputJSON = '[{"childs":[{"age":25,"firstName":"Marta"},{"childs":[{"age":10,"firstName":"Arnold"},{"age":12,"firstName":"Nick"}],"age":32,"firstName":"Peter"}],"age":60,"firstName":"Alina"},{"age":35,"firstName":"Barbara"},{"age":43,"firstName":"Jack"},{"age":52,"firstName":"Tom"},{"childs":[{"age":15,"firstName":"Mike"},{"age":16,"firstName":"Joshua"}],"age":44,"firstName":"Michael"}]';

const a = (JSON.parse(inputJSON))
// console.log(inputJSON.split(',{"childs":').join())

// нужно это все распарсить в такой массив:
//
//     [
//         { age: 60, firstName: 'Alina' },
//         { age: 10, firstName: 'Arnold' },
//         { age: 35, firstName: 'Barbara' },
//         { age: 43, firstName: 'Jack' },
//         { age: 16, firstName: 'Joshua' },
//         { age: 25, firstName: 'Marta' },
//         { age: 44, firstName: 'Michael' },
//         { age: 15, firstName: 'Mike' },
//         { age: 12, firstName: 'Nick' },
//         { age: 32, firstName: 'Peter' },
//         { age: 52, firstName: 'Tom' }
//     ]


// массив отсортирован по firstName
// debugger
function qwert(obj) {
    // if (obj.length) {
        for (const item of obj) {
            if (!item.childs) {
                    console.log(item.age, item.firstName);
            }
            console.log(item.childs)
            qwert(item.childs);
            }

        // }

}

qwert(a);
// console.log(a)

const m = '[{"childs":[{"age":25,"firstName":"Marta"},{"childs":[{"age":10,"firstName":"Arnold"},{"age":12,"firstName":"Nick"}],"age":32,"firstName":"Peter"}],"age":60,"firstName":"Alina"},{"age":35,"firstName":"Barbara"},{"age":43,"firstName":"Jack"},{"age":52,"firstName":"Tom"},{"childs":[{"age":15,"firstName":"Mike"},{"age":16,"firstName":"Joshua"},{"childs":[{"age":55,"firstName":"Kira"},{"age":19,"firstName":"Olha"}]}],"age":44,"firstName":"Michael"}]';