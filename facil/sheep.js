const countSheep = number =>  {
    for (let i = 1; i <= number; i++) {
         process.stdout.write(`${i} carneirinho...`); 
    }
}

countSheep(3); // 1 carneirinho...2 carneirinho...3 carneirinho...