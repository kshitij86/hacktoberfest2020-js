// A callback function is a function passed into another function
// as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

function greeting(name) {
  console.log(`Hello ${name}, welcome to Hacktoberfest!`);
}

function introduction(firstName, lastName, callback) {
  const fullName = `${firstName} ${lastName}`;

  callback(fullName);
}

introduction("Chris", "Nwamba", greeting);
