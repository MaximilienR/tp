//je créer mon construteur à partir du quel les voitures pourront être conçu
class Cars{ 

    constructor(marque,model,vitesse,compteur){
        this.marque=marque;
        this.model=model;
        this.vitesse=vitesse;
     // this.compteur=0;
          
    }     
    /*test1
    get getVitesse(){
        return this.vitesse;
    }
    set setVitesse(vitesse){
        this.vitesse +=vitesse+10;
    }*/
    
   
    
    /*je créer mes fonctions qui permet d'augementer ou diminuer la vitesse selon le cas*/ 
    tourne(){
        (this.vitesse -=5)
    }

    
 accelerer(){
  (this.vitesse+=10)
};
}


export default Cars

 