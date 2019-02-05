//Task 1
// Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com используя класс созданный на занятии. Получив ответ от сервера вывести имена пользователей на страницу. При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем. Для визуальной части можно использовать bootstrap или другие фреймворки. 

const list = document.querySelector('.list-group');

class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }

    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(data);
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }
}

const httpClient = new CustomHttp();

httpClient.get('https://jsonplaceholder.typicode.com/users', (response) => {
    let users = JSON.parse(response);
    console.log(users);

    users.forEach(user => {
        const template = usersTemplate(user);
        list.insertAdjacentHTML('afterbegin', template);
    });
});


function usersTemplate(user) {
    return `
    <li class="list-group-item" data-id = "${user.id}">${user.name}
            <ul class="d-none">
                <li>Username: ${user.username}</li>
                <li>Company: ${user.company.name}</li>
                <li>Address: ${user.address.city}, ${user.address.street},${user.address.suite},${user.address.zipcode}</li>
                <li>Website: ${user.website}</li>
                <li>Phone: ${user.phone}</li>
            </ul>
    </li>`;
}

list.addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains('.d-none')) {
         e.currentTarget.classList.toggle('d-none');
    }   
   
});


