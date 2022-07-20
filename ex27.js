var prompt = require ('prompt-sync')();
 var date_Sup="10/10/1950"
 var date_Inf="10/10/1950"


function nb_Annees(date_Inf,date_Sup) {
    return dateUser-dateReduc
}

if (date_Sup<date_Inf) {
    tmp_date=date_Inf
    date_Inf=date_Sup
    date_Sup=tmp_date
}
if(nb_Annees>0){
}if (date_Sup.mois<date_Inf.mois){
    nb_Annees==nb_Annees-1
}else if (date_Sup.mois==date_Inf.mois)if(date_Sup.jours<date_Inf.jours){
    nb_Annees=nb_Annees-1
}

var ageOffre=prompt ("veuillez saisir l'age requis pour obtenir l'offre");
var day=prompt ("veuillez saisir la date du jour ");
var dateUser=prompt ("veuillez saisir une date");

let ageUser = nb_Annees={dateUser,day}

if (ageUser<=ageOffre) {
    console.log("vous pouvez obtenir notre promo")
} else {
    console.log("vous devez payer plein tarrif")
}