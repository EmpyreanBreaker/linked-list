import { Node } from "./node";

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    const newNode = new Node(value);

    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }

    let current = this.headNode;

    while (current.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = newNode;
  }

  // return the value of the node at the given index.
  // if there’s no node at the given index, it should return undefined
  // if the list is empty it should also return undefined
  at(index) {
    if (index < 0) {
      return undefined;
    }

    let current = this.headNode;
    let counter = 0;

    while (current) {
      if (counter === index) {
        return current.value;
      }

      current = current.nextNode;
      counter++;
    }

    return undefined;
  }

  // returns true if the passed in value is in the list
  // otherwise returns false.
  contains(value) {
    let current = this.headNode;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  // Returns the index of the node containing the given value.
  // If the value can’t be found in the list, it should return -1.
  // If more than one node has a value matching the given value, it should return the index of the first node with the matching value.
  findIndex(value) {
    let current = this.headNode;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }

    return -1;
  }

  // returns the value of the first node in the list
  // if the list is empty, returns undefined
  head() {
    if (!this.headNode) {
      return undefined;
    }

    return this.headNode.value;
  }

  // inserts new nodes with the given values at the given index.
  // If the index is out of bounds, throw a RangeError.
  insertAt(index, ...values) {
    const listSize = this.size();

    if (!Number.isInteger(index) || index < 0 || index > listSize) {
      throw new RangeError("Index is Out of Bounds");
    }

    if (values.length === 0) {
      return;
    }

    // Create the first new node
    const firstNewNode = new Node(values[0]);
    let lastNewNode = firstNewNode;

    // Create and connect the remaining new nodes
    for (let i = 1; i < values.length; i++) {
      lastNewNode.nextNode = new Node(values[i]);
      lastNewNode = lastNewNode.nextNode;
    }

    // If inserting at the front
    if (index === 0) {
      lastNewNode.nextNode = this.headNode;
      this.headNode = firstNewNode;
      return;
    }

    // Find the node right before the insertion point
    let current = this.headNode;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      current = current.nextNode;
      currentIndex++;
    }

    // Insert the new chain between current and current.nextNode
    lastNewNode.nextNode = current.nextNode;
    current.nextNode = firstNewNode;
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value);

    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }

    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  // Remove the head node from the list and return its value.
  // If it’s used on an empty list, it should just return undefined.
  pop() {
    if (!this.headNode) {
      return undefined;
    }

    // Get the value
    let value = this.headNode.value;
    let newHead = this.headNode.nextNode;

    // Disconnect the current headnode from the list
    // Point headNode to the new Node
    this.headNode.nextNode = null;
    this.headNode = newHead;

    return value;
  }

  // removes the node at the given index.
  // If the given index is out of bounds throw a RangeError
  removeAt(index) {
    if (index < 0 || index > this.size() - 1) {
      throw new RangeError("Index is Out of Bounds");
    }

    if (index === 0) {
      this.pop();
      return;
    }

    let current = this.headNode;
    let traverser = 0;
    while (current) {
      if (traverser === index - 1) {
        let targetNode = current.nextNode;
        current.nextNode = targetNode.nextNode;
        targetNode = null;
        return;
      }
      current = current.nextNode;
      traverser++;
    }
  }

  // returns the total number of nodes in the list
  size() {
    let count = 0;
    let current = this.headNode;

    while (current) {
      count += 1;
      current = current.nextNode;
    }

    return count;
  }

  // returns the value of the last node in the list
  // if the list is empty, returns undefined
  tail() {
    if (!this.headNode) {
      return undefined;
    }

    let current = this.headNode;

    while (current.nextNode) {
      current = current.nextNode;
    }

    return current.value;
  }

  // Represents your LinkedList objects as strings, so you can print them out and preview them in the console.
  // If the list is empty, it should return an empty string
  toString() {
    let output = "";

    if (!this.headNode) {
      return output;
    }

    let current = this.headNode;

    while (current) {
      output += `(${current.value}) -> `;
      current = current.nextNode;
    }

    return (output += "null");
  }
}

export { LinkedList };
