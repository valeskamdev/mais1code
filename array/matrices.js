function arrayOfArray(array) {
    let result = [];
    for (let subArray of array) {
        for (let element of subArray) {
            result = result.concat(element);
        }
    }
    return result;
}

console.log(arrayOfArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]