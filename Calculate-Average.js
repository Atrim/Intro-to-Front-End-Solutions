// https://www.codewars.com/kata/calculate-average/javascript

function find_average(array) {
  return array.reduce(function(a,b){return a+b;}) / array.length;
  // The reduce() method reduces each value of an array into a single value given according to the callback function in which we are added the previous value and the current value and then diving it by the array length
}

// Read more about the reduce method on MDN on the link below
//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
