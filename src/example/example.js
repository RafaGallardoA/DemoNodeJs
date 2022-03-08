const calculate = (value) => {
    let val = value * 10
    return String(val)
}

const prueba = (value) => {
    let val = value
    console.log(val)
    return String(val)
}

module.exports = { calculate, prueba }