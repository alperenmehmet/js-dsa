/*

A natural number (1, 2, 3, 4, 5, 6, etc.) is called a prime number (or a prime) if it is greater than 1 and cannot be written as the product of two smaller natural numbers. The numbers greater than 1 that are not prime are called composite numbers. In other words, n is prime if n items cannot be divided up into smaller equal-size groups of more than one item, or if it is not possible to arrange n dots into a rectangular grid that is more than one dot wide and more than one dot high. For example, among the numbers 1 through 6, the numbers 2, 3, and 5 are the prime numbers, as there are no other numbers that divide them evenly (without a remainder). 1 is not prime, as it is specifically excluded in the definition. 4 = 2 × 2 and 6 = 2 × 3 are both composite.

The divisors of a natural number n are the natural numbers that divide n evenly. Every natural number has both 1 and itself as a divisor. If it has any other divisor, it cannot be prime. This idea leads to a different but equivalent definition of the primes: they are the numbers with exactly two positive divisors, 1 and the number itself. Yet another way to express the same thing is that a number n is prime if it is greater than one and if none of the numbers divides n evenly.

The first 25 prime numbers (all the prime numbers less than 100) are:

2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

 */

export const primality = (n) => {
  if (n < 2) {
    return false
  }
  if (Number(n) === n && n % 1 !== 0) {
    return false
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
