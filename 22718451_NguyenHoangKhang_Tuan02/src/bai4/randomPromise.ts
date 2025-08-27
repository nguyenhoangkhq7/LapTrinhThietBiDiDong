export const promise: Promise<number> = new Promise((resolve, reject) => {
  const randomNum: number = Math.random();
  if (randomNum <= 0.1) reject("Number small");
  resolve(randomNum);
});
