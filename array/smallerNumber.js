const findSmallestNumber = numbers => {
    let smallest = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest;
}

console.log(findSmallestNumber([35, 15, 1])); //1
console.log(findSmallestNumber([1, -10, 5, 6, 333])); //-10
