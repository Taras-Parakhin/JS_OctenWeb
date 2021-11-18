<!-- - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)-->

(function (...num) {
    const arr = [...num];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(min > arr[i]) {
            min = arr[i];
        }
    }
    console.log(min);
}(1,2,3));

// ============================================
<!-- - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)-->

(function (...num) {
    const arr = [...num];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(max);
}(1,2,3));

// =============================================
<!-- - створити функцію яка повертає найбільше число з масиву-->

const minArr = (arr) => {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
};

// ==============================================
<!-- - створити функцію яка повертає найменьше число з масиву-->

const maxArr = (arr) => {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
};

// ===============================================
<!-- - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13-->

const sum = (arr) => {
    let sum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

// =========================================
<!-- - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.-->

const middle = (arr) => {
    let sum = 0;

    for (const item of arr) {
        sum += item;
    }
    return Math.floor(sum / arr.length);
};

// =================================================
<!-- - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);-->

const minmax = (...num) => {
    const arr = [...num];
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(min > arr[i]) {
            min = arr[i];
        } else if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(max);
    return min;
};

// ===============================================
<!-- - створити функцію яка заповнює масив рандомними числами-->
<!--(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.-->

const random = (num) => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr[i] = Math.round(Math.random() * 100);

    }
    return arr;
};

// =============================================
<!-- - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.-->

const randomLim = (num, limit) => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr[i] = Math.round(Math.random() * limit);

    }
    return arr;
};

// ==============================================
<!-- - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].-->

const reverse = (arr) => {
    const arrReverse = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        arrReverse[(arr.length - 1) - i] = arr[i];
    }
    return arrReverse;
};



