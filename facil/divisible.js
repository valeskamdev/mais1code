const divisibleNumber = (x, y, z) => {
    if(x % y == 0 && x % z == 0) {
        return true;
    }
    return false;
}

console.log(divisibleNumber(3, 1, 3)); //true
console.log(divisibleNumber(100, 5, 3)); //false

