// Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсторедж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар


document.getElementById('product').addEventListener('submit', function (e) {
    e.preventDefault();
    let basket = JSON.parse(localStorage.getItem('basket')) || [];
    basket.push({name: this.elements.name.value,
        amount: this.elements.amount.value,
        price: this.elements.price.value * this.elements.amount.value,
        photo: this.elements.photo.value});
    localStorage.setItem('basket', JSON.stringify(basket));
    this.reset();
});