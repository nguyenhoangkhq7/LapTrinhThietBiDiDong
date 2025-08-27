// bài 1
// import { promise } from "./bai1/helloPromise.js";
// promise.then((data: number) => {
//   console.log(data);
// });

// bài 2
// import { promise } from "./bai2/numberPromise.js";
// promise.then((data: number) => {
//   console.log(data);
// });

// bài 3
// import { promise } from "./bai3/wentWrongPromise.js";
// promise.catch((data: number) => {
//   console.log(data);
// });

// bài 4
// import { promise } from "./bai4/randomPromise.js";

// promise
//   .then((data: number) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// bài 5
// import { taskSimulator } from "./bai5/taskSimulator.js";

// taskSimulator(5000).then((data: string) => {
//   console.log(data);
// });

// bài 6
// import { promiseAll } from "./bai6/promiseAll.js";
// promiseAll.then((data: number[]) => {
//   data.forEach((num) => {
//     console.log(num);
//   });
// });

// bài 7
// import { promiseRace } from "./bai7/promiseRace.js";
// promiseRace.then((data: number) => {
//   console.log(data);
// });

// bài 8
// import { promiseChain } from "./bai8/promiseChain.js";
// promiseChain.then((data: number) => {
//   console.log(data);
// });

// bài 9 Write a Promise that reads an array after 1 second and filters even numbers.
// function filterEvenNum(arr: number[]): Promise<number[]> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const arrFilter = arr.filter((num) => {
//         return num % 2 == 0;
//       });
//       resolve(arrFilter);
//     }, 1000);
//   });
// }

// const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// filterEvenNum(nums).then((data) => {
//   console.log(data);
// });

// câu 10 Use .finally() to log "Done" when a Promise finishes (success or failure).
new Promise<string>((resolve) => {
  resolve("Ok");
})
  .then((data: string) => {})
  .finally(() => {
    console.log("Done");
  });
