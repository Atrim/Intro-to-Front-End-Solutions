
// #Solution 1 Using if else statement
function bonusTime(salary, bonus) {
    // your code here
    if (bonus === true) { // Condition is true
        return '£' + salary * 10; // then do this
    } else {
        return '£' + salary;// else do this
    }
}

//#Solution 2 Using Conditional Operator

function bonusTime(salary, bonus) {
  return '£' + salary * (bonus ? 10 : 1);
  // Works the same way as if/else if the bonus us true then expression 1 which is '10 is executed else expression 2'
}

// You can read more about conditional Operator on MDN link below
//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
