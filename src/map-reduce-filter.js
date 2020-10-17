// Remove duplicates from an array of numbers/strings

const values = [3, 1, 3, 5, 2, 4, 4, 4];
const uniqueValues = [...new Set(values)];
// uniqueValues is [3, 1, 5, 2, 4]

// A simple search (case-sensitive)
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const users = [
  { id: 11, name: "Adam", age: 23, group: "editor" },
  { id: 47, name: "John", age: 28, group: "admin" },
  { id: 85, name: "William", age: 34, group: "editor" },
  { id: 97, name: "Oliver", age: 28, group: "admin" },
];
let res = users.filter((it) => it.name.includes("oli"));
// res is []

// Flattening an array of arrays
// The result of the first iteration is equal to : […[], …[1, 2, 3]] means it transforms to [1, 2, 3] —
// this value we provide as an ‘acc’ on the second iteration and so on.

const nested = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let flat = nested.reduce((acc, it) => [...acc, ...it], []);
// flat is [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Indexing an array of objects (lookup table)
// Instead of processing the whole array for finding a user by id, we can construct an object where the
// user’s id represents a key (with constant searching time).

const uTable = users.reduce((acc, it) => ((acc[it.id] = it), acc), {});
// uTable equals:
// {
//   11: { id: 11, name: 'Adam', age: 23, group: 'editor' },
//   47: { id: 47, name: 'John', age: 28, group: 'admin' },
//   85: { id: 85, name: 'William', age: 34, group: 'editor' },
//   97: { id: 97, name: 'Oliver', age: 28, group: 'admin' }
// }

// Extract the unique values for the given key of each item in the array
// Let’s create a list of existing users’ groups. The map() method creates a new array with the results of
// calling a provided function on every element in the calling array.

const listOfUserGroups = [...new Set(users.map((it) => it.group))];
// listOfUserGroups is ['editor', 'admin'];

// Object key-value map reversal
const cities = {
  Lyon: "France",
  Berlin: "Germany",
  Paris: "France",
};
let countries = Object.keys(cities).reduce(
  (acc, k) => ((acc[cities[k]] = [...(acc[cities[k]] || []), k]), acc),
  {}
);

// countries is
// {
//   France: ["Lyon", "Paris"],
//   Germany: ["Berlin"]
// }
