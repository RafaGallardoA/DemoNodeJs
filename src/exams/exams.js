const sumGrades = (grades) => {
    let sum = grades.reduce((a, b) => a + b, 0)    
    return String(sum)    
}

const promGrades = (grades) => {
    let total = sumGrades(grades)
    let prom = total/grades.length
    return String(prom)    
}

module.exports = { sumGrades, promGrades }