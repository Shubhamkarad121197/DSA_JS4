function fibonnaciUsingRecursion(n) {
  if (n <= 1) {
    return n;
  }
  return fibonnaciUsingRecursion(n - 1) + fibonnaciUsingRecursion(n - 2);
}

console.log(fibonnaciUsingRecursion(5)); // Output: 5

// Expected Output: 5

// Time Complexity: O(2^n) where n is the number for which we need to find the fibonacci number
// Space Complexity: O(n) as the maximum stack space used is n


function fibonnaciUsingIteration(n) {
  if (n <= 1) {
    return n;
  }
  let a = 0;
  let b = 1;
  let c;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}

console.log(fibonnaciUsingIteration(5)); // Output: 5

// Expected Output: 5


// Time Complexity: O(n) where n is the number for which we need to find the fibonacci number
// Space Complexity: O(1) as we are using constant space

