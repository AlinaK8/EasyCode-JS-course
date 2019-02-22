//Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
// Создайте наследников этого класса:
// классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование
// У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}
// У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экземпляр (дом, торговый центр)

function Building(name) {
    this.name = name;

}

Building.prototype.setFloors = function(floorsNumber) {
    this.floorsNumber = floorsNumber;
}

Building.prototype.getFloors = function() {
    return this.floorsNumber;
}

function AppartmentHouse(name, flatOnFloor) {
    Building.call(this, name);
    this.flatOnFloor = flatOnFloor;
}

AppartmentHouse.prototype = Object.create(Building.prototype);
AppartmentHouse.prototype.consructor = AppartmentHouse;

AppartmentHouse.prototype.getFloors =  function() {
    return `
      {
          Total Floors: ${this.floorsNumber},
          Total Flats: ${this.floorsNumber * this.flatOnFloor},
      }   `
}

let appartmentBlock = new AppartmentHouse('Sky Villa', 3);
appartmentBlock.setFloors(10);
appartmentBlock.getFloors();

function CityMall(name,storesOnFloor) {
    Building.call(this, name);
    this.storesOnFloor = storesOnFloor;
}

CityMall.prototype = Object.create(Building.prototype);
CityMall.prototype.contructor = CityMall;

CityMall.prototype.getFloors = function() {
    return `
    {
        Total Floors: ${this.floorsNumber},
        Total Stores: ${this.storesOnFloor * this.floorsNumber}
    }`
}

let mall = new CityMall('Altair', 35);
mall.setFloors(3);
mall.getFloors();