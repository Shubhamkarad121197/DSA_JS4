// Problem Description
// Given an array of distinct integers - candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.

// You may return the combinations in sorted order.

// The same number may be chosen from candidates an unlimited number of times.

// Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// Elements in each combination must be in non-decreasing order.

// If no combinations are possible, the program prints NA.

// Input format
// The first line contains 2 integers n, target which denotes the number of candidates and the target to be reached respectively.

// The next n lines contain the candidate integers of the n candidates.

// Output format
// Return a list of all unique combinations of candidates where the chosen numbers sum to target.

// Return the combinations in sorted order.

// If no combinations are possible, the program prints NA.

// Sample Input 1
// 4 7

// 2

// 3

// 6

// 7

// Sample Output 1
// [[2,2,3],[7]]

// Explanation
// The given combination of candidates sum up to the target.

// Constraints
// 1 <= candidates.length <= 30

// 1 <= candidates[i] <= 200

// All elements of candidates are distinct.

// 1 <= target <= 500


function combinationOfSum(candidates, target) {
    let result = [];
    function helper(index, slate, sum) {
        if (sum === target) {
            result.push(slate);
            return;
        }
        if (sum > target || index === candidates.length) {
            return;
        }
        helper(index, slate.concat(candidates[index]), sum + candidates[index]);
        helper(index + 1, slate, sum);
    }
    helper(0, [], 0);
    return result.length === 0 ? "NA" : result;
}   

//Test case
console.log(combinationOfSum([2,3,6,7], 7)); // Output: [[2,2,3],[7]]
console.log(combinationOfSum([2,3,5], 8)); // Output: [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationOfSum([2], 1)); // Output: NA
console.log(combinationOfSum([1], 1)); // Output: [[1]]
console.log(combinationOfSum([1], 2)); // Output: [[1,1]]
console.log(combinationOfSum([1,9], 10)); // Output: NA