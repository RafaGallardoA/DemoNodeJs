const { calculate } = require("./example")

describe("example", () => {
    it("should get example", () => {
        let value = calculate(5)
        expect(value).toEqual(String(50))
    });

    it("should be integer", () => {
        let value = calculate(5)
        expect(parseInt(value)).toEqual(50)
    });

    it("should be greater 5", () => {
        let value = calculate(5)
        expect(parseInt(value)).toBeGreaterThan(5)
    });
});