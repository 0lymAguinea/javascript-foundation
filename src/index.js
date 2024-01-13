/* eslint-disable max-classes-per-file */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
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
    } else if (value > root.data) {
      root.right = this.insertNode(root.right, value);
    }

    return root;
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
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

  find(value) {
    return this.findNode(this.root, value);
  }

  findNode(root, value) {
    if (root === null || root.data === value) {
      return root;
    }

    if (value < root.data) {
      return this.findNode(root.left, value);
    }
    return this.findNode(root.right, value);
  }

  levelOrder(callback = null) {
    const result = [];
    const height = this.findHeight(this.root);

    for (let level = 1; level <= height; level += 1) {
      this.printLevel(this.root, level, callback, result);
    }

    return result;
  }

  findHeight(root) {
    if (root === null) return 0;

    // Find the height of left, right subtrees
    const leftHeight = this.findHeight(root.left);
    const rightHeight = this.findHeight(root.right);

    // Find max(subtree_height) + 1 to get the height of the tree
    return Math.max(leftHeight, rightHeight) + 1;
  }

  printLevel(root, level, callback, result) {
    if (!root) return;

    if (level === 1) {
      if (callback) {
        callback(root.data);
      } else {
        result.push(root.data);
      }
    } else if (level > 1) {
      this.printLevel(root.left, level - 1, callback, result);
      this.printLevel(root.right, level - 1, callback, result);
    }
  }

  inOrder(callback = null) {
    const result = [];
    this.inOrderTraversal(this.root, callback, result);
    return result;
  }

  inOrderTraversal(root, callback, result) {
    if (root !== null) {
      this.inOrderTraversal(root.left, callback, result);

      if (callback) {
        callback(root.data);
      } else {
        result.push(root.data);
      }
      this.inOrderTraversal(root.right, callback, result);
    }
  }

  preOrder(callback = null) {
    const result = [];
    this.preOrderTraversal(this.root, callback, result);
    return result;
  }

  preOrderTraversal(root, callback, result) {
    if (root !== null) {
      if (callback) {
        callback(root.data);
      } else {
        result.push(root.data);
      }
      this.preOrderTraversal(root.left, callback, result);
      this.preOrderTraversal(root.right, callback, result);
    }
  }

  postOrder(callback = null) {
    const result = [];
    this.postOrderTraversal(this.root, callback, result);
    return result;
  }

  postOrderTraversal(root, callback, result) {
    if (root !== null) {
      this.postOrderTraversal(root.left, callback, result);
      this.postOrderTraversal(root.right, callback, result);

      if (callback) {
        callback(root.data);
      } else {
        result.push(root.data);
      }
    }
  }

  height(value) {
    return this.findNodeHeight(this.root, value);
  }

  findNodeHeight(root, value) {
    if (root === null) return -1;

    const leftHeight = this.findNodeHeight(root.left, value);
    const rightHeight = this.findNodeHeight(root.right, value);

    const answer = Math.max(leftHeight, rightHeight) + 1;

    if (root.data === value) {
      console.log(answer);
      return answer;
    }
    return answer;
  }

  depth(value) {
    return this.findNodeDepth(this.root, value);
  }

  findNodeDepth(root, value) {
    if (root === null) return -1;

    let dist = -1;

    if (
      root.data === value ||
      // Otherwise, check if x is
      // present in the left subtree
      (dist = this.findNodeDepth(root.left, value)) >= 0 ||
      // Otherwise, check if x is
      // present in the right subtree
      (dist = this.findNodeDepth(root.right, value)) >= 0
    )
      // Return depth of the node
      return dist + 1;

    return dist;
  }

  isBalanced() {
    return this.isBalancedUtil(this.root);
  }

  isBalancedUtil(root) {
    if (root === null) return 0;

    const leftH = this.isBalancedUtil(root.left);
    if (leftH === -1) return -1;

    const rightH = this.isBalancedUtil(root.right);
    if (rightH === -1) return -1;

    if (Math.abs(leftH - rightH) > 1) {
      return -1;
    }
    return Math.max(leftH, rightH) + 1;
  }

  rebalance() {
    return this.rebalanceTree(this.root);
  }

  storedBSTNodes(root, nodes) {
    if (root === null) return;

    this.storedBSTNodes(root.left, nodes);
    nodes.push(root);
    this.storedBSTNodes(root.right, nodes);
  }

  rebalanceTree(root) {
    const nodes = [];
    this.storedBSTNodes(root, nodes);

    const n = nodes.length;
    return this.buildTreeFromArray(nodes, 0, n - 1);
  }
}
function arrayRandomize(size) {
  const array = [];
  const min = 0;
  const max = 100;

  for (let i = 0; i < size; i += 1) {
    const randomNumbers = Math.floor(Math.random() * (max - min) + min);
    array.push(randomNumbers);
  }
  return array;
}
const tree = new Tree(arrayRandomize(20));

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
