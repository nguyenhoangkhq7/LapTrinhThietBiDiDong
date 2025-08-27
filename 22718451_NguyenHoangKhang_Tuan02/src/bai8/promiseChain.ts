export const promiseChain: Promise<number> = new Promise<number>((resolve) => {
  resolve(5);
})
  .then((data: number) => {
    return Math.sqrt(data);
  })
  .then((data: number) => {
    return data * 2;
  })
  .then((data: number) => {
    return data + 5;
  });
