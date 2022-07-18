
var prompt = require ('prompt-sync')();

function Palindrome(string) {

     const len = string.length;

     for (let i = 0; i < len / 2; i++) {

         if (string[i] !== string[len - 1 - i]) {
            return "ceci n'est pas un paladrom";
        }else {
            return 'ceci un  palindrome';
        }
    }
    
}

 const string = prompt('veuillez saisir un mot  ');

 
const value = Palindrome(string);

console.log(value);