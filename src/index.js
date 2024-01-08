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
    while (temp != null) {
      count += 1;
      temp = temp.next;
    }
    return count;
  }
}

const myLinkedList = new LinkedList();

myLinkedList.prepend(1);
myLinkedList.append(2);

console.log(myLinkedList.head);
