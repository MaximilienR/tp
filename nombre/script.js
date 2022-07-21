alert("yoyuhou")

/*var essais = 0;

function incrementClick() {
    updateDisplay(essais+=1);
}*/
 
var compteur=0;
var solution ;
var choixUser = document.getElementById("reponse").value;
var nombre =function RandomInt(max) {
    return Math.floor(Math.random() * 50);
    console.log(max)

   }
  
    function play() {
        Number(choixUser)
        if (choixUser<nombre) {
            alert("choisisez un nombre plus grand");
        } else if (choixUser>nombre){
            alert("choissez un nombre plus petit");
        } else if (choixUser == nombre){
            alert("vous avez gagner");
        }else if (choixUser==""){
            alert("veuillez saisir un nombre");
        }
    }
    //compteur
    function test(){
        Number
        document.getElementById("chance").innerHTML += 1;}

    //recharger la page 
function reload(){
window.location.reload()
}