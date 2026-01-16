// const myArr = [0,1,2,3,5, true, "abhinav"]

const myArr = [0,1,2,3,4,5];

// js array are resizable

console.log(myArr[3]);

const myArr2= new Array(19,88,7,6,5)

//array methods
// myArr.push(6)
// myArr.pop()
// console.log(myArr)

myArr.unshift(9)  // saari elements ki position change hogi , 
//sabse aage add ho jaayega

console.log(myArr)

myArr.shift() //pehle waalan will pop out
console.log(myArr)

// questionaire type functions
console.log(myArr.includes(9)) // will give answers

console.log(myArr.indexOf(6))

const newArr = myArr.join() // will bind the array nad usko string mein converted ho jaayega
console.log(myArr)
console.log(typeof myArr)

//slice and splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1)

//slice last vaala index include nahi karta 
//splice last vaal index bhi oinclude karta hia nad array change bhi kar deta hai
//spliced rage is taken out

console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr)
console.log(myn2);
