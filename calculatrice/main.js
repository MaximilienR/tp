//alert("ok")
//mes variables 
let buttons =Array.from(document.getElementsByClassName('button')) ;
let number2

console.log(buttons)

function play(val) {
    var number1 = val;
    document.getElementById('ecran').value =number1  
}

function total(val){
 var total =val.value+val.value
 document.getElementById('ecran').value =total
 alert(n)
}

function reset(){
  location.reload()
}

 //+
if (operator == '+') {
  result = number1 + number2;
}
//-
else if (operator == '-') {
  result = number1 - number2;
}
//*
else if (operator == '*') {
  result = number1 * number2;
}// %
else {
  result = number1 / number2;
}