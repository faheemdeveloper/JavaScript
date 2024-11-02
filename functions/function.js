// ******************************************** Normal Function ********************************************
function norFunc(a, b) {
    return `The sum of ${a} and ${b} is ${a + b}`
}

console.log(norFunc(4, 5))

// ******************************************** Fat Arrow Function ********************************************

let fatFunc = (a, b) => {
    return `The sum of ${a} and ${b} is ${a + b}`
}
console.log(fatFunc(4, 5))

// ******************************************** Function  Expresion ********************************************
let expreFunc = (a, b) => {
    return `The sum of ${a} and ${b} is ${a + b}`
}
console.log(expreFunc(4, 5))

let name = (name) => {
    console.log(`Hello ${name} Welcome to my website`)
}

name("wasid")
// ******************************************** Anonymos Function ********************************************
let AnonymosFunc = (function (a, b) {
    console.log(a + b)

})
AnonymosFunc(4, 5)


// ******************************************** IIFE Function ********************************************

(function (a, b) {
    console.log(`The sum of ${a} and ${b} is ${a + b}`)
})(5, 3)


// ******************************************** Practice ********************************************

let loginMessage = (username) => {
    if(username === undefined) {
        console.log("user just logged in")
        return
    }
    return `${username}`
}

console.log(loginMessage())

const sumofMultiNum = (...number) => {
    return number.reduce((ocum, curr) => {
        return ocum + curr
    })
}

console.log(sumofMultiNum(3, 3, 6, 8,7347 ,37734,  38439, 834, 23, 434))

let User = {
    username: "Faheem",
    email: "fm@gmail.com",
    password: "fm1234"
}

function gettingObj(user) {
    console.log(`Hello ${user.username} Welcome to my website`)
}

gettingObj(User)

let student = ["Faheem", "wasid", "shehzad", "shahzeb", "sohail"];

let gettingArr = function(arr) {
    return arr[0]
}

console.log(gettingArr(student))