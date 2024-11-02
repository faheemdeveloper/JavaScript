let arrOne = ["Faheem", "wasid", "shehzad", "luqman", "shahzeb", "sohail"];
console.log(arrOne.push("Adil", "Basit"))
console.log(arrOne.unshift("Rizwan", "Nizam"))
console.log(arrOne.pop())
console.log(arrOne.shift())
console.log(arrOne, arrOne.length)

console.log(arrOne.slice(1, 4))
console.log(arrOne)
const resultOne = arrOne.splice(3, 1, "Adil");
console.log(arrOne)
console.log(arrOne.includes("adil"))
console.log(arrOne.push(...["Adil"]))
console.log(arrOne)
let arrTwo = ["Adil", "basit", "hamid"]
let fullArr = arrOne.concat(arrTwo)
console.log(fullArr)
let fullArrTwo = [...arrOne, ...arrTwo]
console.log(fullArrTwo)
console.log(arrOne.findIndex("4"))

let heroOne = ["spider", "iranman"]
let heroTwo = ["hulk", "captan america"]
console.log(heroOne.unshift(heroTwo))

let toString = ["Faheem", "wasid", "shehzad", "luqman", "shahzeb", "sohail"];
console.log(toString.join())

let stuOne = "Faheem";
let stuTwo = "Wasid";
let stuThree = "Shehzad";
let stuFour = "Sohail";

let arr = Array.of(stuOne, stuTwo, stuThree, stuFour)
console.log(Array.isArray(arr))

let one = ["one", "two", "adil"];
[one, two, three] = one;
console.log(three)

let loop = ["Faheem", "wasid", "shehzad", "luqman", "shahzeb", "sohail"];

for (let i in loop) {

    console.log(loop[i])
}

console.log(typeof toString.toString())
console.log(typeof toString.join(),)
console.log(toString.at(-2));

let Method = ["Faheem", "wasid", "shehzad", "luqman", "shahzeb", "sohail"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let res = Method.forEach(function (currElem, ind, Method) {
    console.log(`${currElem.toUpperCase()} ${ind} ${Method}`)
})

let nums = numbers.map(function (currVal, idx) {
    return currVal + 10
})

console.log(nums)

let fill = numbers.map(function (currElem, preElem) {
    return currElem > 4
})
console.log(fill)

const find = numbers.find(function (currElem, preElem) {
    return currElem > 4;
})

console.log(find)

const products = [
    { name: "Iphone", price: 1233 },
    { name: "smartwatch", price: 100 },
    { name: "tablate", price: 200 },
    { name: "laptop", price: 800 },
    { name: "aribirds", price: 400 },
    { name: "aribirds", price: 400 },

]

let filterProduct = products.filter(function (curElem, prevElem) {
    return curElem.price > 400
})

console.log(filterProduct)

let num = numbers.forEach(function (curElem, prevElem) {
    if (curElem % 2 === 0) {
        console.log(curElem)
    }
})

console.log(Method.sort())

const productPrices = [100, 200, 300, 400, 500, 600, 700];

const productTotal = productPrices.reduce((occum, curElem) => {
    return occum + curElem
})

console.log(productTotal)