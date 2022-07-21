var valeur = 0;
var resultat="";

function add() {
    updateDisplay(valeur+=1);
    if (valeur % 3 ) {
        alert("fid")
     }else if (valeur %5 ){
        alert("buzz")
     }else if (valeur %3 && valeur%5){
        alert("fidbuzz")
     }

}
function del() {
    updateDisplay(valeur-=1);
    if (valeur % 3 ) {
        alert("fid")
     }else if (valeur %5 ){
        alert("buzz")
     }else if (valeur ==5)
     {
        alert("fidbuzz")
     }

}
 

function updateDisplay(val) {
    document.getElementById("compteur").innerHTML = val;
}

 
    if (valeur % 3 ) {
        alert("fid")
     }else if (valeur %5 ){
        alert("buzz")
     }else if (valeur %3 && valeur%5){
        alert("fidbuzz")
     }

    
 
