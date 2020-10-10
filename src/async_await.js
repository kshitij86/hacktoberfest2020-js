/*
 * This is a example usage of Async/Await
 *
 * It's also a good practice to wrap your code in try catch as it may fail
 * and by doing this you can handle the exception accordingly
 */
async function myAsyncFunction() {
  console.log("started...");
  try {
    const result = await promise; // here we wait until the promise resolves
    console.log("result: ", result); // you can also return the result
  } catch (err) {
    throw new Error(err);
  }
}

/*
 * This is just a helper function to fake an asynchronous request
 */
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done!"), 2000);
});

// Here we fire our function
myAsyncFunction();
