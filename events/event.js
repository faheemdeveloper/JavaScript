let btn = document.querySelector("button")

btn.onclick = function() {
    alert("Hello Js developer from js file")
}

btn.addEventListener("mouseleave", function() {
    alert("Hello Js developer")
})

btn.addEventListener("click", (event) => {
    console.log(event)
})

let mode = 'light'

btn.addEventListener("click", () => {
    if (mode === "light") {
        mode = "black"
        document.body.style.backgroundColor = "black"
    } else {
        mode = "light"
        document.body.style.backgroundColor = "white"
    }
})

let aTag = document.querySelector("a")

aTag.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("button was clicked")
})

const newBtn = document.querySelector(".new-btn")

const clickfunc  = () => {
    console.log("Button clicked")
}

newBtn.addEventListener("mouseover", () => {
    clickfunc();
})