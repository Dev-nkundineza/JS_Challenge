function testPalindrome(testInput) {
    var remSpecChar = testInput.replace(/[^A-Z0-9]/gi, "").toLowerCase();
    // function to remove special characters and empty spaces and convert to lower case string

    var resultPalindrome = remSpecChar.split('').reverse().join('');

    if (remSpecChar === resultPalindrome) {
        return true;
    } else {
        return false;
    }

}

console.log(testPalindrome("Madam"));
console.log(testPalindrome("'1,7,1'"));
console.log(testPalindrome("Execute"));