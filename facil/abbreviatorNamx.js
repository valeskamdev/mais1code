const abbreviateName = name => {
    let initials = name.split(" ").map(n => n[0].toUpperCase()).join(".");
    return initials;
}

console.log(abbreviateName("Flora Walker")); //F.W
console.log(abbreviateName("Gabriel da Silva")); //G.D.S