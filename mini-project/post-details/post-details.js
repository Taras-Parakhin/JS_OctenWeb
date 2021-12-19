// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let div = document.getElementsByClassName('container')[0];

let url = new URL(location);
let obj = JSON.parse(url.searchParams.get('data'));

let divPost = document.createElement('div');
divPost.classList.add('post');

for (const key in obj) {
    let divPostKey = document.createElement('div');
    divPostKey.classList.add(`${key}`);
    divPostKey.innerHTML = `<b>${key}: </b>${obj[key]}`;
    divPost.append(divPostKey);
}

let divComments = document.createElement('div');
divComments.classList.add('comments');

fetch(`https://jsonplaceholder.typicode.com/posts/${obj.id}/comments`)
    .then(response => response.json())
    .then(arr => {
        arr.forEach(comment => {
            let divComment = document.createElement('div');
            divComment.classList.add('comment');
            divComments.append(divComment);

            for (const key in comment) {
                let divCommentKey = document.createElement('div');
                divCommentKey.classList.add(`${key}`);
                divCommentKey.innerHTML = `<b>${key}: </b>${comment[key]}`;
                divComment.append(divCommentKey);
            }
        });
    });

div.append(divPost, divComments);
