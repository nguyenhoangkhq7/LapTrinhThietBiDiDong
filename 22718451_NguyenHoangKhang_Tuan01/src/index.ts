// câu 1
import BankAccount from "./BankAccount.js";
import Car from "./Car.js";
import Person from "./Person.js";
import Rectangle from "./Rectangle.js";
import Student from "./Student.js";

const person = new Person("Khang", 20)
console.log(person.infor());

//câu 2
const student = new Student("Khang", 20, "Đại học")
console.log(student.infor());

// câu 3
const car = new Car("Toyota", "AN1292485", 2016)
console.log(car.infor());

// câu 4
const rec = new Rectangle(4, 6);
console.log("Diện tích: " + rec.area());
console.log("Chu vi: " + rec.perimeter());

// câu 5
const bank = new BankAccount();
console.log(bank.deposit(100));
console.log(bank.withdraw(60));
console.log("Số dư hiện tại: " + bank.currentBalance());



