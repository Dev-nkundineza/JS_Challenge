'use strict';

function sortArray(arr) {
    let temp;

    function isNotPrime(val) {
        if (val <= 0) {
            return true;
        } else {
            for (let x = 2; x < val; x++) {
                if (val % x === 0) {
                    return true;
                }
            }
        }

        return false;
    }


    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++)

        //compare each array item with its preceed one
        {
            if (arr[i] < arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }


    }

    return arr.filter(isNotPrime);
}

console.log(sortArray([1, 2, 6, 4, 59]));
console.log(sortArray([18, 23, 6, 64, 59]));
console.log(sortArray([100, 101, 2, 6, 4, 59]));