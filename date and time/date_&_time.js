let date = new Date().toLocaleTimeString()
console.log(date)
const dateOne = new Date()
console.log(dateOne.setDate(12))
let changedate = new Date(1731398608362)
console.log(changedate)
let changemonth = dateOne.setMonth(4)
console.log(changemonth)
const changemon = new Date(1715497714961)
console.log(changemon)
const gettingMonth = dateOne.getMonth()
console.log(gettingMonth)

let dive = document.querySelector(".watch")

let dateFunction = (event) => {
    let time = new Date().toLocaleTimeString()
    dive.innerHTML = time
}

setInterval(dateFunction)

let newDate = new Date(2025, 12, 2, 12, 49, 2)
console.log(newDate)