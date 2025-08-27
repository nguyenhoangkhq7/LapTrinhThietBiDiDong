export const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Something went wrong");
  }, 1000);
});
