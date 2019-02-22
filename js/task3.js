//Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.

function Furniture(name, price) {
    this.name = name;
    this.price = price;
}

Furniture.prototype.getInfo = function() {
    return `The piece of Furniture is ${this.name} per ${this.price} per item.`
}

function OfficeFurniture(name, price, reception) {
    Furniture.apply(this, arguments);
    this.reception = reception;
}

OfficeFurniture.prototype = Object.create(Furniture.prototype);
OfficeFurniture.prototype.constructor = OfficeFurniture;

OfficeFurniture.prototype.getInfo = function() {
    return `{
        Name: ${this.name},
        Price: ${this.price},
        Reception: ${this.reception}

    }`
}

function FurnitureForHome(name, price, woodMadeFrom) {
    Furniture.apply(this, arguments);
    this.woodMadeFrom = woodMadeFrom;
}

FurnitureForHome.prototype = Object.create(Furniture.prototype);
FurnitureForHome.prototype.contructor = FurnitureForHome;

FurnitureForHome.prototype.getInfo = function() {
    return `
    { 
        Name: ${this.name},
        Price: ${this.price},
        Material: ${this.woodMadeFrom}
    }`
}