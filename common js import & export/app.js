const { multiply } = require("./script")
const { addition } = require("./index")
const { subtract } = require("./main")

const e = 10
const f = 2

const finalMult = multiply()
const finalAdd = addition()
const finalSub = subtract()


function division() {
    const divi = e / f
    console.log(divi);
    console.log(finalAdd);
    console.log(finalSub);
    console.log(finalMult)
}

division()