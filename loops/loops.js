for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)

    }
}

for (let num = 0; num <= 100; num++) {
    if (num % 5 == 0) {
        console.log(num)
    }
}

let number = 0
do{
    if(number % 2 == 0) {
        console.log(number)
    }
    number++
} while(number <= 100)

let sum = 1
for(let num = 0 ; num <= 10 ; num++) {
    console.log(sum = sum + 1)
    console.log(num)
}

let str = "Faheem ";

for(let i in str) {
    console.log(i)
}

let num = 0

while(num <= 10) {
    console.log(`10 * ${num} = ${10 * num}`)
    num++
}

for(let i = 0 ; i <= 10 ; i++) {
    console.log`Outer loop ${i}`
    for(let num = 0 ; num <= 10 ; num++) {
        console.log(`Inner loop ${num}`)
        console.log(`10 * ${num} = ${10 * num}`)
    }
}

for(let i = 0 ; i <= 20 ; i++) {
    if(i === 10) {
        console.log("10 is best number")
        break
    }
    console.log(i)
}

let arr = ["Faheem", "wasid", "shehzad", "shahzeb", "sohail"];

for(let i of arr) {
    console.log(i)
}



for (let i = 0; i <= 30; i++) {
    if (i === 10) {
        console.log("10 is detected")
        break
    }
    console.log(i)
}

const maping = new Map()
maping.set("pk", "Pakistan")
maping.set("in", "india")
maping.set("us", "united state")
maping.set("usa", "united state of amirca")
maping.set("fr", "france")


for (let [key, value] of maping) {
    console.log(`${key.toUpperCase()} :=> ${value.toUpperCase()}`)
}

let obj = {
    username: "Faheem",
    email: "fm@gmail.com",
    passwrod: "1234",
    marks: 502,
    grade: "D"
}


for(let i in obj) {
    console.log(`${i} :=> ${obj[i]}`)
}