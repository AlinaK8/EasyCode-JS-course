//1. По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.

let btnMessage = document.getElementById('btn-msg');

btnMessage.addEventListener('click', function(e) {
    e.preventDefault();
    alert(e.target.getAttribute('data-text'));
});

//2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.

btnMessage.addEventListener('mouseover', function(e) {
    btnMessage.classList.add('redColor');
});

btnMessage.addEventListener('mouseleave', function(e){
    btnMessage.classList.remove('redColor');
});

//3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
let tag = document.getElementById('tag');
document.addEventListener('click', function(e){
   tag.innerHTML = "Tag: " + e.target.tagName;
})

//4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д 

let btnGenerate = document.getElementById('btn-generate');

btnGenerate.addEventListener('click', function(){

    let ul = document.querySelector('ul');
    let newLi = document.createElement('li');
    newLi.innerHTML += 'Item ' + (ul.children.length + 1);

    return ul.appendChild(newLi);
});




