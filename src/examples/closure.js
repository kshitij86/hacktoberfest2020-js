//Function inside a function that have access to the outer function variables

const setCounter = function (num) {
  let counter = 0;

  const count = function () {
    counter += num;
    console.log(counter);
  };

  return count;
};

const increment = setCounter(2);
increment(); // return 2
increment(); // return 4
increment(); // return 6

const addOne = setCounter(1);
addOne(); // return 1
addOne(); // return 2
addOne(); // return 3

//closures prevent the memory from setting variables free. 
//be careful when returning a function from a function. Memory leaks in javascript is a sensitive subject.
