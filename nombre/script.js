alert("c'est repartie")

/*var essais = 0;

function incrementClick() {
    updateDisplay(essais+=1);
}*/
 
var compteur=0;
var solution ;
var chance=1;
var choixUser = document.getElementById("reponse").value;
var nombre =function RandomInt() {
    return Math.floor(Math.random() * 50);
  

   }
  //entrer nombre
    function play() {
      
    }
    //compteur
    function test(){
        Number
        document.getElementById("chance").innerHTML += chance +=+ 1;
        Number(choixUser)
        if (choixUser<nombre) {
            alert("choisisez un nombre plus grand");
        } else if (choixUser>nombre){
            alert("choissez un nombre plus petit");
        } else if (choixUser == nombre){
            alert("vous avez gagner");
        }else if (choixUser==""){
            alert("veuillez saisir un nombre");
        }}

    //recharger la page 
function reload(){
window.location.reload()
}