"use strict"
/*general structure of recursive functions
function func(){
  if (*base case*) {
    return something;
  }else {
  //recursive case
    func()
  }
}
*/

//Factorial(!)
//4! = 4 * 3 * 2 * 1 = 24

//3! = 3 * 2 * 1 = 6

function factorial(num) {
  if (num === 1) { //base case--this could also just be (num === 2) (because anything times 1 is just itself, so no need to explicitly do that operation)
    return num;
  } else { //recursive case
      return num * factorial(num - 1); //this is where the recursion happens
  }
}
//Whenever working with recursion
//always consider the current and overall state of the call stack

console.log(factorial(4));
