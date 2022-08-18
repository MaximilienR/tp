function buildAddress(adresse:string){
    return adresse
}

let res = buildAddress('1234 Anywhere St',)

console.log(res)

//let res2=buildAddress2('24 rue des passants')


function buildAddress2(adresse:string){
    let test =prompt('veuillez saisir une adresse seconde adresse')
    console.log(test)
    return adresse
}


//rest 

const divEx6 = document.getElementById("ex6");

let Address=function(arg:string){
    const h1 = document.createElement("h1");
    h1.innerHTML = `Adresse :${arg}`;

} 
//divEx6?.();

Address("addresse1");
Address("addresse2");