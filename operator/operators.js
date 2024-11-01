// ************************************* Arithmetic Operators *************************************
let numOne = 5,
numTwo  = 8;
console.log(`a = ${numOne} b = ${numTwo}`)

console.log("a + b", numOne + numTwo)
console.log("a - b", numOne - numTwo)
console.log("a / b", numOne / numTwo)
console.log("a % b", numOne % numTwo)
console.log("a * b", numOne * numTwo)
console.log("a ** b", numOne ** numTwo)

// ************************************* Assignment Operators *************************************

let a = 5,
b  = 8;
console.log(a += b)
console.log(a + b)
let n = 4,
t = 4;
console.log(a += b)
console.log(a + b)

// ************************************* Comparison Operators *************************************

console.log(`6 == 4 ${6 == 4}`)
console.log(`4 === 4 ${4 === 4}`)
console.log(`4 != 4 ${4 != 4}`)
console.log(`4 !== 4 ${4 !== 4}`)
console.log(`4 < 4 ${4 < 4}`)
console.log(`4 <= 4 ${4 <= 4}`)
console.log(`4 > 4 ${4 > 4}`)
console.log(`4 >= 4 ${4 >= 4}`)

// ************************************* Logical Operators *************************************

let score = 17;

if (score >= 40 && score <= 50) {
    console.log("yess you can")
} else {
    console.log("you can not")
}

if(score >= 20 || score <= 40) {
    console.log("yess you can")
} else {
    console.log("you can not")
}

// ************************************* Ternary Operators *************************************

let Ternary = 60

let result = Ternary >= 50 ? "congo you pass" : "you not pass"
console.log(result)





