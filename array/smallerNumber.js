function findSmallestNumber(numbers) {
    return Math.min(...numbers);
}

console.log(findSmallestNumber([35, 15, 1])); //1
console.log(findSmallestNumber([1, -10, 5, 6, 333])); //-10
