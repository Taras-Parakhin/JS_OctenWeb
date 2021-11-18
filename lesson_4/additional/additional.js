function first(a, b) {
    if (!b) {
        return a;
    } else {
        return a + b;
    }
}

// ======================

function sumArr(arr1, arr2) {
    let arr3;

    if (arr1.length > arr2.length) {
        arr3 = arr1;
        for (let i = 0; i < arr2.length; i++) {
            arr3[i] = arr3[i] + arr2[i];
        }
    } else {
        arr3 = arr2;
        for (let i = 0; i < arr1.length; i++) {
            arr3[i] = arr1[i] + arr3[i];
        }
    }

    return arr3;
}


// ==============================

function keys(arrObj) {
    const arr = [];
    let i = 0;
    for (const item of arrObj)
        for (const key in item) {
            arr[i] = key;
            i++;
        }
    return arr;
}

// ================================


function val(arrObj) {
    const arr = [];
    let i = 0;
    for (const item of arrObj)
        for (const key in item) {
            arr[i] = item[key];
            i++;
        }
    return arr;
}

// =====================================


function foo(arr, i) {
    const a = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = a;
    return arr;
}

// ======================================

function move(arr) {
    let arr1 = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            arr1[j] = arr[i];
            j++;
        }
    }
    for (let i = 0; i < arr.length - j; i++) {
        arr1[arr1.length] = 0;
    }

    return arr1;
}
