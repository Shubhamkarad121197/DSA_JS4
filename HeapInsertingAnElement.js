class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Get parent index
    parent(i) { return Math.floor((i - 1) / 2); }

    // Swap elements in the heap
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Insert an element
    insert(value) {
        this.heap.push(value); // Add at the end
        this.heapifyUp(); // Restore heap property
    }

    // Heapify-Up: Moves the new element up to maintain heap order
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.parent(index);
            if (this.heap[parentIndex] > this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else break;
        }
    }
}

// Example
const heap = new MinHeap();
heap.insert(10);
heap.insert(5);
heap.insert(15);
heap.insert(1);
console.log(heap.heap); // [1, 5, 15, 10]
