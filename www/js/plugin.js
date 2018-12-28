//Objects

//Task 1

const object = {
    product: 'iphone',
};

object.price = 1000;
object.currency = 'dollar';

object.details = {
    model: 'X',
    color: 'space-gray'
};

console.log(object);


//Преобразование примитивов. Задачи.

// Task 1

// let a = 0 || 'string'; - 'string' - 0 это false;

//let a = 1 && 'string';  - 'string' - потому что первый аргумент true;

//let a = null || 25; -  25, потому что null это false;

//let a = null && 25; - null, так как первый аргумент false

//let a = null || 0 || 35; - 35, т.е. Null и 0 это false;

//let a = null && 0 && 35; - null,  первый аргумент false;


//Task 2


//12 + 14 + '12' = '3612' - сначало произойдет сложение чисел, а затем они преобразуются в строку с "12"

//3 + 2 - '1' -  4, так как "1" преобразится в число

//'3' + 2 - 1 = "31" -  отобразится строка, сначало произойдет вычитание чисел, и преобразование результата со строкой

//true + 2 = 3 так как true это 1

//+'10' + 1 = 11 - будет сделано преобразование строки "10" в число и сложение двух чисел

//undefined + 2 = NaN -  undefined is not a number 

//null + 5 = 5  так как null = 0

//true + undefined = NaN   так как undefined is not a number  и не может быть прибавлен к true 



// If Else

//Task 1

let x;

if (x == 'hidden') {
    x = 'visible';
} else {
    x = 'hidden'
};


//Task 2

let variable = 10;

if ( variable == 0 ) {
    variable = 1;
} else if ( variable < 0 ) {
    variable = 'less than zero'
} else if ( variable > 0 ) {
    variable *=10;
}

//Task 3

let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
};

if ( car.age > 5 ) {
    console.log ('Need Repair');
    car.needRepair = true;
}

//Task 4 

let item = {
    name: 'Intel core i7',
    price: '100$',
    discount: '15%'
};

if ( item.discount && parseFloat(item.discount) > 0 ) {
    item.priceWithDiscount = parseFloat(item.price) - (parseFloat(item.price)* parseFloat(item.discount) / 100);
    console.log(item.priceWithDiscount);
} else if (item.discount) {
    console.log(item.price);
}


//Task 6

let product = {
    name: 'Яблоко',
    price: '10$'
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

if ( parseFloat(product.price) >= min && parseFloat(product.price) <= max ) {
    console.log(product.name)
} else {
    console.log('No products were found so far')
}