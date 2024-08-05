// Day 17: Data Structure
// Tasks/Activities:

// Activity 1: Linked List
// Task 1: Implement a 'node' class to represent an element in a linked-list with properties 'value' and 'next'
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
const node1 = new Node(4);
console.log("Node1 >>>", node1);
// Task 2: Implement a linkedList class with methods to add a node to the end, remove a node from the end, and display all nodes
class LinkedList {
  constructor() {
    this.head = null;
  }
  addNode(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }
  removeNode() {
    if (this.head === null) {
      return "List is empty!";
    } else if (this.head.next === null) {
      return "list contains only one node";
    } else {
      let currentNode = this.head;
      let previousNode = null;
      while (currentNode.next !== null) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = null;
    }
  }
  displayLinkedList() {
    if (this.head === null) {
      return "List is empty!";
    } else {
      let currentNode = this.head;
      let linkedListValues = "";
      while (currentNode !== null) {
        linkedListValues += currentNode.value + " -> ";
        currentNode = currentNode.next;
      }
      console.log("Linked list:", linkedListValues + "null");
    }
  }
}
const LL1 = new LinkedList();
LL1.addNode(12);
LL1.addNode(13);
LL1.addNode(50);
LL1.addNode("Pavi");
LL1.displayLinkedList();
LL1.removeNode();
LL1.displayLinkedList();

// ---------------------------------------------------------------------------------------------------

// Activity 2: Stack
// Task 3: Implement a 'stack' class with methods 'push' (add element),'pop' (remove element) and 'peek'(view the first element of the LL)
class Stack {
  constructor() {
    this.items = [];
  }
  // add element to stack
  add(elmt) {
    this.items.push(elmt);
  }
  pop() {
    const poppedElmt = this.items.pop();
    return poppedElmt;
  }
  peek() {
    return this.items[0];
  }
}
console.log("Stack start -----------------");
const stack1 = new Stack();
stack1.add(14);
stack1.add(90);
stack1.add(500);
stack1.add(9);
console.log("stack1 >>>", stack1);
console.log("Popped Elmt >>>", stack1.pop());
console.log("After popping >>>", stack1);
console.log("Peeked Elmt >>>", stack1.peek());
// Task 4: Use the 'stack' class to reverse a string by pushing all the characters onto the stack and then popping them off.
const stack2 = new Stack();
stack2.add("A");
stack2.add("B");
stack2.add("C");
stack2.add("D");
console.log("Stack2 >>>", stack2); // ABCD
let reversedString = "";
reversedString += stack2.pop();
reversedString += stack2.pop();
reversedString += stack2.pop();
reversedString += stack2.pop();
console.log("Reversed String >>>", reversedString); // DCBA

// ----------------------------------------------------------------------------------------------------

// Activity 3: Queue
// Task 5: Implement a Queue class with methods 'enqueue' (add element), 'dequeue'(remove element), and 'front' (to view the first element)
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(elmt) {
    this.items.push(elmt);
  }
  dequeue() {
    if (this.items.length === 0) {
      return "Queue is empty⚠️";
    } else {
      return this.items.shift();
    }
  }
  front() {
    if (this.items.length === 0) {
      return "Queue is empty⚠️";
    } else {
      return this.items[0];
    }
  }
}
console.log("Queue start ----------------------------");
const queue1 = new Queue();
console.log("Queue >>>", queue1);
console.log(queue1.dequeue());
queue1.enqueue("Sach");
queue1.enqueue("Gauti");
queue1.enqueue("Pavi");
queue1.enqueue("John");
queue1.dequeue();
console.log("Queue >>>", queue1);
console.log(queue1.front());
// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order
const printerQueue = new Queue();
printerQueue.enqueue(["Pavi_Doc", "customerID"]);
printerQueue.enqueue(["Gauti_Doc", "quickSilver_18", 9076049629]);
printerQueue.enqueue("Sach_doc");
let no_ofPrintJobs = printerQueue.items.length;
for (let i = 1; i <= no_ofPrintJobs; i++) {
  const docPrint = printerQueue.dequeue();
  console.log(`Print no ${i}: ${docPrint} has been printed`);
}
if (printerQueue.items.length === 0) {
  console.log("No more print doc in the queue of the printer");
}

// ---------------------------------------------------------------------------------------------

// Activity 4: Binary Tree
// Task 7: Implement a 'TreeNode' class to represent a node in a binary tree with properties 'value','left' and 'right'.
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const treeNode1 = new TreeNode(2);
treeNode1.left = 10; // ❌ wrong way to implement a left node
treeNode1.right = 20; // ❌ wrong way to implement a left node
// console.log("TreeNode >>>", treeNode1);
// Task 8: Implement a 'BinaryTree' class with methods for inserting values and performing in-order traversal to display nodes
class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  inOrderTraversal(node = this.root, result = []) {
    if (node !== null) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }
}
const binaryTree1 = new BinaryTree();
binaryTree1.insert(15);
binaryTree1.insert(20);
binaryTree1.insert(2);
binaryTree1.insert(100);
binaryTree1.insert(4);
binaryTree1.insert(19);
binaryTree1.insert(40);
binaryTree1.insert(0);
// console.log(">>>>", binaryTree1);
console.log(">>>>:", binaryTree1.inOrderTraversal());

// ---------------------------------------------------------------------------------------------------

// Activity 5: Graph (Optional)
// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS)
// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes

// ---------------------------------------------------------------------------------------------------

// Feature Request:
// 1. Linked List Script: Write a script that implements a linked list with methods to add, remove, and display nodes.
// 2. Stack Script: Create a script that implements a stack and uses it to reverse a string.
// 3. Queue Script: Write a script that implements a queue and simulates a printer queue.
// 4. Binary Tree Script: Create a script that implements a binary tree with insertion and in-order traversal methods.
// 5. Graph Script: Write a script that implements a graph and performs breadth-first search (optional).
// Achievement:
// By the end of these activities, students will:

// . Implement and use linked lists for dynamic data storage.
// . Use stacks for LIFO (Last-In-First-Out) operations and reverse data.
// . Use queues for FIFO (First-In-First-Out) operations and simulate real-world scenarios.
// . Implement binary trees for hierarchical data storage and traversal.
// . Understand and use graphs for network representations and pathfinding (optional).
