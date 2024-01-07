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
        console.log("added");
      }
      current.next = newNode;
    }
  }
}

const myLinkedList = new LinkedList();

myLinkedList.append(1);
myLinkedList.append(2);

console.log(myLinkedList.head);
