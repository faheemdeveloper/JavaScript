let username = "Faheem";
let userAge = 22;
let email = "fm@gmail.com";

const obj = { username, userAge, email }

console.log(obj.username)

let arrOne = ["faheem", "adil", "shehzad", "sohail"];
[, , , four] = arrOne

console.log(four)

let a = 10;
let b = 30;
[a, b] = [b, a]
console.log(a, b)

let objOne = {
    user: "Faheem",
    age: 22,
    ema: "fm@gmail.com"
}

const { user, age: userage, ema } = objOne
console.log(userage)

let arrTwo = [1, 2, 3, 4, 5, 6, 7, 8];
let copy = [...arrTwo]
console.log(copy)

let sum = (...number) => {
    return number.reduce((ocum, currElem) => {
        return ocum + currElem
    })
}

console.log(sum(3, 4, 5, 3, 5, 6, 7))

let arrThree = [1, 2, [3, [4, [5], 6, 7], 8], 9];

console.log(arrThree.flat(Infinity))

const objTwo = {
    username: "Faheem",
    email: "fm@gmail.com",
    password: "fm78910"
}

const objThree = {
    grade: "A"
}

console.log(Object.entries(objTwo))
let fullObj = Object.assign({}, objTwo, objThree)
console.log(fullObj)

console.log(Object.hasOwn(objTwo, "username"))

let objeFour = {
    userone: "Faheem",
    newUser: {
        secondUser: "Wasid",
        useremail: "wr@gmail.com",
        password: "1234"
    },
    greeting: function () {
        console.log(`the first User is: ${username}`)
    }
}

const { userone, newUser: { secondUser, useremail, password }, greeting } = objeFour
console.log(greeting())