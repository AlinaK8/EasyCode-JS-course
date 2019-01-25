//Task 1
// Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

// func(‘a’, ‘b’, ‘c’, ‘d’) → 
// {
//   first: ‘a’,
//   other: [‘b’, ‘c’, ‘d’]
// }


function getNewValue(...rest) {
    const [value1, ...others] = rest;
    return `first: ${value1}, others: ${others}`;
}

//Task 2

// Организовать функцию getInfo, которая принимает объект вида
// { name: ...,  info: { employees: [...], partners: [ … ]  } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

const organisation = {  
  name: 'Google',   
  info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']   } 
};
// getInfo(organisation); → 
// Name: Google 
// Partners: Microsoft Facebook

function getInfo(obj) {
    const {name = 'Unknown', info: {partners: [company1, company2]}} = obj;
    console.log(`name: ${name}`);
    console.log(`partners: ${company1}, ${company2}`);
};

