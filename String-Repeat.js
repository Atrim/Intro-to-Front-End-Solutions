 // https://www.codewars.com/kata/string-repeat/javascript

// #Solution 1
 function repeatStr(n, s) {
     var str = ''; // new empty string variable
     for (i = 0; i < n; i++) {
         str += s;
     }
     // Now we are looping over the string the the existing string 's' will be added to our empty string 'str' everytime the loops runs
     return str; // returns the final string and exits the function
 }


// #Solution 2
//The repeat() method constructs and returns a new string which contains the specified number of   //copies of the string on which it was called, concatenated together.

 function repeatStr(n, s) {
     return s.repeat(n);
 }

 // You can see more examples of this on Mozilla Developer Network.
 // Here's the link:- //https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
