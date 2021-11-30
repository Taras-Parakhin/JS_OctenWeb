
// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

const arr = [];
function getherClassName(elem) {
    if (elem.children.length) {
        for (const item of elem.children) {
            if (item.classList.length) {
                for (const i of item.classList) {
                    if (typeof i === 'string') {
                        arr.push(i)
                    }
                }
            }
            getherClassName(item);
        }
    }
}

getherClassName(document.body);

console.log(arr);