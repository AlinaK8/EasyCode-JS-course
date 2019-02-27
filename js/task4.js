// Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
// true/false, должно быть скрытым). Свойства определяются в момент вызова
// конструктора.
// У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например, одну неделю от момента регистрации).
// У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)

function User(name, registrationDate) {
    this.name = name;
    this.registrationDate = registrationDate;
}

User.prototype.getInfo = function() {
    return `
    {
        User Name: ${this.name},
        Registration Date: ${this.registrationDate}
    }`
}


function Admin(name, registrationDate) {
    User.apply(this, arguments);
    this._superAdmin = true;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.validUntil = function() {
    let creationDate = new Date(this.registrationDate);
    creationDate.setDate(creationDate.getDate() + 30);
    return creationDate;
}

Admin.prototype.getInfo = function() {
    return `
      {
        User Name: ${this.name},
        Registration Date: ${this.registrationDate},
        SuperAdmin: ${this._superAdmin}
        Valid Until: ${this.validUntil()};
      }
    `
}

let admin = new Admin('Vasya', '01/12/2019');
admin.getInfo();

function Guest(name, registrationDate, validUntil) {
    User.apply(this, arguments);
    this.validUntil = validUntil;
}

Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;

Guest.prototype.getInfo = function() {
    return `
    {
      User Name: ${this.name},
      Registration Date: ${this.registrationDate},
      SuperAdmin: false,
      Valid Until: ${this.validUntil}
    }
  `
}

let guestUser = new Guest('John', '01/02/2019', '02/01/2019');
guestUser.getInfo();
