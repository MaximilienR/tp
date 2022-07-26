class Cars{ 

    constructor(marque,model,vitesse,compteur){
        this.marque=marque;
        this.model=model;
        this.vitesse=vitesse;
        this.compteur=0;
          
    }     
    /*
    get getVitesse(){
        return this.vitesse;
    }
    set setVitesse(vitesse){
        this.vitesse +=vitesse+10;
    }*/
    
   
    
    
    tourne(){
        (this.vitesse -=5)
    }

    
 accelerer(){
  (this.vitesse+=10)
};
}


export default Cars

 