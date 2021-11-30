
// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

function getherClassName(elem) {

    if (elem.children.length) {
        for (const item of elem.children) {

            getherClassName(item);
        }
    }
}

getherClassName(document.body);
