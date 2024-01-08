/* eslint-disable no-restricted-syntax */
/* eslint-disable max-classes-per-file */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add node at the end of the list
  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Add node at the start of the list
  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // Get total numbers of nodes in the list
  getSize() {
    let temp = this.head;
    let count = 0;
    while (temp !== null) {
      count += 1;
      temp = temp.next;
    }
    return count;
  }

  // Get first node in the list
  getHead() {
    return this.head;
  }

  // Get last node in the list
  getTail() {
    let temp = this.head;
    while (temp !== null && temp.next !== null) {
      temp = temp.next;
    }
    return temp;
  }

  // Get the node by the index
  at(index) {
    let curretNode = this.head;
    let count = 1;
    while (curretNode) {
      if (count === index) {
        return curretNode;
      }
      count += 1;
      curretNode = curretNode.next;
    }
    return -1;
  }

  // Remove last element from the list
  pop() {
    let temp = this.head;
    if (temp === null || temp.next === null) return null;
    while (temp.next.next != null) {
      temp = temp.next;
    }
    temp.next = null;
    return temp;
  }
}

const myLinkedList = new LinkedList();

myLinkedList.prepend("head");
myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append("last");

console.log(myLinkedList.head);
