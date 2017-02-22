//We can do it with regular Expressions
//  '\s' is the regex for "whitespace", and 'g' is the "global" flag, meaning match ALL \s (whitespaces).
function noSpace(x) {
    return x.replace(/\s/g, '');
}

// or we can use build in string dissection functions

function noSpace(x) {
    return x.split(' ').join('')
    // First split the string into an array of characters then join that array into a string again
}
