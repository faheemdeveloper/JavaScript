let promiseOne = new Promise(function (reslove, reject) {
    let error = false
    if (error) {
        setTimeout(() => {
            reslove("promise is successfull reslove")
        }, 1000)
    } else {

        setTimeout(() => {
            reject("promise is rejected")
        }, 3000);
    }
})

promiseOne.then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})

const promiseTwo = new Promise(function (reslove, reject) {
    setTimeout(() => {
        console.log("promise is reslove")
        reslove()
    }, 4000)
})

async function name() {
    await promiseTwo()
    console.log("hello async function")
}

const gettingPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise is reslove")
        }, 3000);
    })
}
async function asyncCall() {
    const data = await gettingPromise()
    console.log(data)
    console.log("async calling.....")
}

asyncCall()

let fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise is reslove")
    }, 4000)
})


async function getData() {
    try {
        let data = await fetchData
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getData()

let gettpromise = () => {
    return new Promise((resolve, reject) => {
        let errr = true;
        if (errr) {
            setTimeout(() => {
                resolve("promise is reslove")
            }, 3000)
        } else {
            setTimeout(() => {
                reject("promise is rejected")
            }, 3000);
        }
    })
}

async function asyncFunction() {
    try {
        const data = await gettpromise()
        console.log(data)
        console.log("async function called success")
    } catch (error) {
        console.log(error)
    }
}

asyncFunction()

async function getData() {
    try {
        const response = await fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings")
        let data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getData()

let setData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise is resolve")
        }, 3000)
    })
}


async function getData() {
    try {
        let data = await setData()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getData()

async function fetchingData() {
    try {
        let response = await fetch("https://openlibrary.org/people/mekBot/books/want-to-read.json")
        let data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

fetchingData()

let promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(["Faheem", "wasid", "shehzad", "sohail"])
        resolve()
    }, 3000)
})

promiseThree.then((res) => {
    console.log(res)
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["Faheem", "wasid", "shehzad", "luqman"])
    }, 3000)
})

promiseFive
    .then((user) => {
        return user[2]
    })
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })

const chainPrOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise One is reslove successfully")
    }, 3000)
})

const chainPrTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise Two is reslove successfully")
    }, 4000)
})

const chainPrThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise Three is reslove successfully")
    }, 5000)
})

chainPrOne.then((one) => {
    console.log(one)
    return chainPrTwo
}).then((two) => {
    console.log(two)
    return chainPrThree
}).then((three) => {
    console.log(three)
}).finally(() => {
    console.log("all promise are done")
})

const prMethodOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("prmise one is reslove")
    }, 3000);
})

const prMethodTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("prmise Two is reslove")
    }, 4000);
})

const prMethodThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("prmise Three is reslove")
    }, 5000);
})

Promise.allSettled([prMethodOne, prMethodTwo, prMethodThree])
    .then((respnse) => {
        return respnse
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    }).finally(() => {
        console.log("all task are done")
    })