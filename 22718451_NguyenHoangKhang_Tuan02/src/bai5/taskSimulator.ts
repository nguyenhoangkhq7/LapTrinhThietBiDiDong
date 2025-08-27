export function taskSimulator(time: number): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`Task done after ${time / 1000} second!`);
    }, time);
  });
}
