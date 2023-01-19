function stringEndsWith(word, subword) {
    return word.indexOf(subword, word.length - subword.length) != -1;
}
console.log(stringEndsWith("bolacha", "cha")); //true
console.log(stringEndsWith("bolacha", "ch"));  //false