// 1. Найти параграф и получить его текстовое содержимое (только текст!)

let paragraph = document.querySelector('p').textContent;


//2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0)

function checkNode(node) {
    if (!node) return "please provide value!!";

    return {
        nodeType: node.nodeType,
        nodeName: node.nodeName,
        nodeChildren: !node.childNodes ? 0 : node.childNodes.length
    }

}

//3  Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

function getTextFromUl(ul) {
    if (!ul) return "please enter value!";

    let links = [];
       
     for (let i = 0; i < ul.children.length; i++) {
         links.push(ul.children[i].textContent);
     }
     return links;
}


//4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:-text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-


function updateTextNodes(node) {
    if (!node) return "please enter value!";

    let childNodes = node.childNodes;

    for (let i = 0; i < childNodes.length; i++) {
        if (childNodes[i].nodeType === 3) {
            childNodes[i].textContent = '-text-';
        }
    }
}


