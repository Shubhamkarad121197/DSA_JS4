// Problem Description
// Given an unsorted array, find the Kth largest element in it.

// Note: The need is to find the Kth largest element in the sorted order.

// Input format
// First line has the integer N, representing the number of elements in the array

// Second line has N integers representing elements of the array

// Third line has K, which is the Kth largest element to be found

// Output format
// The Kth largest element value needs to be printed

// Constraints
// 1 <= N <= 1e5

// 0 <= Array Values <= 1e9

// 1 ≤ K ≤ N

// Sample Input 1
// 6

// 3 2 1 5 6 4

// 2

// Sample Output 1
// 5

// Explanation 1
// From the given input array, we have to find the second largest value. The first largest is 6 and the second largest is 5, which is the answer.

// Sample Input 2
// 9

// 3 2 3 1 2 4 5 5 6

// 4

// Sample Output 2
// 4

// Explanation 2
// From the given input array, we have to find the fourth largest value. The sorted order with the largest first is 6 5 5 4 3 3 2 2 1. The fourth largest here has the value 4.

// Resource
// Kth smallest/largest element in an array


function kthLargestElementInAnArray(N, arr, K) {
    let minHeap = new MinHeap();

    for (let num of arr) {
        minHeap.push(num);
        if (minHeap.size() > K) {
            minHeap.pop();
        }
    }

    
    return minHeap.top()
}

// Sample Test
console.log(kthLargestElementInAnArray(6, [3, 2, 1, 5, 6, 4], 2)); // 5
console.log(kthLargestElementInAnArray(9, [3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.heap.sort((a, b) => a - b); // Keep heap sorted
    }

    pop() {
        return this.heap.shift(); // Remove the smallest element
    }

    top() {
        return this.heap[0]; // Return the smallest element
    }

    size() {
        return this.heap.length;
    }
}