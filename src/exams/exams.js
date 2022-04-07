const sumGrades = (grades) => {
    let sum = grades.reduce((a, b) => a + b, 0)    
    return String(sum)    
}

const promGrades = (grades) => {
    let total = sumGrades(grades)
    let prom = total/grades.length
    return String(prom)    
}

const approvedExam = (grades) => {
    let prom = promGrades(grades)
    let approved = (prom >= 8) ? 'Approved' : 'No Approved'
    return String(approved)    
}

module.exports = { sumGrades, promGrades, approvedExam }