const person1 = {
    firstName: "Wasid",
    lastName: "Rehman"
}

const person2 = {
    firstName: "Shehzad",
    lastName: "Khan"
}

function getting(value) {
    console.log(`${value} ${this.firstName} ${this.lastName}`)
}

getting.call(person1, "welcome")
getting.call(person2, 'welcome to you ')


const User = function (username) {
    this.username = username
}

const Teacher = function (username, email, password) {
    User.call(this, username)
    this.email = email
    this.password = password

    this.greet = function () {
        console.log(`The Teacher user is: ${this.username}`)
    }
}

const userOne = new Teacher("Sohail", "sohai@gmail.com", "soh12345")
console.log(userOne.greet())