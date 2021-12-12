
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста    зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

let divWrap = document.createElement('div');
divWrap.classList.add('wrap');
document.body.append(divWrap);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        json.forEach(item => {
            let divUser = document.createElement('div');
            divUser.classList.add('user');
            divUser.innerHTML = `<h1>User-${item.id}</h1>
                                <div class="content">
                                    <div><strong>name:</strong> ${item.name}</div>
                                    <div><strong>username:</strong> ${item.username}</div>
                                    <div><strong>email:</strong> ${item.email}</div>
                                    <div class="address"><h2>Address:</h2>
                                        <div><strong>street:</strong> ${item.address.street}</div>
                                        <div><strong>suite:</strong> ${item.address.suite}</div>
                                        <div><strong>city:</strong> ${item.address.city}</div>
                                        <div><strong>zipcode:</strong> ${item.address.zipcode}</div>
                                        <div class="geo"><h3>Geo:</></h3>
                                            <div><strong>lat:</strong> ${item.address.geo.lat}</div>
                                            <div><strong>lng:</strong> ${item.address.geo.lng}</div>
                                        </div>
                                    </div>
                                    <div><strong>phone:</strong> ${item.phone}</div>
                                    <div><strong>website:</strong> ${item.website}</div>
                                    <div class="company"><h2>Company:</h2>
                                        <div><strong>name:</strong> ${item.company.name}</div>
                                        <div><strong>catchPhrase:</strong> ${item.company.catchPhrase}</div>
                                        <div><strong>bs:</strong> ${item.company.bs}</div>
                                    </div>
                                </div>`;

            let btnUser = document.createElement('button');
            btnUser.innerText = 'post';
            divUser.append(btnUser);

            let divPosts = document.createElement('div');
            divPosts.classList.add('none');
            divUser.append(divPosts);

            btnUser.addEventListener('click', (e) => {
                divPosts.innerHTML = '';
                divPosts.classList.toggle('none');
                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${item.id}`)
                    .then(response => response.json())
                    .then(json => {
                        json.forEach(item => {
                            let divPost = document.createElement('div');
                            divPost.classList.add('post');
                            divPost.innerHTML = `<div class="mark">post</div><h3 class="title">${item.id}. ${item.title.charAt(0).toUpperCase() + item.title.slice(1)}</h3><p>${item.body.charAt(0).toUpperCase() + item.body.slice(1)}</p>`;

                            let btnPost = document.createElement('button');
                            btnPost.innerText = 'comment';
                            divPost.append(btnPost);

                            let divComments = document.createElement('div');
                            divComments.classList.add('none', 'comments');
                            divPost.append(divComments);

                            btnPost.addEventListener('click', (e) => {
                                divComments.innerHTML = '';
                                divComments.classList.toggle('none');
                                divComments.innerHTML = '<div class="divider">comments</div>';

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

                            divPosts.append(divPost);
                        });
                    });
            });
            divWrap.append(divUser);
        });
    });


