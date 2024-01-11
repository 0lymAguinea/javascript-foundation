/* eslint-disable max-classes-per-file */
class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class Tree {
  constructor(array = []) {
    this.array = array;
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    return this.buildTreeFromArray(array, 0, array.length - 1);
  }

  buildTreeFromArray(array, start, end) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const node = new Node(array[mid]);

    node.left = this.buildTreeFromArray(array, start, mid - 1);
    node.right = this.buildTreeFromArray(array, mid + 1, end);
    return node;
  }

  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  insertNode(root, value) {
    if (root === null) {
      return new Node(value);
    }

    if (value < root.data) {
      root.left = this.insertNode(root.left, value);
      console.log("Work left");
    } else if (value > root.data) {
      root.right = this.insertNode(root.right, value);
      console.log("Work right");
    }

    return root;
  }

  deleteNode(root, value) {
    if (root === null) {
      return null;
    }

    if (value < root.data) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.data) {
      root.right = this.deleteNode(root.right, value);
    } else {
      // Node to be deleted found

      // Case 1: Node with only one child or no child
      if (root.left === null) {
        return root.right;
      }
      if (root.right === null) {
        return root.left;
      }

      // Case 3: Node with two children
      // Find the in-order successor (smallest node in the right subtree)
      root.data = this.findMinValue(root.right);

      // Delete the in-order successor
      root.right = this.deleteNode(root.right, root.data);
    }

    return root;
  }

  findMinValue(node) {
    // Helper function to find the smallest value in a subtree
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
}
const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
function prettyPrint(node, prefix = "", isLeft = true) {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}

prettyPrint(tree.root);
