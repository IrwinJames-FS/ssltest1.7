/**
 * Add A and B together.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
const add = (a, b) => a+b;

/**
 * Subtract b from a
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
const subtract = (a,b) => a-b;

/**
 * Multiplies a by b
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
const multiply = (a,b) => a*b;

/**
 * Divides a by b
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
const divide = (a,b) => a/b;

/**
 * Find the square root of A
 * @param {number} a 
 * @returns {number}
 */
const squareRoot = (a) => Math.sqrt(a);

/**
 * Find the max of the two provided values
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
const max = (a,b) => Math.max(a, b);

module.exports = {
	add,
	subtract,
	multiply,
	divide,
	squareRoot,
	max
}