//Task 1
//Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):

// function Component(tagName) {
//     this.tagName = tagName || 'div';
//     this.node = document.createElement(tagName);
//   }
  
//   Пример вызова:
  
//   const comp = new Component('span');

class Component {
    constructor(tagName){
        this.tagName = tagName || 'DIV';
        this.node = document.createElement(tagName);
    }
}

const comp = new Component('span');


//Task 2
//Реализовать конструктор и методы в ES6 синтаксисе:

// function Component(tagName) {
//     this.tagName = tagName || 'div';
//     this.node = document.createElement(tagName);
//   }
  
//   Component.prototype.setText = function (text) { 
//     this.node.textContent = text;
//   };


class Component2{
    constructor(tagName){
        this.tagName = tagName || 'DIV';
        this.node = document.createElement(tagName);
    }

    set text(text) {
        this.node.textContent = text;
    }
}

const comp2 = new Component2('span');
comp2.text = 'hello world';


//Task 3
// Создать класс калькулятора который будет принимать стартовое значение и у него будут методы сложить, вычесть, умножить , разделить. Также у него должны быть геттер и сеттер для получения и установки текущего числа с которым производятся вычисления.

class Calculator {
    constructor(value) {
        this.num = value;
    }

    sum(value) {
        return this.startingValue += value;
    }

    subsctract(value) {
        return this.startingValue -= value;
    }

    divide(value) {
        return this.startingValue /= value;
    }

    multiply(value) {
        return this.startingValue *= value;
    }

    set value(value) {
        this.startingValue = value;
    }

    get value() {
        return 'The result is ' + this.startingValue;
    }

}