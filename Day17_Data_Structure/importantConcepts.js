class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Creating the tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Converting the tree to a JSON string with pretty printing
const jsonString = JSON.stringify(root, null, 2);
console.log("JSON String >>>", jsonString);

// Converting the JSON string back to an object
const jsonObject = JSON.parse(jsonString);
console.log("JavaScript Object >>>", jsonObject);
