class Heap {
    constructor(type = 'min') {
        this.heap = [];
        this.type = type; // 'min' for Min-Heap, 'max' for Max-Heap
    }

    // Swap elements in the heap
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Get parent and child indices
    parent(i) { return Math.floor((i - 1) / 2); }
    leftChild(i) { return 2 * i + 1; }
    rightChild(i) { return 2 * i + 2; }

    // Insert an element and restore heap property
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // Move newly inserted element up to maintain heap property
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.parent(index);
            if (this.shouldSwap(parentIndex, index)) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else break;
        }
    }

    // Remove and return the root element
    extractRoot() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    // Move the root element down to restore heap property
    heapifyDown() {
        let index = 0;
        while (true) {
            let left = this.leftChild(index);
            let right = this.rightChild(index);
            let target = index;

            if (left < this.heap.length && this.shouldSwap(target, left)) target = left;
            if (right < this.heap.length && this.shouldSwap(target, right)) target = right;

            if (target !== index) {
                this.swap(index, target);
                index = target;
            } else break;
        }
    }

    // Get root element without removing it
    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    // Determine if a swap is needed based on heap type
    shouldSwap(parentIdx, childIdx) {
        return this.type === 'min' 
            ? this.heap[parentIdx] > this.heap[childIdx] 
            : this.heap[parentIdx] < this.heap[childIdx];
    }

    // Get heap as an array
    getHeap() {
        return this.heap;
    }
}

// Example Usage
const minHeap = new Heap('min');
[minHeap.insert(10), minHeap.insert(5), minHeap.insert(15), minHeap.insert(1)];
console.log("Min-Heap:", minHeap.getHeap()); // [1, 5, 15, 10]
console.log("Extract Min:", minHeap.extractRoot()); // 1
console.log("Min-Heap after extraction:", minHeap.getHeap());

const maxHeap = new Heap('max');
[maxHeap.insert(10), maxHeap.insert(5), maxHeap.insert(15), maxHeap.insert(1)];
console.log("Max-Heap:", maxHeap.getHeap()); // [15, 10, 5, 1]
console.log("Extract Max:", maxHeap.extractRoot()); // 15
console.log("Max-Heap after extraction:", maxHeap.getHeap());
