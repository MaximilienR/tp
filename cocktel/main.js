//stape 1 relier le js
alert('js relier')

//stape 2 affiche les info dans la console 
var menu
var recherche=document.getElementById("search")
const ecran = document.getElementById("container");


fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
.then(response=>response.json())
.then(data=>{
        menu=data;
        console.log(menu);
        retour();
        
    
    })
//stape 2 prendre en compte une  recherhce dans la console 
var commande = document.getElementById("search").value;
 

  function affiche() {
     console.log("vous avez recherche le produit"+"  " + recherche.value)
 }
 recherche.addEventListener("keyup",affiche)



 
//stape 3 afficher les produits  

 
    
function retour() {ecran.innerHTML=`
 <div class="card-body">
  <h5 class="card-title">${menu.personale.strIngredient3}</h5>
 </div>
`
    
}
 
