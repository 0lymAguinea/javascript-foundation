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
    this.root = this.buildTree(array);
    this.print = this.prettyPrint(this.root);
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

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}
const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
