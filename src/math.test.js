const math = require("./math.js");

test("Add two positive numbers", () => {
    const a = 5, b = 10;
    const result = math.sum(a, b);
    expect(result).toBe(15);
});
test("Add a negative and a positive number", () => {
    const a = -5, b = 10;
    const result = math.sum(a, b);
    expect(result).toBe(5);
});
test("Add a negative and a non-number", () => {
    const a = -5, b = 'b';
    const result = math.sum(a, b);
    expect(result).toBe(undefined);
});