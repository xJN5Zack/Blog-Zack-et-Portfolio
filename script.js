let nom = prompt("votre nom");
let ageu = parseInt(prompt("votre age"));
if (ageu >= 18 && nom == 'Sofiane'){
    console.log('welcom')
}
else if (nom.length == ageu) {
    console.log('coincoincidence')
}
else if (nom == 'Paul'|| nom == 'Abby'){
    if (ageu > 30 && ageu < 50 ) {
        console.log('OK CA PASS')
    }
    else {
        console.log("bien vu")
    }
}
else{
    console.log('ziva')
}