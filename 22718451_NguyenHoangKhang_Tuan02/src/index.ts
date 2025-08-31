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
// new Promise<string>((resolve) => {
//   resolve("Ok");
// })
//   .then((data: string) => {})
//   .finally(() => {
//     console.log("Done");
//   });

// câu 11 Convert Exercise 1 (Create a Promise that returns the string "Hello Async" after 2 seconds.) into async/await
// const helloAsync = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello Async");
//     }, 2000);
//   });
// };

// helloAsync().then((data) => {
//   console.log(data);
// });

// câu 12 Write a function that returns a Promise resolving with the number 10 after 1 second.
// const getNumberAsyncFunc = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(10);
//     }, 1000);
//   });
// };
// getNumberAsyncFunc().then((data) => {
//   console.log(data);
// });

// câu 13 Write a function that rejects a Promise with the error "Something went wrong" after 1 second.
// const goWrongAsyncFunc = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Something went wrong");
//     }, 1000);
//   });
// };
// goWrongAsyncFunc().catch((data: string) => {
//   console.log(data);
// });

// câu 14 Use .then() and .catch() to handle a Promise that returns a random number.
const randomNumber = async (): Promise<number> => {
  return new Promise<number>((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber >= 0.5) resolve(randomNumber);
    reject(randomNumber);
  });
};
// randomNumber()
//   .then((data: number) => {
//     console.log("resolve " + data);
//   })
//   .catch((data: number) => {
//     console.log("reject " + data);
//   });

//câu 15 Call multiple async functions sequentially using await.
// const multipleAsyncFunc = async (): Promise<string[]> => {
//   const a: string = await new Promise((resovle) => {
//     setTimeout(() => {
//       resovle("Promise 1");
//     }, 1000);
//   });
//   const b: string = await new Promise((resovle) => {
//     setTimeout(() => {
//       resovle("Promise 2");
//     }, 1000);
//   });
//   const c: string = await new Promise((resovle) => {
//     setTimeout(() => {
//       resovle("Promise 3");
//     }, 1000);
//   });
//   return [a, b, c];
// };
// multipleAsyncFunc().then((data: string[]) => {
//   data.forEach((item) => {
//     console.log(item);
//   });
// });

// câu 16 Call multiple async functions in parallel using Promise.all().
// const multipleAsyncFuncAll = async (): Promise<string[]> => {
//   const [a, b, c] = await Promise.all([
//     Promise.resolve("Promise 1"),
//     Promise.resolve("Promise 2"),
//     Promise.resolve("Promise 3"),
//   ]);
//   return [a, b, c];
// };
// multipleAsyncFuncAll().then((data: string[]) => {
//   data.forEach((item) => {
//     console.log(item);
//   });
// });

// const promises = [
//   Promise.resolve("Task 1 done"),
//   Promise.resolve("Task 2 done"),
//   Promise.resolve("Task 3 done"),
// ];

// async function forAwaitOf() {
//   for await (const result of promises) {
//     console.log(result);
//   }
// }
// forAwaitOf();

// câu 18 Write an async function fetchUser(id) that simulates an API call (resolves a user object after 1 second).
type User = {
  id: number;
  name: string;
  age: number;
};

// const fetchUser = async (id: number): Promise<User> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id, name: "Khang", age: 22 });
//     }, 1000);
//   });
// };

// fetchUser(1).then((data: User) => {
//   console.log(data);
// });

// câu 19 Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID.
// const fetchUsers = async (ids: number[]): Promise<User[]> => {
//   const promises = ids.map((id) => fetchUser(id));
//   return await Promise.all(promises);
// };

// fetchUsers([1, 2, 3, 4]).then((data: User[]) => {
//   data.forEach((user) => {
//     console.log(user);
//   });
// });

// câu 20 Add a timeout: if the API call takes more than 2 seconds, throw an error.
// const fetchUser = async (id: number): Promise<User> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id, name: "Khang", age: 22 });
//     }, 3000); // 3 giây
//   });
// };

// const fetchUsers = async (ids: number[]): Promise<User[]> => {
//   const promises = ids.map((id) => fetchUser(id));
//   return await Promise.all(promises);
// };

// const timeout = (): Promise<never> => {
//   return new Promise((_, reject) => {
//     setTimeout(() => reject(new Error("Time out")), 2000);
//   });
// };

// const getUsers = async (ids: number[]): Promise<User[]> => {
//   return Promise.race<User[]>([fetchUsers(ids), timeout()]);
// };

// getUsers([1, 2, 3])
//   .then((data: User[]) => {
//     data.forEach((user) => console.log(user));
//   })
//   .catch((err: Error) => {
//     console.error("Error:", err.message);
//   });

// câu 21
type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const fetchTodo = async (id: number): Promise<Todo> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: Todo = await response.json();
  return data;
};

// Test
// fetchTodo(1)
//   .then((todo: Todo) => {
//     console.log("Todo:", todo);
//   })
//   .catch((err: Error) => {
//     console.error("Error:", err.message);
//   });

// câu 22
// const fetchMultipleTodos = async (ids: number[]): Promise<void> => {
//   const promises = ids.map((id) => fetchTodo(id));
//   const todos = await Promise.all(promises);

//   todos.forEach((todo) => {
//     console.log("Todo:", todo);
//   });
// };

// Test
// const fetchMultipleTodos = async (ids: number[]): Promise<Todo[]> => {
//   const promises = ids.map((id) => fetchTodo(id));
//   const todos = await Promise.all(promises);

//   return todos;
// };

// fetchMultipleTodos([1, 2, 3, 4, 5]).then((data: Todo[]) => {
//   const listTodos = data.filter((todo) => !todo.completed);
//   console.log(listTodos);
// });

// câu 24 Write an async function postData() that sends a POST request to a test API.
type PostPayload = {
  title: string;
  body: string;
  userId: number;
};
type PostResponse = PostPayload & {
  id: number;
};

const postData = async (payload: PostPayload): Promise<PostResponse> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error("Failed to post data");
  }
  return response.json();
};

// Test
// postData({ title: "Hello", body: "This is a test post", userId: 1 })
//   .then((data: PostResponse) => {
//     console.log("Posted:", data);
//   })
//   .catch((err: Error) => {
//     console.error("Error:", err.message);
//   });

// câu 25
const downloadFile = (): Promise<void> => {
  return new Promise((resolve) => {
    console.log("Downloading file...");
    setTimeout(() => {
      console.log("Download complete!");
      resolve();
    }, 3000);
  });
};

// Test
downloadFile();
