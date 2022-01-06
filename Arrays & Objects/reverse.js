function revFunction(arr) {

    let resArray = [];
    let i = arr.length - 1;

    while (i >= 0) {

        resArray.push(arr[i]);
        i--;
    }
    return resArray;

}

// b y using for loop

// function revFunction(arr) {

//     let resArray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         resArray.push(arr[i]);
//     }
//     return resArray;

// }

console.log(revFunction([1, 2, 3, 4, 5, 6]));
console.log(revFunction([-1, 0, 8, -7, 1, 9]));