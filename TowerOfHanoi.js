// Problem Description
// Towers of Hanoi is a mathematical puzzle where we have three rods(A,B,C) and n disks. All the disks are of distinct size and initially they are placed on rod A in sorted order of their size with the largest at the bottom and the smallest at the top. The other rods B and C are initially empty.

// The objective of the puzzle is to move the entire stack of disks from A to another rod C with the help of rod B, obeying the following simple rules:

// Only one disk can be moved at a time.

// Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.

// Larger disk cannot be placed on top of a smaller disk.

// Disks are numbered from 1 to n where 1 is the smallest disk and n is the largest.

// Input format
// An integer n denoting the number of disks.

// Output format
// On each new line, print the disk number you are moving, rod from which you are moving the disk and the rod to which you are moving the disk, in a space separated way.

// Constraints
// 1 <= n <= 20

// Sample Input 1
// 3

// Sample Output 1
// 1 A C

// 2 A B

// 1 C B

// 3 A C

// 1 B A

// 2 B C

// 1 A C

// Explanation 1
// We first move Disk 1 from A to C

// Then move Disk 2 from A to B

// Then move Disk 1 from C to B and so on.


// Sample Input 2
// 2

// Sample Output 2
// 1 A B

// 2 A C

// 1 B C

// Explanation 2
// We first move Disk 1 from A to B

// Then move Disk 2 from A to C

// Then move Disk 1 from B to C


function towerOfHanoi(n, source, auxiliary, destination) {
    if (n === 1) {
        console.log(n, source, destination);// Base case
        return;
    }
    towerOfHanoi(n - 1, source, destination, auxiliary);// Move n-1 disks from source to auxiliary
    console.log(n, source, destination);// Move nth disk from source to destination
    towerOfHanoi(n - 1, auxiliary, source, destination);// Move n-1 disks from auxiliary to destination
}

towerOfHanoi(3, 'A', 'B', 'C');
// Expected Output: 1 A C
// 2 A B
// 1 C B
