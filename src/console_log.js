// console.log are used mainly for debugging, and you do not really keep them for production.

// They can be used for both client and server side, meaning browser or backend with node.js.

console.log('Hello World!');

// This is an example of console.log(), I will show you how to log from an api.

// Going to make a fetch request and log the results using console.log()

const url = "https://no-api-key.com/api/v1/facts";

fetch(url).then(res => res.json()).then(data => console.log(data));

/* as you can see we are console.log() data, which will return the json from that api. which is a random fact. */