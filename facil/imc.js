function calculateIMC(weight, height) {
    height /= 100;
    let imc = weight / (height * height);
    return imc.toFixed(1);
}

console.log(calculateIMC(90, 180)); //27.8
console.log(calculateIMC(78, 160)); //30.5
