/*

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. The factorial of n also equals the product of n with the next smaller factorial:

  5! = 5 * 4 * 2 * 1 = 120

The value of 0! is 1, according to the convention for an empty product.

 */

export const factorial = (n) => {
  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result
}
