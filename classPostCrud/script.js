 /*ecrire un commantaire*/ 
function creat() {
     var com1= document.getElementById('commentaires').value;
console.log(com1)
document.getElementById("ecran").innerHTML += com1;

};
//stocker 
function sav(commantaire){
    localStorage.setItem("commentaire",commantaire)

}
//affihcer
function affichage(){
    localStorage.getItem("commentaire")
}
//add 
function add(){
    let newCom= affichage()
    newCom.push(commantaire)
}

 
function test() {
   

}
/*
function delet(){
    var com1= document.getElementById('commentaires').value;

} */

/*



  

delete
tabCom = [com1];
delete tabCom[0];
console.log(tabCom);
*/

if