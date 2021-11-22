// Array

let array = [1,2,3,4,5];
let i = 10; // Takes up constant space, 4 byte (32 bit)
array[0]
array[0 + 10]
array.push(6)

// Stack

// class stack


// Queue


// Linked list


// Binary tree


// Array מערך

25600 // 15 steps
12800 // 14 steps
6400 // 13 steps
3200 // 12 steps
1600 // 11 steps
800 // 10 steps
400 // 9 steps
200 // 8 steps
// 7 steps
// 100 -> 50 -> 25 -> 12 -> 6 -> 3 -> 1
// Stack מחסנית
// First In Last Out = FILO
// From end of array
array.push(6);
array.pop() // 6
// Queue תור
// First In First Out = FIFO
array.push(6) // Add
array.shift()    // Remove
// Linked list רשימה משורשרת
let array2 = array;
array2[0] = 'bamba';
// Doubly-linked list
// Binary tree
class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2
console.log(node1.next);
console.log(node1.next.next);
console.log(node1.data);
class TreeNode {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
// Red Black Tree
// AVL Tree