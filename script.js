'use strict';


console.log(4/0);
console.log('string'*9);
let someth;
console.log(someth);


let person = {
  name: "John",
  age: 25,
  isMarried: false
};

console.log(person["name"]);

let arr = ['plum.png','orange.jpg','apple.bmp'];

console.log(arr[2]);

//alert("Hello");
//let answer = confirm("ARE you here?");
//console.log(answer);


//let answer = +prompt("Есть ли вам 18", "Да");
//console.log(typeof(answer));


//console.log("arr" + " - object");
//console.log("4" + " - object");
let incr = 10,
    decr = 10;


console.log(incr++);
console.log(decr--);

console.log("2"==="2");

let isChecked = true,
    isClose = false;

console.log(isChecked || !isClose);
