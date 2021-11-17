const rectangle = (a, b) => a * b;

// =================================

const circle = r => Math.PI * r**2;

// =================================

const cylinder = (r, h) => (Math.PI * r**2) * h;

// =================================

const val = arr => {
    for (const item of arr) {
        console.log(item);
    }
};

// =================================

const parag = p => document.write(`<p>${p}</p>`);

// =================================

function list1(text) {
    document.write('<ul>');
        document.write(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
    document.write('</ul>');
}

// =================================

function list2(text, num) {
    document.write('<ul>');
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

// =================================

function list3(arr) {
    document.write('<ul>');
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

// =================================


function foo(arr) {
    for (const item of arr) {
        document.write(`<div>${item.id} ${item.name} ${item.age}`);
    }
}
