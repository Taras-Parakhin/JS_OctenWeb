// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

let divWrap = document.createElement('div');
divWrap.classList.add('wrap');
document.body.append(divWrap);
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        json.forEach(item => {
            let divPost = document.createElement('div');
            divPost.classList.add('post');
            divPost.innerHTML = `<h3 class="title">${item.id}. ${item.title.charAt(0).toUpperCase() + item.title.slice(1)}</h3><p>${item.body.charAt(0).toUpperCase() + item.body.slice(1)}</p>`;

            let btn = document.createElement('button');
            btn.innerText = 'comment';
            divPost.append(btn);

            let divComments = document.createElement('div');
            divComments.classList.add('none');
            divPost.append(divComments);

            btn.addEventListener('click', (e) => {
                divComments.innerHTML = '';
                divComments.classList.toggle('none');

                fetch(`http://jsonplaceholder.typicode.com/comments?postId=${item.id}`)
                    .then(response => response.json())
                    .then(json => {
                        json.forEach(item => {
                            let divComment = document.createElement('div');
                            divComment.classList.add('comment');
                            divComment.innerHTML = `<h3 class="name">${item.id}. ${item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h3><p>${item.body.charAt(0).toUpperCase() + item.body.slice(1)}</p><div class="mail">${item.email}</div>`;
                            divComments.append(divComment);
                        });
                    });

            });

            divWrap.append(divPost);
        });
    });
