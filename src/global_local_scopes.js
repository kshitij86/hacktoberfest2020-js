//LOCAL VARIABLES
//---------------
//Variables declared within a JavaScript function, become LOCAL to the function.
//Local variables have Function scope: They can only be accessed from within the function.

function myFunction() {
  var food = "Apple";
  console.log(food); // code here CAN use food variable
}
console.log(food); //code here CANNOT use food variable

//GLOBAL VARIABLES
//---------------
//A variable declared outside a function, becomes GLOBAL.
//A global variable has global scope: All scripts and functions on a web page can access it.

var food = "Apple";

console.log(food); // code here CAN use food variable

function myFunction() {
  console.log(food); // code here CAN use food variable
}
