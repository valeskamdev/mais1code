const findNumber = (array, number) => {
    for (let num of array) {
        if (num === number) {
            return num;
        } 
    } 
    return -1;
}

console.log(findNumber([1,3,5,7], 5)); // 5
console.log(findNumber([1,3,5,7], 10)); // -1