let container = document.getElementsByClassName('container')[0];
let clean = document.getElementsByClassName('clean__btn')[0];

let products = JSON.parse(localStorage.getItem('basket'));

products.forEach((item, i) => {
    let div = document.createElement('div');
    div.classList.add('wrap');
    div.innerHTML = `<h2>${item.name}</h2><img src=${item.photo} alt="photo" class="image"><div class="info"><div>К-ть: ${item.amount} шт</div><div>Ціна: ${item.price} грн</div></div>`;

    let btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = 'Видалити';

    div.append(btn);
    container.append(div);

    btn.addEventListener('click', (e) => {
        div.remove();
        products.splice(i, 1);
        localStorage.setItem('basket', JSON.stringify(products));
    });
});

clean.addEventListener('click', () => {
    container.innerHTML = '';
    localStorage.clear();
});