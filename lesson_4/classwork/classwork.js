function min(...num) {
    const arr = [...num];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

// ============================================

function max(...num) {
    const arr = [...num];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

// =============================================

function minArr(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

// ==============================================

function maxArr(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

// ===============================================

function sum(arr) {
    let sum = 0;

    for (const item of arr) {
        sum += item;
    }
    return sum;
}

// =========================================

function middle (arr) {
    let sum = 0;

    for (const item of arr) {
        sum += item;
    }
    return Math.floor(sum / arr.length);
}

// =================================================

function minmax(...num) {
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
}

// ===============================================

function random(num) {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr[i] = Math.round(Math.random() * 100);

    }
    return arr;
}

// =============================================

function randomLim(num, limit) {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr[i] = Math.round(Math.random() * limit);

    }
    return arr;
}

// ==============================================

function reverse(arr) {
    const arrReverse = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        arrReverse[(arr.length - 1) - i] = arr[i];
    }
    return arrReverse;
}

