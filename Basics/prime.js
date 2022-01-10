'use strict';

function checkPrime(arr1) {
    var resArray = [];

    for (var i = 0; i < arr1.length; i++) {
        if (isPrime(arr1[i])) {
            resArray.push(arr1[i])
        }

    }

    function isPrime(val) {
        if (val < 0 || val == 0) {
            return false;
        }
        for (x = 2; x < val; x++) {
            if (val % x === 0) {
                return false;
            }
        }
        return true;
    }
    return resArray;
}

console.log(checkPrime([4, 6, 8, 7, 13, 14]));
console.log(checkPrime([-2, 9, 0, 17, 23, 19]));