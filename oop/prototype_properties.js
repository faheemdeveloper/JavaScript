let PersonOne = function (user, score) {
    this.user = user
    this.score = score
}

PersonOne.prototype.increment = function() {
    this.score++
}

PersonOne.prototype.printing = function () {
    console.log(`The user score is ${this.score}`)
}

let personOne = new PersonOne("wasid", "22")
console.log(personOne.printing())
console.log(personOne.increment())
