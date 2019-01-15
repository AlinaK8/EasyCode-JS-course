// Зная структуру html, с помощью изученных
// методов получить (в консоль):
// 1. head
// 2. body
// 3. все дочерние элементы body и вывести их в
// консоль.
// 4. первый div и все его дочерние узлы
// а) вывести все дочерние узлы в консоль
// б) вывести в консоль все дочерние узлы,
// кроме первого и последнего
// Для навигации по DOM использовать методы,
// которые возвращают только элементы

//1

let head = document.head;
console.log(head);

//2

let body = document.body;

console.log(body);


//3

let childBody = document.body.children;

console.log(childBody);


//4

let divOne = document.querySelector('div').children;

console.log(divOne);

for ( let i = 1; i < divOne.length-1; i++) {
    console.log(divOne[i]);
}


//Task 2

//1
let isParent = (parent, child) => {
    let parentElement = child.parentElement;
    while (parentElement !== document) {
      if(parentElement === parent) return true;
      parentElement = parentElement.parentElement;
    }
    return false;
  };

  isParent(document.body.children[0], document.querySelector('mark'));


//2
// взято отсюда https://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array

let links = document.links;

let filteredLinks = Array.from(links).filter(function(link) {
    return link.parentNode.tagName !== 'LI'; 
});

//3
console.log(document.body.querySelector('ul').previousElementSibling);
   
console.log(document.body.querySelector('ul').nextElementSibling);


//4
let liNum = document.querySelector('ul').children.length;

console.log(liNum)


//5
/**
 * 
 * @param {String} id 
 * @param {String} title
 * @param {String} text
 */
const editTodoItem = (id, title, text) => {

    for (let i = 0; i < currentTodos.length; i++) {
        if (currentTodos[i].id == id) {
            currentTodos[i].title = title;
            currentTodos[i].text = text;
            break;
        }

        return todosStorage.currentTodos;

    }

}


//6

 /**
 * generateId - создает произвольную строку 
 * @returns {string} - новый id
 */
const generateId = () => {
    const uniqueValues = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let id = '';

    for (let i = 0; i < 10; i++) {
        const index = Math.floor(Math.random() * uniqueValues.length);
        id += uniqueValues[index];
    }

    return id;
}


