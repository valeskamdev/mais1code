const countSheep = number =>  {
    let count = "";
    for (let i = 1; i <= number; i++) {
        count += `${i} carneirinho...`; 
    }
    return count;
}

console.log(countSheep(3)); // 1 carneirinho...2 carneirinho...3 carneirinho...