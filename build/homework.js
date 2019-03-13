//1.Создать функцию которая принимает число и считает факториал этого числа. 
const factorial = (num) => {
    let res = 1;
    for (let i = 1; i <= num; i++) {
        res *= i;
    }
    return res;
};
//2.Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0
function multiply(...args) {
    if (!args.length)
        return 0;
    let res = 1;
    for (let value of args) {
        res *= value;
    }
    return res;
}
//3.Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
function reverseString(str) {
    return str.split('').reverse().join('');
}
//Классы 
//1.Создайте абстрактный класс Car с двумя методами drive (ехать) и refuel (заправка) а также с двумя свойствами mileage (общий пробег машины) и fuel (количество бензина в машине).
class Car {
    constructor(mileage, fuel) {
        this.mileage = mileage;
        this.fuel = fuel;
    }
}
//2.Наследоваться от абстрактного класса Car и реализовать методы абстрактного класса drive (ехать) и refuel (заправка). Метод drive должен принимать количество километров и обновлять свойство mileage и уменьшать значение свойства fuel если бензин закончился то нужно вернуть сообщение о том что нужно заправиться. Метод refuel должен увеличивать свойство fuel. Обязательно делать проверку переданных данных. Свойства fuel и mileage должны быть protected.
class MyCar extends Car {
    constructor(mileage, fuel) {
        super(mileage, fuel);
    }
    drive(distance) {
        if (isNaN(distance))
            return 'ошибка при введении данных';
        if (distance > (this.fuel * 10))
            return 'ошибка при введении данных, в баке недостаточно топлива для данной дистанции';
        this.mileage += distance;
        this.fuel -= distance / 10;
        if (this.fuel == 0) {
            return 'нужно заправиться';
        }
    }
    refuel(gas) {
        gas > 0 ? this.fuel += gas : console.log('ошибка при введении данных');
    }
    get carInfo() {
        return `общий пробег машины: ${this.mileage}, количество бензина в машине: ${this.fuel}`;
    }
}
//4.Создать публичный get для получения свойств fuel и mileage.
