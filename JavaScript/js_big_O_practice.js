"use strict"
function logFirstTwo(Arr) {
  console.log(Arr[0]);
  console.log(Arr[1]);
}

logFirstTwo([1,2,3,4]);
//This function has a constant runtime
//As the input size grows, we still only ever log out the first two elements
//Big O Notation: "O (1)"
//___________________________________________________________
function logAll(Arr) {
  for(let i = 0; i< Arr.length; i++){
    console.log(Arr[i]);
  }
}

logAll([1,2,3,4,5]);
logAll([1,2,3,4,5,6]);
logAll([1,2,3,4,5,6,7]);
//This function has a linear run timeout
//The runtime is linearly proportional to the input
//Big O Notation: "O(n)"
//___________________________________________________________
function addAndLog(Arr) {
  for (let i = 0; i < Arr.length; i++) {
   for (let j = 0; j < Arr.length; j++) {
        console.log(Arr[i] + Arr[j]);
   }
  }
}
addAndLog(['A','B','C']);// 9 pairs logged out
addAndLog(['A','B','C','D']);//16 pairs logged out
addAndLog(['A','B','C','D','E']);//25 pairs logged out
//This function has an exponential runtime
//The runtime is proportional to the square of the input
//Big O Notation: "O(n^2)"
//___________________________________________________________

function binarySearch(Arr, key) {
  let low = 0;
  let high = Arr.length -1;
  let mid;
  let element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = Arr[mid];
    if (element < key) {
      low = mid + 1;
    }else if (element > key) {
      high = mid - 1;
    }else {
      return mid;
    }

  }
  return -1;
}
//This function has a logarithmic runtime
//this is due to the fact that with each operation we cut our input in half
//Big O Notation: "O(log n)"
