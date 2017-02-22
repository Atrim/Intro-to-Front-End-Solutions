//  https://www.codewars.com/kata/remove-string-spaces

// #Solutiuon 1 We can do it with regular Expressions
//  '\s' is the regex for "whitespace", and 'g' is the "global" flag, meaning match ALL \s (whitespaces).
function noSpace(x) {
    return x.replace(/\s/g, '');
}

// #Solution 2 Or we can use build in string dissection method

function noSpace(x) {
    return x.split(' ').join('')
    // First split the string into an array of substrings then join all the elements of that array into a string again
}

// Here are the MDN links for split() and join()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
