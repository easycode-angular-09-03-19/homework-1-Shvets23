//1.Создать функцию которая принимает число и считает факториал этого числа. 
const factorial = (num: number): number => {
    let res: number = 1;
    for(let i: number = 1; i <= num; i++){
        res *= i;
    }
    return res;
}
//2.Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0
function multiply(...args: Array<number>): number {
    if(!args.length) return 0;
    let res: number = 1;
    for(let value of args){
        res *= value;
    }
    return res;
}
//3.Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}
//4.Создать интерфейс Админа.
interface Admin {
    name: string;
    email: string;
    password: string;
    type?: string;
}

//Классы 
//1.Создайте абстрактный класс Car с двумя методами drive (ехать) и refuel (заправка) а также с двумя свойствами mileage (общий пробег машины) и fuel (количество бензина в машине).
abstract class Car {
    protected mileage: number;
    protected fuel: number;
    constructor(mileage, fuel) {
        this.mileage = mileage;
        this.fuel = fuel;
    }
    public abstract drive(distance): void;
    public abstract refuel(gas): void;
}
//2.Наследоваться от абстрактного класса Car и реализовать методы абстрактного класса drive (ехать) и refuel (заправка). Метод drive должен принимать количество километров и обновлять свойство mileage и уменьшать значение свойства fuel если бензин закончился то нужно вернуть сообщение о том что нужно заправиться. Метод refuel должен увеличивать свойство fuel. Обязательно делать проверку переданных данных. Свойства fuel и mileage должны быть protected.
class MyCar extends Car {
    
    constructor(mileage, fuel){
        super(mileage, fuel);
    }
    public drive(distance: number) {
        if(isNaN(distance)) return 'ошибка при введении данных'
        if(distance > (this.fuel *10)) return 'ошибка при введении данных, в баке недостаточно топлива для данной дистанции'
       this.mileage += distance;
       this.fuel -= distance/10
       if(this.fuel == 0) {

           return 'нужно заправиться'
        }
    }
    public refuel(gas: number) {
        gas > 0 ? this.fuel +=gas : console.log('ошибка при введении данных')
    }
    public get carInfo(){
        return `общий пробег машины: ${this.mileage}, количество бензина в машине: ${this.fuel}`
    }
}
//4.Создать публичный get для получения свойств fuel и mileage.
