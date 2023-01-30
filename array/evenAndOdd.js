const evenAndOdd = array => {
    let evenArray = array.filter(x => x % 2 === 0).sort();
    let oddArray = array.filter(x => x % 2 !== 0).sort();

    return evenArray.concat(oddArray);
}

console.log(evenAndOdd([1, 2, 3, 4, 5])); // [ 2, 4, 1, 3, 5 ]
console.log(evenAndOdd([5, 3, 1, 2, 6, 4])); // [ 2, 4, 6, 1, 3, 5 ]