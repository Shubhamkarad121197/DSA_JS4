// Description: This file implements the fractional knapsack problem.
// Problem Description
// Given weights and values of n items, we need to put these items in a knapsack of capacity W to get the maximum total value in the knapsack.



function fractionalKnapsack(items, capacity) {
    items.sort((a, b) => (b[1] / b[0]) - (a[1] / a[0]));
    let totalValue = 0;
    for (let [weight, value] of items) {
        if (capacity >= weight) {
            totalValue += value;
            capacity -= weight;
        } else {
            totalValue += (value / weight) * capacity;
            break;
        }
    }
    return totalValue;
}

console.log(fractionalKnapsack([[10, 60], [20, 100], [30, 120]], 50)); // Output: 240

// Expected Output: 240
// Explanation: The total value that can be obtained is 240 by selecting the items with weights 10 and 20 and leaving the item with weight 30 as the capacity of the knapsack is 50.
// Time Complexity: O(nlogn) where n is the number of items
// Space Complexity: O(1) as we are using constant space
