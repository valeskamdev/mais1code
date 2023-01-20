function abbreviateName(name) {
    let initials = name.split(" ").map(function(n){ return n[0].toUpperCase()});
    return initials.join(".")
}

console.log(abbreviateName("Flora Walker")); //F.W
console.log(abbreviateName("Gabriel da Silva")); //G.D.S