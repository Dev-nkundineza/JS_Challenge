function inplaceArray(arr) {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;

}


console.log(inplaceArray([1, 2, 3, 4, 5, 7]))
console.log(inplaceArray([0, 2, -1, 4, 5, 55]))