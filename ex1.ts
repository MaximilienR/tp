//ex 1 :créer une variable « names » qui n’accepte qu’un type String
let names: string = "Random"; 
console.log(names)
//ex 2 :
let speed:number=25;
console.log(speed)
//ex 3
let isLoading:boolean=true 
console.log(isLoading);
//ex 4 
let age: number|string =25;
console.log(age);
//ex 5 
 let colors  = ["blue"];
colors.push['red'];
console.log(colors);
/*ex 6

let infos : string|number|boolean [];
infos.push("dupond",true,40);
*/
//ex 7

let number = {
    firstName:'dupont',
    age:20,
    isLoggedin:true,
}
console.log(number.age);

//ex8
 
let  info:[string,number];
info = ["random",23];
 