const { sumGrades, promGrades, approvedExam } = require("./exams")
let grades = []

beforeAll(() => {
    grades = [8, 7, 9, 6, 10]
})

afterAll(() => {
   
})

describe("Exams", () => {

    afterEach(() => {
        // grades = [8, 7, 9, 6, 10]
    });

    afterEach(() => {

    })

    test('should be false', () => {
        expect(false).toBeFalsy();
    });

    it("should sum grades", () => {        
        const expectedValue = String(40)
        let sum = sumGrades(grades)
        expect(sum).toEqual(expectedValue)
    });    

    it("should prom grades", () => {        
        const expectedValue = String(8)
        let prom = promGrades(grades)
        expect(prom).toEqual(expectedValue)
    });

    it("should know if pass exan", () => {        
        const expectedValue = String('Approved')
        let approved = approvedExam(grades)
        expect(approved).toEqual(expectedValue)
    });
});