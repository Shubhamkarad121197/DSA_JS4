function FactorialUsingRecursion(n) {
    if (n === 0) {
        return 1;
    }
    return n * FactorialUsingRecursion(n - 1);
}

console.log(FactorialUsingRecursion(5)); // Output: 120

// Expected Output: 120

// Time Complexity: O(n) where n is the number for which we need to find the factorial
// Space Complexity: O(n) as the maximum stack space used is n

function FactorialUsingIteration(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(FactorialUsingIteration(5)); // Output: 120

// Expected Output: 120 

// Time Complexity: O(n) where n is the number for which we need to find the factorial
// Space Complexity: O(1) as we are using constant space


