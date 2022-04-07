const { sumGrades, promGrades } = require("./exams")

describe("Exams", () => {
    it("should sum grades", () => {
        const grades = [8, 7, 9, 6, 10]
        const expectedValue = String(40)
        let sum = sumGrades(grades)
        expect(sum).toEqual(expectedValue)
    });    

    it("should prom grades", () => {
        const grades = [8, 7, 9, 6, 10]
        const expectedValue = String(8)
        let prom = promGrades(grades)
        expect(prom).toEqual(expectedValue)
    });
});