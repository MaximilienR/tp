alert('foo')

//modilisation
class Article {

    constructor(text) {
        this.text = text;
    }

}

var product = new Article();


//afficher produit

function creat() {
     var art1= document.getElementById('prod').value;
    document.getElementById("ecran").innerHTML += art1;

};

let AddArt = () => {
    posts.innerHTML += `
  <div>
    <p>${ecran.text}</p>
    <span class="options">
       <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;
    input.value = "";
};

let deletePost = (e) => {
    e.parentElement.remove("ecran");

};


/* */
let add = document.getElementById('test')
let ecran =document.getElementById('ecran')

add.addEventListener('click', function(){
        let paragraphe = document.createElement(`p`)
        paragraphe.innerHTML=
        ecran.appendChild(paragraphe)
})

 var result = nb : (32%3=0 &&%5=0:"fizzbuz") 