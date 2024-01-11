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
}
const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
