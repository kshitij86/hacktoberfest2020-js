/**
 * Currying helps in transforming a function from callable as f(a, b, c) into callable as f(a)(b)(c).
 */

/**
 * Consider a function which sums two numbers
 * without currying it will be called like sum(2,3) resulting in 5
 */
function sum(a, b) {
  return a + b;
}

/**
 * Curried version of the same is
 * sum(2)(3) should give 5
 * Here's how it'll look like
 */
function curriedSum(a) {
  // curry(f) does the currying transform
  return function (b) {
    return a + b;
  };
}

/**
 * Lets try and make it really generic for all funcitons with 2 arguments
 */
function curryifyWithTwoArgs(a) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

/**
 * Lets go a step furhter, and do it for any number of arguments
 * We will use rest parameter syntax to achieve this
 */
function genericCurrify(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

/**
 * Lets try with another example with more than 2 arguments. 
 * Lets assume we write a function to calucalte volume of a cuboid. 
 * The volume of a cuboid formula is given by, The volume of a cuboid = Length × Width × Height Cubic units.
 */
function volume (length, breadth, height) {
    return length*breadth*height
}
// Lets try with calulated volume directly for 2 X 3 X 4 = 24
volume(2,3,4) //returns 24

/**
 * Lets currify volume, using genericCurrify
 */
curriedVolume = genericCurrify(volume)

/**
 * Lets try it out
 */
curriedVolume(2)(3)(4) // returns same 24
