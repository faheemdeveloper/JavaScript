const age = "UserAge"
const objOne = {
    "username": "Faheem",
    [age]: 22,
    email: "fm@gmail.com",
    password: "Faheem78910",
    marks: 502,
    language: "Urdu",
    student: false,
    learning: "Frontend Development"
}

for (let i in objOne) {
    console.log(`${i} :=> ${objOne[i]}`)
}

console.log(`the username is ${objOne.username} or ${age} is ${objOne.UserAge}`)
console.log(objOne.username)

const objTwo = {
    username: "Faheem",
    age: 22,
    email: "fm@gmail.com",
    password: "Faheem78910",
    marks: 502,
    language: "Urdu",
    student: false,
    learning: "Frontend Development",

    greeting: function (value) {
        console.log(`The username is ${value}`)
    }
}

console.log(Object.keys(objOne), Object.values(objOne))
objTwo["job"] = 'Web development'
console.log(objTwo)
console.log(objTwo.greeting("faheem"))

const objThree = {
    username: "Faheem",
    age: 22,
    email: "fm@gmail.com",
    password: "Faheem78910",
    marks: 502,
    language: "Urdu",
    student: false,
    learning: "Frontend Development",

    userDetails: {
        country: "Pakistan",
        district: "Kohat",
        Tasel: "Gumbat",
        village: "Gandialy"
    }
}

let res = objThree.userDetails ?.district ?? "no Conditon match"
console.log(res)

const objFour = {
    username: "Faheem",
    age: 22,
    email: "fm@gmail.com",
    password: "Faheem78910",

    userDetails: {
        country: "Pakistan",
        district: "Kohat",
        Tasel: "Gumbat",
        village: "Gandialy"
    }
}

const groupone = {
    name: "wasid",
    email: "wr@gmail.com"
}

const grouptwo = {
    password: "wr1223",
    groupt: "A"
}

let reso = {...groupone, ...grouptwo};
console.log(reso)

const arrObj = {
    username: "Faheem",
    age: 22,
    email: "fm@gmail.com",
    password: "Faheem78910",
    marks: 502,
    language: "Urdu",
    student: false,
    learning: "Frontend Development",

    greeting: function (value) {
        console.log(`The username is ${value}`)
    }
}

let obj1 = { a: 10, b: 20 }
let obj2 = { b: 30, c: 50 }

let fullOBj = Object.assign({}, obj1, obj2)
console.log(fullOBj)

const map = new Map()
map.set("pk", "Pakistan")
map.set("in", "india")
map.set("us", "united state")
map.set("usa", "united state of america")
map.set("fr", "france")

for (let [key, value] of map) {
    console.log(`${key.toUpperCase()} :=> ${value.toUpperCase()}`)
}

const loopObj = {
    user: "Wasid",
    newage: 22,
    isStudent: false,
    job: false,

    Contact : {
        email: "wr@gmail.com",
        password : "1234",
        passDetail: {
            pass2 : "wr432"
        }
    }
}

const {user, newAge, isStudent, job, Contact: {email, password, passDetail: {pass2}}} = loopObj

console.log(pass2)