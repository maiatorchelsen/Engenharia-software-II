const nome = "John";
const idade = 30;

console.log(`My name is ${nome} and I am ${idade} years old.`);
function greet() {
    console.log("olá, welcome to the JavaScript world!");
}
greet();
const add = (a, b) => a + b;
console.log(`The sum of 5 and 3 is ${add(5, 3)}.`);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}
const john = new Person("John", 30);
john.introduce();       
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(`Squared numbers: ${squaredNumbers.join(", ")}`);
