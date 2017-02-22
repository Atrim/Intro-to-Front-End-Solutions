// https://www.codewars.com/kata/heads-and-legs/javascript


function animals(heads, legs) {
    // Checks the condition if 0 heads and 0 legs are given always return [0, 0] since zero heads must give zero animals.
    if (heads == 0 && legs == 0)
        return [0, 0];
    // Checks If either the given value of heads or legs is negative
    if (heads < 0 || legs < 0)
        return 'No solutions';
    var cows = legs / 2 - heads;
    var chickens = heads - cows;
    /*
    This is how we got the equations
    heads =chickens + cows            // Multiply by 2 ==> 2heads = 2*chickens + 2*cows
    legs = 2 * chickens + 4 * cows

  That Gives

  2cows = legs - 2heads ==> Further Simplifying // cows = legs/2 - heads
    */
    if (cows < 0 || chickens < 0 || cows % 1 > 0 || chickens % 1 > 0) {
      // Checks if either the output value of cows or chickens is in negative or in decimals
        return 'No solutions';
    }
    return [chickens, cows];
}
