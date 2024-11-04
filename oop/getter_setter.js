class UserOne {
    constructor(user, email, password) {
        this.user = user
        this.email = email
        this.password = password
    }

    get user() {
        return this._user.toUpperCase()
    }

    set user(value) {
        this._user = value
    }
}

const userone = new UserOne("rizwan", "rizwi@gmail.com", "ri12345")
console.log(userone.user)

function setWithfunc(user, email) {
    this._user = user
    this._email = email


    Object.defineProperty(this, "user", {
        get: function () {
            return this._user.toUpperCase()
        },

        set: function (value) {
            this.user = value
        }
    })
}

const getWithfunc = new setWithfunc("rizwan", "riz@gmail.com")
console.log(getWithfunc.user)

let obj = {
    _user: "Faheem",
    _email: "fm@gmail.com",

    get user() {
        return this._user.toUpperCase()
    },

    set user(val) {
        this._user = val
    }
}

console.log(obj.user)

let objOne = {
    firstName: "Wasid",
    lastName: "Rehman",

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(value) {
        `${this.firstName} ${this.lastName}`
    }
}

console.log(objOne.fullName)