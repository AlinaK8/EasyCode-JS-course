// 1. Найти в коде список ul и добавить класс “list”

let ul = document.querySelector('ul');

ul.classList.add('list');

console.log(ul);

// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link

let link = document.querySelector('ul ~ a');
link.id = 'link';

// 3. На li через один (начиная с самого первого) установить класс “item”

let lis = document.querySelectorAll('ul li');

let updatedLi = Array.from(lis).forEach((li, i) => {
    if ( !(i%2) ) {
        li.classList.add('item');
    } 
});

// 4. На все ссылки в примере установить класс “custom-link”

let updatedLinks = Array.from(document.links).forEach(link => {
    link.setAttribute('class', 'custom-link');
});




