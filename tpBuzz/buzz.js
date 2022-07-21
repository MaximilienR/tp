/*mes varibale */
var valeur = 0;
var resultat="";
/*fonction incremente +1*/
function add() {
    updateDisplay(valeur+=1);
    if (valeur % 3 ) {
       // alert("fid");
        document.getElementById('compteur').textContent = "fizz";

     }else if (valeur %5 ){
        //alert("buzz")
        document.getElementById('compteur').textContent = "buz";

     }else if (valeur %3 && valeur%5){
        alert("fidbuzz")
        document.getElementById('compteur').textContent = "fidbuzz";
        

     }

}
/*fonction incremente -*/
function del() {
    updateDisplay(valeur-=1);
    if (valeur % 3 ) {
        document.getElementById('compteur').textContent = "fidbuzz";
     }else if (valeur %5 ){
        alert("buzz")
        document.getElementById('compteur').textContent = "buz";

     }else if (valeur ==10)
     {
        alert("fidbuzz")
        document.getElementById('compteur').textContent = "fidbuzz";

     }

}
 

function updateDisplay(val) {
    document.getElementById("compteur").innerHTML = val;
}

 
   
    
 
