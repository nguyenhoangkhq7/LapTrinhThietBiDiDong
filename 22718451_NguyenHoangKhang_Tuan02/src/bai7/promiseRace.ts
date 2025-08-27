const promise1: Promise<number> = new Promise((resolve) => {
  resolve(5);
});
const promise2: Promise<number> = new Promise((resolve) => {
  resolve(10);
});
const promise3: Promise<number> = new Promise((resolve) => {
  resolve(15);
});
export const promiseRace = Promise.race([promise1, promise2, promise3]);
