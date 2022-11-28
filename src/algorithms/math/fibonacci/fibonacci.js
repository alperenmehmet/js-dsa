/*
In mathematics, the Fibonacci sequence, in which each number is the sum of the two preceding ones. The sequence commonly starts from 0 and 1, although some authors start the sequence from 1 and 1 or sometimes (as did Fibonacci) from 1 and 2. Starting from 0 and 1, the first few values in the sequence are;

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144.
 */

export const fibonacci = (n) => {
  if (n === 1) {
    return [n]
  }
  const fibArr = [1, 1]

  for (let i = 2; i < n; i++) {
    fibArr.push(fibArr[i - 1] + fibArr[i - 2])
  }
  return fibArr
}
