//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
// const outsideTemp = null
// console.log(typeof outsideTemp);  //output object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3    

// stack (primitive) 
// // isme og value ki copy milti hai

let myYoutubeName= "abhinavmalkotidotcom"
let anotherName= myYoutubeName
anotherName="chaiaurcode"

console.log(myYoutubeName)
console.log(anotherName)


// heap (non primitive)
// reference jab lete ho toh hume original hi milti hai, usme agar change karenge toh pehle vaali bhi ho jaayegi

let userOne ={
    email:"user@gmail.com", 
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email ="Abhi@malkoti.com"

console.log(userOne.email); // Abhi@malkoti.com
console.log(userTwo.email); // Abhi@malkoti.com
