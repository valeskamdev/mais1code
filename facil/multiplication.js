const multiplicationTable = (number) => {
    for (var i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} x ${i} = ${result}`)
    }
}

multiplicationTable(3) // tabuada do 3 do 1 ao 10
