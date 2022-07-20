var prompt = require ('prompt-sync')();
 
 
  

var heure=prompt ("veuillez saisir une heure");
var minute=prompt ("veuillez saisir les minute");
var seconde=prompt ("veuillez saisir les second");

var h =heure*3600
var m =minute*60
total=h+m+seconde


console.log("cela donnerais " + total + "seconde")

