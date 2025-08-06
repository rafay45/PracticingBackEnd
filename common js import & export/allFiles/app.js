const find = require('.')
// const { multiply, addition, subtract } = require('./index')
const e = 10
const f = 2

const finalMult = find.multiply()
const finalAdd = find.addition()
const finalSub = find.subtract()

// const finalMult = multiply()
// const finalAdd = addition()
// const finalSub = subtract()


function division() {
    const divi = e / f
    console.log(divi);
    console.log(finalAdd);
    console.log(finalSub);
    console.log(finalMult)
}

division()