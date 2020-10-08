function throttledFunction(orignalFunction, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    orignalFunction.apply(this, arguments);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

/* 
-----------------EXAMPLE--------------------
orignal call   ==> orignalFunction = randomEvent() (for each click we would have one event call)
throttled call ==> throttledFunction = setTimeout(randomEvent(), DELAY) (the event will be called only after the delay time has ellapsed)
*/
