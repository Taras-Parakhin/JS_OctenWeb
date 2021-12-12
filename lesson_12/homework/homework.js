
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

let divWrap = document.createElement('div');
divWrap.classList.add('wrap');
document.body.append(divWrap);
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        json.forEach(item => {
            let divPost = document.createElement('div');
            divPost.classList.add('post');
            divPost.innerHTML = `<h3 class="title">${item.id}. ${item.title.charAt(0).toUpperCase()+item.title.slice(1)}</h3><p>${item.body.charAt(0).toUpperCase()+item.body.slice(1)}</p>`;
            divWrap.append(divPost);
        });
    });

// ==============================================================================================

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// let divWrap = document.createElement('div');
// divWrap.classList.add('wrap');
// document.body.append(divWrap);
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(json => {
//         json.forEach(item => {
//             let divComment = document.createElement('div');
//             divComment.classList.add('comment');
//             divComment.innerHTML = `<h3 class="name">${item.id}. ${item.name.charAt(0).toUpperCase()+item.name.slice(1)}</h3><p>${item.body.charAt(0).toUpperCase()+item.body.slice(1)}</p><div class="mail">${item.email}</div>`;
//             divWrap.append(divComment);
//         });
//     });
