
// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

function arrClassName(obj) {
    const arr = [];

    function gatherClassName(obj) {
        if (obj.children.length) {
            for (const item of obj.children) {
                if (item.classList.length) {
                    for (const i of item.classList) {
                        arr.push(i);
                    }
                }
                gatherClassName(item);
            }
        }
    }

    gatherClassName(obj);

    return arr;
}

console.log(arrClassName(document.body));
