'use strict';

function testPalindrome(testInput) {
    let inputToLower = testInput.toLowerCase(); // change the input to lowerCase
    let resultPalindrome = inputToLower.split('');
    let resString = "";

    for (let i = resultPalindrome.length - 1; i >= 0; i--) {
        resString += resultPalindrome[i];
        if (inputToLower === resString) {
            return true;
        }
    }

    return false;
}

console.log(testPalindrome("#madam# #madam#"));
console.log(testPalindrome("'1,7,1'"));
console.log(testPalindrome("Execute"));
console.log(testPalindrome("level"));