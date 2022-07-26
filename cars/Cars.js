class Cars{ 

    constructor(marque,model,vitesse){
        this.marque=marque;
        this.model=model;
        this.vitesse=0;
         
    }     
    get getVitesse(){
        return this.vitesse;
    }
    set setVitesse(vitesse){
        this.vitesse +=vitesse+10;
    }
    }

    /*accelerer(){
        console.log()
    }
    //console.log(Cars)

*/
export default Cars

 