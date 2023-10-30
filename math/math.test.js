const { add, subtract, multiply, divide, squareRoot, max } = require("./index");

describe("Testing Mathmatic functions", () => {
	test("Test Addition", ()=> expect(add(2,2)).toBe(4));
	test("Test Subtraction", () => expect(subtract(2,2)).toBe(0));
	test("Test Multiplication", () => expect(multiply(12,12)).toBe(144));
	test("Test Division", () => expect(divide(256, 8)).toBe(32));
	test("Test Square Root", () => expect(squareRoot(64)).toBe(8));
	test("Test Max", () => expect(max(144, 256)).toBe(256));
})