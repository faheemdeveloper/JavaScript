const ulList = document.querySelectorAll(".list")

ulList.forEach((currelem, ocum) => {
    console.log(currelem.innerHTML)
})

let list = document.querySelectorAll(".list")
console.log(list.firstElementChild)

let li = document.getElementsByClassName("list")
console.log(li)
let toArr = Array.from(li)

toArr.forEach((currelem, prev) => {
    console.log(currelem.innerHTML)
})


let btn = document.createElement("button")
btn.innerHTML = "Click Me!"
let container = document.querySelector(".container")
container.append(btn)
btn.style.padding = "10px 30px"
btn.style.backgroundColor = "orange"
btn.style.border = "none"
btn.style.borderRadius = "30px"

let ul = document.querySelector(".ulList")
let first = ul.firstElementChild
let next = first.nextElementSibling
console.log(next.innerHTML)

let cont = document.querySelector(".container")

for (let i = 0; i < cont.children.length; i++) {
    console.log(cont.children[i].innerHTML)
}


let btn = document.createElement("button")
let textt = document.createTextNode("Click Me!")
btn.appendChild(textt)
document.body.appendChild(btn)

let h1 = document.createElement("h1")
let text = document.createTextNode("Hello JavaScript tum kab clear hogi");
h1.appendChild(text)
let body = document.querySelector("body");
body.appendChild(h1)


let dive = document.createElement("div")
let text1 = document.createTextNode("Setureday");
dive.appendChild(text1)
let container1 = document.querySelector(".container")
container1.appendChild(dive)

let dive2 = document.createElement("div")
let text2 = document.createTextNode("Sunday");
dive.appendChild(text2)
container1.appendChild(dive2)