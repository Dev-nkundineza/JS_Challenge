'use strict';

function countOccurence(arr) {
    let myObj = {}

    for (let i = 0; i < arr.length; i++) {
        if (myObj[arr[i]]) {
            myObj[arr[i]]++;
        } else {
            myObj[arr[i]] = 1;
        }
    }
    let y = Object.values(myObj);
    for (let val = 0; val < y.length; val++) {
        if (y[val] >= arr.length / 2) {
            return `has majority`;
        }


    }
    return `has no majority`;

    // return Object.values(myObj);

    //Object.getOwnPropertyNames(obj); this return the names of properties of an object
}



console.log(countOccurence([1, 2, 3, 3, 3, 3, 2, 3, 3]));
console.log(countOccurence([1, 2, 3, 2, 3, 7]));
console.log(countOccurence([1, 1, 1, 1, 1, 7]));
console.log(countOccurence([1, 2, 3, 4, 1, 7]));