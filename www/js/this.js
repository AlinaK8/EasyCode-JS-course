//First Part
//1
// Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

const rectangle = {
    width: 30,
    height: 23,
    getSquare: function () { return parseFloat(this.width)* parseFloat(this.height)}
};

console.log(rectangle.getSquare());


//2
// Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5

const price = {
    price: 10,
    discount: '15%',
    getPrice: function() {return this.price},
    getPriceWithDiscount: function() {return this.price * (100 - parseFloat(this.discount))/100; }
};

console.log(price.getPrice());
console.log(price.getPriceWithDiscount());

//3
// Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;

let myObject = {
    height: 10,
    heightIncrease: function() {this.height++;
                           return this.height;}
};
console.log(myObject.heightIncrease());

//4
// Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {
//     value: 1,
//     double: function () {...},
//     plusOne: function () {...},
//     minusOne: function () {...},
// }
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3

let calculator = {

    value: 1,

    double: function() { 
        this.value *= 2;
        return this; },

    plusOne: function() {
        this.value++; 
        return this; },

    minusOne: function() { 
        this.value--;
        return this; }

}

calculator.double().plusOne().plusOne().minusOne();
console.log(calculator.value);

//Second Part

//1
//Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)


let product = {
    salePrice: 15,
    quantity: 2858,
    getTotalPrice: function() {return this.salePrice * this.quantity}
};

console.log(product.getTotalPrice());

//2
//Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.

let description = {
    quantity: 1905,
    salePrice: 345
}

description.getTotalPrice = product.getTotalPrice.bind(description);

description.getTotalPrice1 = product.getTotalPrice.call(description);

console.log(description.getTotalPrice());


//3
// Даны объект и функция.
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes

let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};

let result = getSquare.call(sizes);

console.log(result);


//4
// Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.

let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

// let getElementHeight = element.getHeight;
// getElementHeight(); // undefined


let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight());
