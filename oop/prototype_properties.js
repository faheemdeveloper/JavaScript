// let PersonOne = function (user, score) {
//     this.user = user
//     this.score = score
// }

// PersonOne.prototype.increment = function() {
//     this.score++
// }

// PersonOne.prototype.printing = function () {
//     console.log(`The user score is ${this.score}`)
// }

// let personOne = new PersonOne("wasid", "22")
// console.log(personOne.printing())
// console.log(personOne.increment())

// const PersonTwo = function (user, email) {
//     this.user = user
//     this.email = email
// }

// PersonTwo.prototype.toUP = function () {
//     console.log(`${this.user.toUpperCase()}`)
// }

// let personTwo = new PersonTwo("shehzad", "sh@gmail.com")
// console.log(personTwo.toUP())

// let arr = ["wasid", "shehzad", "luqman"]

// const propObj = {
//     user: "Wasid",
//     userAge: 22,
//     userEmail: "wr@gmail.com"
// }

// Object.prototype.change = function () {
//     return `${arr[2].toUpperCase()}`
// }

// console.log(arr.change())

const objOne = {
    user: "wasid",
    isLoggedIn: true
}

const objTwo = {
    isPass: true,
    __proto__: objOne
}

const objThree = {
    isRiggistor: true,
    __proto__: objTwo
}

const objFour = {
    gaming: true,
    webSeries: true,
    __proto__: objThree
}


// console.log(objFour)

// const User = {
//     username: "wasid",
//     password: "1234"
// }

// const Teacher = {
//     isLoggedIn: true,
//     isGaming: false
// }

// const obj = Object.setPrototypeOf(Teacher, User)
// console.log(obj)

// const country = "pakistan       "

// Object.prototype.truelength = function (e) {
//     console.log(`The country name or length is: ${country.trim().toUpperCase()}`)
// }

// country.truelength()

