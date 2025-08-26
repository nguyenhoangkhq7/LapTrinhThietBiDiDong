// câu 1
// import BankAccount from "./bai5/BankAccount.js";
// import Person from "./bai1/Person.js";
// import Rectangle from "./bai4/Rectangle.js";
// import Student from "./bai2/Student.js";
// import Product from "./bai8/Product.js";
// import { Bird } from "./bai12/Bird.js";
// import { Fish } from "./bai12/Fish.js";
// import Box from "./bai16/Box.js";
// import Logger from "./bai17/Logger.js";
// import MathUtil from "./bai18/MathUtil.js";
// import Animal from "./bai19/Animal.js";
// import Dog from "./bai19/Dog.js";
// import Cat from "./bai19/Cat.js";
// import type { Vehicle } from "./bai20/Vehicle.js";
// import { Bike } from "./bai20/Bike.js";
// import { Car } from "./bai20/Car.js";
// import Repository from "./bai21/Repository.js";
// import { Book } from "./bai21/Book.js";

import Stack from "./bai22/Stack.js";

// const person = new Person("Khang", 20);
// console.log(person.infor());

// //câu 2
// const student = new Student("Khang", 20, "Đại học");
// console.log(student.infor());

// // câu 3
// const car = new Car("Toyota", "AN1292485", 2016);
// console.log(car.infor());

// // câu 4
// const rec = new Rectangle(4, 6);
// console.log("Diện tích: " + rec.area());
// console.log("Chu vi: " + rec.perimeter());

// // câu 5
// const bank = new BankAccount();
// console.log(bank.deposit(100));
// console.log(bank.withdraw(60));
// console.log("Số dư hiện tại: " + bank.currentBalance());

// const products: Product[] = [
//   new Product("Book", 50),
//   new Product("Phone", 300),
//   new Product("Pen", 20),
//   new Product("Laptop", 1200),
// ];

// const filtered = products.filter((p) => p.getPrice() > 100);
// console.log(filtered.map((p) => p.getName()));

// câu 11

// const dog = new Dog("dog");
// console.log(dog.bark());

// câu 12
// const bird = new Bird("Cúc cu");
// const fish = new Fish("Cá hồi");
// console.log(bird.fly());
// console.log(fish.swim());

// câu 16
// const numberBox = new Box<number>(123);
// console.log(numberBox.getValue());

// const stringBox = new Box<string>("Hello world");
// console.log(stringBox.getValue());

// câu 17
// Logger.getInstance().log("Đây là message bằng Logger");

// câu 18
// console.log(MathUtil.add(6, 3));
// console.log(MathUtil.subtract(5, 4));
// console.log(MathUtil.multiply(8, 8));
// console.log(MathUtil.divide(8, 8));

// câu 19
// const animals: Animal[] = [new Animal(), new Dog(), new Cat()];
// animals.forEach((animal) => {
//   console.log(animal.sound());
// });

// câu 20
// const vehicles: Vehicle[] = [new Car("Toyota"), new Bike("Yamaha")];

// for (const v of vehicles) {
//   console.log(v.move());
// }

// câu 21
// const bookRepo = new Repository<Book>();
// bookRepo.add(new Book("Clean Code"));
// bookRepo.add(new Book("Design Patterns"));

// console.log(bookRepo.getAll().map((b) => b.info()));

// câu 22
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.isEmpty());
