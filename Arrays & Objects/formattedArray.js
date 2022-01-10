'use strict';
const myFunction = (arr) => {
    let obj = {};
    arr.forEach((item) => {
        const newArray = item.split(",");
        const FirstElement = newArray[0].split(" ");


        if (!obj[FirstElement[0]]) {
            obj[FirstElement[0]] = {

                second_name: FirstElement[1],
                age: newArray[1]
            };
        }

    });
    return obj;

}

console.log(myFunction(["patrict Ineza,30", "Lily Wyne,32", "Eric Mimi,21", "Dodos deck,21"]));