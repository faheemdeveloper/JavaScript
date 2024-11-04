class User {
    constructor(user, age, score) {
        this.user = user
        this.age = age
        this.score = score
    }

    printing() {
        console.log(`The user is ${this.user}`)
    }
}

const user = new User("Shehzad", 21, 70)
console.log(user.printing())

class UserTwo {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
}

UserTwo.prototype.print = function () {
    console.log(`the username ${this.username.toUpperCase()} and his email ${this.email}`)
}

const userTwo = new UserTwo("Wasid", "wr@gmail.com", "wasid12345")
console.log(userTwo.print())

class UserThree {
    constructor(user, email, password) {
        this.user = user
        this.email = email
        this.password = password
    }

    using() {
        return `${this.user.toUpperCase()}`
    }

    encrptPasswrod() {
        return `${this.password}abc`
    }
}

const userThree = new UserThree("Shehzad", "sh@gmail.com", "sh1234")
console.log(userThree.using())
console.log(userThree.encrptPasswrod())

function funUser(user, email, password) {
    this.user = user
    this.email = email
    this.password = password
}

funUser.prototype.using = function () {
    return `${this.user.toUpperCase()}`
}

funUser.prototype.encrptPassword = function () {
    return `${this.password}11`
}

const funcUsing = new funUser("Wasid", "wr@gmail.com", 'Rohi')
console.log(funcUsing.using())
console.log(funcUsing.encrptPassword())

class InheritUser {
    constructor(username) {
        this.username = username
    }
}

class InheritTeacher extends InheritUser {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }
}

const result = new InheritTeacher("Rizwan", "rizwi@gmail.com", "riz1234")
console.log(result)

class UserFour {
    constructor(user, email, password) {
        this.user = user
        this.email = email
        this.password = password
    }

    static printMe() {
        return `username ${this.user}`
    }
}

const userFour = new UserFour("nizam", "nz@gmail.com", 'ni1234')
console.log(userFour.printMe())

