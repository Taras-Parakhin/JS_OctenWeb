// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

let div = document.getElementsByClassName('container')[0];

let url = new URL(location);
let obj = JSON.parse(url.searchParams.get('data'));

let divUser = document.createElement('div');
divUser.classList.add('user');
divUser.innerHTML = '<h2>User</h2>';

function user(obj, divParent) {
    for (const key in obj) {
        let divChild = document.createElement('div');
        divChild.classList.add(`${key}`);
        if (typeof obj[key] !== 'object') {
            divChild.innerHTML = `<b>${key}: </b>${obj[key]}`;
        } else {
            divChild.innerHTML = `<b>${key}:</b>`;
            user(obj[key], divChild);
        }
        divParent.appendChild(divChild);
    }
}

user(obj, divUser);

let btn = document.createElement('button');
btn.classList.add('btn');
btn.innerText = 'Posts';

let divPosts = document.createElement('div');
divPosts.classList.add('posts', 'none');

btn.addEventListener('click', (e) => {
    divPosts.innerHTML = '';
    divPosts.classList.toggle('none');

    fetch(`https://jsonplaceholder.typicode.com/users/${obj.id}/posts`)
        .then(response => response.json())
        .then(arr => {
            arr.forEach(post => {
                let divPost = document.createElement('div');
                divPost.classList.add('post');

                let title = document.createElement('h3');
                title.classList.add('title');
                title.innerText = `${post.title.charAt(0).toUpperCase() + post.title.slice(1)}`;


                let link = document.createElement('a');
                link.classList.add('post__link');
                link.href = '../post-details/post-details.html?data=' + JSON.stringify(post);
                link.innerText = 'Details';

                divPost.append(title, link);
                divPosts.append(divPost);
            });
        });
});

div.append(divUser, btn, divPosts);


