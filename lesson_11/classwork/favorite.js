let users = JSON.parse(localStorage.getItem('favUsers'));
users.forEach(item => {
    let div = document.createElement('div');
    div.innerHTML = `<p>${item.name}</p><p>${item.age}</p><p>${item.status}</p>`;
    div.style.cssText = 'display: flex; column-gap: 50px; font-size: 36px';
    document.body.append(div);
})
