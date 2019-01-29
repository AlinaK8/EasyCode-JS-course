//Task 1
// Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0

// Подсказка, функция minus должна возвращать другую функцию.

function minus (a = 0) {
    return function(b = 0) {
        return a - b;
    }
}

// Task 2

//Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function MultiplyMaker ...
// const multiply = MultiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

function MultiplyMaker(a) {
    if (!a) return "please provide value!"
    if (isNaN(a)) return "please provide number"

    return function(b) {
        return a *= b;
    }
}

const multiply = MultiplyMaker(2);

//Task 3
//Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

const stringfier = (function() {

    let _str = '';

    function setString(value = ' ') {
        if (typeof(value) === 'number') {
            _str = value.toString();
        } else {
            _str = value;
        }
    }    

    function getString() {
        return _str;
    }

    function getStringLength() {
        return _str.length;
    }

    function reverseString() {
        return newStr = _str.split('').reverse().join('');
    }

    return {
        setString: setString,
        getString: getString,
        getStringLength: getStringLength,
        reverseString: reverseString
    };

}());

//Task 4

//Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100


const calculator = (function() {
    let _value;

    function setValue(){
        if(!value || isNaN(value)) {
            return "please provide a numeric value!!!"
        } else {
          _value = value;
        }
    }

    function add(value) {
        _value += value;
        return this;
    }

    function subsract(value) {
        _valu -= value;
        return this;
    }

    function multiply(value) {
        _value *= value;
        return this;
    }

    function divide(value) {
        _value /= value;
        return this;
    }

    function square(value) {
        _value = Math.pow(value, 2);
        return this;
    }

    function getValue() {
        return _value.toFixed(2);
    }

    return {
        setValue: setValue,
        add: add,
        subsract: subsract,
        multiply: multiply,
        divide: divide,
        square: square,
        getValue: getValue
    }
})


//Constructors
//Task 1
//Создать конструктор для производства автомобилей. Конструктор должен принимать марку автомобиля и возраст машины. Конструктор должен иметь метод, который возвращает марку, и
// второй метод, который возвращает год производства машины (год текущий минус возраст машины, использовать Date для получения текущего года)
// var lexus = new Car(‘lexus’, 2);
// lexus.получитьМарку(); // “Lexus”
// lexus.получитьГодВыпуска(); // 2014 (2016-2);
// Марка машины всегда должна возвращаться с большой буквы!
function CarManufacture(brand, carAge) {

    this.brand =  brand;
    this.carAge = carAge;

    this.showBrand = function() {
        return brand[0].toUpperCase() + brand.slice(1);
    }

    this.getYearOfManufacture = function() {
        return new Date().getFullYear() - this.carAge;
    }
}


//Task 2
// Написать конструктор, который умеет элементарно шифровать строки (например, сделать из строки строку-перевертыш, или заменить все символы их цифровым представлением, или любой другой метод). Конструктор при инициализации получает строку и имеет следующие методы:
// 	a. показать оригинальную строку
// b. показать зашифрованную строку
// Строки не должны быть доступны через this, только с помощью методов.

function Stingfy(str) {

    this.str = str || '';

    this.showOriginalString = function() {
        return str;
    }

    this.cyphredString =  function() {

        let charCodeString = '';

        for (let i = 0; i < str.length; i++) {
            charCodeString += str.charCodeAt(i) + ' ';
        }

        return charCodeString;

    }

}

