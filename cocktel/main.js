//stape 1 affiche les info dans la console 
var menu
var recherche=document.getElementById("search")
const ecran = document.getElementById("container");

alert('ok')
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
.then(response=>response.json())
.then(data=>{
        menu=data;
        console.log(menu);
        
    
    })
//stape 2 affiche écran
var commande = document.getElementById("search").value;
 

  function affiche() {
     console.log(recherche.value)
 }
 recherche.addEventListener("keyup",affiche)

 

 //test 


 
//stape 3 adapter selon la recherche  
