//Task 1
//Создать функцию, которая возвращает промис. Функция принимает два аргумента - время, через которое промис должен выполниться, и значение, с которым промис будет выполнен.
// function promiseCreator(...) {...}
// const prom = promiseCreator(500, 'Ok!'); prom.then(console.log);
// Ok!

/** 
* @param {Number} time
* @param {String} value
*/


function promiseCreator(time, value) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(value);
        }, time);
    });

}    

const prom = promiseCreator(500, 'Ok!');
prom.then(console.log);

//Task 2
//Создать класс, который производит экземпляр со следующими свойствами: - promise - промис, который создается во время запуска конструктора;
// - reject - метод, при выполнении которого promise реджектится;
// - resolve - метод, при выполнении которого promise резолвится.
// class Prom {...}
// const inst = new Prom(); inst.promise.then(data => console.log(data)); inst.resolve('test');
// → test

class Promise {
    
}    


// const instance = new Promise();
// inst.promise
//          .then(data => console.log(data)); 
// inst.resolve('test');



