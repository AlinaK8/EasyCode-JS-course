//1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li: 
{/* <ul>
<li><a href="#">Link1</a></li>
...
<li class=”new-item”>item 5</li>
<li class=”new-item”>item 6</li>
</ul> */}
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

let ul = document.querySelector('ul');

function addLi(str, ul) {

    let newLi = document.createElement('li');
    liCount = ul.children.length

    newLi.innerHTML += str + (liCount + 1)
    newLi.setAttribute('class', 'new-item');

    return ul.appendChild(newLi);
}

// 2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong). 

let links = document.querySelectorAll('ul a');

let updatedLinks = Array.from(links).forEach(function(link) {
    link.insertAdjacentHTML('beforeend', '<strong>Strong</strong');
})

// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement. 

let img = document.createElement('img');
img.setAttribute('src', 'http://s7.travelask.ru/system/images/files/000/127/100/original/gp_krakow.jpg?1486444894');
img.setAttribute('alt', 'Krakow at summer');
document.body.insertAdjacentElement('afterbegin', img);


// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green

let mark = document.querySelector('mark');

mark.insertAdjacentText('beforeend', 'green');
mark.setAttribute('class', 'green');

// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)

let li = document.querySelectorAll('ul li');

let sortedLi = Array.from(li).sort(function(prev, next) {

    if (prev.textContent < next.textContent) return 1;

    if (prev.textContent > next.textContent) return -1;

    return 0;

})
