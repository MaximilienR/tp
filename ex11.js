var prompt = require ('prompt-sync')();



const age2 = prompt("veuillir votre age   ");
if (age2 < 3 ){
console.log('vous êtes trop petit');
} 

else if (age2 >=3 && age2<6) 
console.log("vous êtes dans la categorie bebe");
  else if (age2 >6 && age2<9)
  console.log("vous êtes dans la categorie bebe");
  else if (age2 >9 && age2<11)
  console.log("vous êtes dans la categorie pupille");
  else if (age2 >10 && age2<13)
  console.log("vous êtes dans la categorie minime");
 else if(age2 >13 && age2<17)
 console.log("vous êtes cadet")
 else if(age2 >17 )
 console.log("vous êtes majeur")
 