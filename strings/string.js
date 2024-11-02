let strOne = "Country";
console.log(strOne.at(-5))
console.log(strOne.slice(0, 5))
console.log(strOne.replace("o", "h"))
console.log(strOne.charAt(2))
console.log(strOne.length)
console.log(strOne.trimStart().length)
console.log(strOne.trimEnd().length)
let padStart = strOne.padStart(14)
let paddEnd = strOne.padEnd(14)
let reso = [padStart, paddEnd]

console.log(reso.length)
console.log(strOne.trim().length)
console.log(strOne.charCodeAt("c"))
console.log(strOne.indexOf("u"))
console.log(strOne.lastIndexOf("u"))
let strTwo = "Faheem";
let res = strOne.concat(strTwo);
console.log(res)

let result = ([...strOne, ...strTwo])
console.log(result)

console.log(strOne.endsWith("y"))

const fullStr = "Hello javaScript developers welcome to javaScript course";
console.log(fullStr[6])
let matchAll = fullStr.matchAll("javaScript")
console.log(...matchAll)
console.log(Array.from(fullStr))
console.log(fullStr.split(""))

let matchVal = fullStr.matchAll("j")
console.log(...matchVal)

for (let i = 97; i <= 122; i++) {
    console.log(String.fromCharCode(i))
}

let fulName = "Faheem";
console.log(fulName.slice(-1, -3))

for (let char = 97; char <= 122; char++) {
    console.log(String.fromCharCode(char))
}