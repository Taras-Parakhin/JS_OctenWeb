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
