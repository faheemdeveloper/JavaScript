let Person = function (username, email, password) {
    this.username = username;
    this.email = email
    this.password = password
}

let personOne = new Person("Wasid", "wr@gmail.com", "wr1234")
console.log(personOne instanceof  Person)

const FuncTwo = function (username, email, password) {
    this.username = username;
    this.email = email
    this.password = password
    this.greeting = function () {
        console.log(`Hello ${username} Welcome to my website`)
    }
}

let person = new FuncTwo("Wasid", "wr@gmail.com", "wr1234")
console.log(person.greeting())