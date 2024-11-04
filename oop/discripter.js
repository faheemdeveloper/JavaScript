const userOne = {
    username: "Faheem",
    email: 'fm@gmail.com',
    password: "1234"
}

Object.defineProperty(userOne, "username", {
    writable: false,
    configurable: false
})

    let userone = Object.getOwnPropertyDescriptor(userOne, "username")
    console.log(userone)

let pi = Math.PI
console.log(pi)

Object.defineProperty(Math, "PI", {
    writable: true,
    configurable: true,
    enumerable: true
})

let dis = Object.getOwnPropertyDescriptor(Math, "PI")