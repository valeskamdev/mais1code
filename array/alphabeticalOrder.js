const alphabeticalOrder = words => {
    for (let i = 0; i < words.length; i++) {
        for (let j = i; j < words.length; j++) {
            if (words[i] > words[j]) {
                let aux = words[i];
                words[i] = words[j];
                words[j] = aux;
            }
        }
    }
    return words;
}

console.log(alphabeticalOrder(["Zebra", "Lontra", "Peixe", "Gato"])); // [ 'Gato', 'Lontra', 'Peixe', 'Zebra' ]
console.log(alphabeticalOrder(["Laranja", "Amora", "Banana", "Jaca"])); // [ 'Amora', 'Banana', 'Jaca', 'Laranja' ]